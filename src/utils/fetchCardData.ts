/**
 * Scryfall API Utilities for SpikeVault
 * Fetches Magic card data with caching and memoization
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Scryfall API Utilities for SpikeVault
 * Fetches Magic card data with caching and memoization
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface CardImage {
  small: string;
  normal: string;
  large: string;
}

export interface CardData {
  name: string;
  manaCost: string;
  cmc: number;
  type: string;
  imageUrl: string;
  scryfallUrl: string;
  set: string;
  collectorNumber: string;
  rarity: string;
  keywords: string[];
  oracleText: string;
}

export interface ScryfallResponse {
  data: CardData;
  cached: boolean;
  timestamp: number;
}

interface CacheEntry {
  data: CardData;
  timestamp: number;
}

// ============================================================================
// CACHE MANAGEMENT
// ============================================================================

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const cache = new Map<string, CacheEntry>();

function getCacheKey(cardName: string): string {
  return `scryfall:${cardName.toLowerCase().trim()}`;
}

function getCachedData(key: string): CardData | null {
  const entry = cache.get(key);
  if (!entry) return null;

  const isExpired = Date.now() - entry.timestamp > CACHE_DURATION;
  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}

function setCacheData(key: string, data: CardData): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Fetch card data from Scryfall API with caching
 *
 * @param cardName - Card name to search for
 * @param fuzzy - If true, uses fuzzy search (default: true)
 * @returns Promise with card data and cache status
 */
export async function fetchCardData(
  cardName: string,
  fuzzy: boolean = true
): Promise<ScryfallResponse> {
  const cacheKey = getCacheKey(cardName);

  // Check cache first
  const cached = getCachedData(cacheKey);
  if (cached) {
    console.log(`[Scryfall] Cache hit for "${cardName}"`);
    return {
      data: cached,
      cached: true,
      timestamp: Date.now(),
    };
  }

  try {
    console.log(`[Scryfall] Fetching data for "${cardName}"...`);

    const url = fuzzy
      ? `https://api.scryfall.com/cards/autocomplete?q=${encodeURIComponent(cardName)}`
      : `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;

    const response = await fetch(url);

    if (!response.ok) {
      // Try fallback approach: search endpoint
      if (fuzzy && response.status === 404) {
        console.log(`[Scryfall] Autocomplete failed, trying search...`);
        return fetchCardDataBySearch(cardName);
      }

      throw new Error(
        `Scryfall API error: ${response.status} ${response.statusText}`
      );
    }

    let cardData: CardData;

    if (fuzzy) {
      // Autocomplete endpoint returns different format
      const autocompleteData = await response.json();
      if (!autocompleteData.data || autocompleteData.data.length === 0) {
        return fetchCardDataBySearch(cardName);
      }

      // Get the first match and fetch full details
      const selectedCardName = autocompleteData.data[0];
      cardData = await fetchCardDataByExactName(selectedCardName);
    } else {
      const scryfallCard = await response.json();
      cardData = parseScryfallCard(scryfallCard);
    }

    // Store in cache
    setCacheData(cacheKey, cardData);

    console.log(`[Scryfall] Success: ${cardData.name}`);
    return {
      data: cardData,
      cached: false,
      timestamp: Date.now(),
    };
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : String(error);
    console.error(`[Scryfall] Error fetching data for "${cardName}":`, errorMsg);
    throw new Error(`Failed to fetch card data from Scryfall: ${errorMsg}`);
  }
}

/**
 * Fetch card by exact name
 */
async function fetchCardDataByExactName(cardName: string): Promise<CardData> {
  const url = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Card not found: ${cardName}`);
  }

  const scryfallCard = await response.json();
  return parseScryfallCard(scryfallCard);
}

/**
 * Fetch card by search (fallback)
 */
async function fetchCardDataBySearch(cardName: string): Promise<ScryfallResponse> {
  const url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(cardName)}&unique=prints&order=released&dir=desc`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Card not found: ${cardName}`);
  }

  const searchResult = await response.json();

  if (!searchResult.data || searchResult.data.length === 0) {
    throw new Error(`No cards found matching "${cardName}"`);
  }

  // Use the first (most recent) result
  const scryfallCard = searchResult.data[0];
  const cardData = parseScryfallCard(scryfallCard);

  const cacheKey = getCacheKey(cardName);
  setCacheData(cacheKey, cardData);

  return {
    data: cardData,
    cached: false,
    timestamp: Date.now(),
  };
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function parseScryfallCard(scryfallCard: any): CardData {
  try {
    // Choose the best image based on what's available
    const imageUrl = scryfallCard.image_uris?.normal 
      || scryfallCard.card_faces?.[0]?.image_uris?.normal
      || scryfallCard.image_uris?.large
      || "";

    return {
      name: scryfallCard.name || "Unknown",
      manaCost: scryfallCard.mana_cost || "",
      cmc: scryfallCard.cmc || 0,
      type: scryfallCard.type_line || "",
      imageUrl,
      scryfallUrl: scryfallCard.scryfall_uri || "",
      set: scryfallCard.set?.toUpperCase() || "",
      collectorNumber: scryfallCard.collector_number || "",
      rarity: scryfallCard.rarity || "unknown",
      keywords: scryfallCard.keywords || [],
      oracleText: scryfallCard.oracle_text || "",
    };
  } catch (error) {
    console.error("[Scryfall] Error parsing card:", error);
    throw new Error("Failed to parse Scryfall card data");
  }
}

/**
 * Batch fetch multiple cards (with caching)
 */
export async function fetchMultipleCards(
  cardNames: string[]
): Promise<Map<string, CardData>> {
  const results = new Map<string, CardData>();

  for (const cardName of cardNames) {
    try {
      const response = await fetchCardData(cardName);
      results.set(cardName, response.data);
    } catch (error) {
      console.warn(`Failed to fetch "${cardName}":`, error);
    }
  }

  return results;
}

/**
 * Clear the cache (useful for testing or forcing refresh)
 */
export function clearScryfallCache(): void {
  cache.clear();
  console.log("[Scryfall] Cache cleared");
}

/**
 * Get cache statistics
 */
export function getScryfallCacheStats() {
  return {
    entries: cache.size,
    keys: Array.from(cache.keys()),
  };
}

