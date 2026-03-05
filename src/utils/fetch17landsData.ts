/**
 * 17Lands API Utilities for SpikeVault
 * Fetches Limited format data (Draft/Sealed) with caching
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * 17Lands API Utilities for SpikeVault
 * Fetches Limited format data (Draft/Sealed) with caching
 */

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

export interface CardStats {
  cardName: string;
  url: string;
  gpwr: number; // Game Play Win Rate
  alsa: number; // Average Last Seen At
  gihnwr: number; // Games in Hand Winrate
  iwd: number; // Improvement When Drawn
  count: number; // Usage count
}

export interface Archetype {
  id: string;
  name: string;
  colors: string;
  gameWinRate: number;
  matchWinRate: number;
  colorPairingCount: number; // Games played
}

export interface SevenLandsResponse {
  archetypes: Archetype[];
  cardStats: CardStats[];
  cached: boolean;
  lastFetch: number;
}

interface CacheEntry {
  data: SevenLandsResponse;
  timestamp: number;
}

// ============================================================================
// CACHE MANAGEMENT
// ============================================================================

const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
const cache = new Map<string, CacheEntry>();

function getCacheKey(
  setCode: string,
  format: string,
  gameType: string
): string {
  return `17lands:${setCode}:${format}:${gameType}`;
}

function getCachedData(key: string): SevenLandsResponse | null {
  const entry = cache.get(key);
  if (!entry) return null;

  const isExpired = Date.now() - entry.timestamp > CACHE_DURATION;
  if (isExpired) {
    cache.delete(key);
    return null;
  }

  return { ...entry.data, cached: true, lastFetch: entry.timestamp };
}

function setCacheData(key: string, data: SevenLandsResponse): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Fetch Limited format data from 17Lands API
 *
 * @param setCode - Magic set code (e.g., "OKA", "MKM")
 * @param format - "Draft" or "Sealed"
 * @param gameType - "BO1" or "BO3"
 * @returns Promise with archetypes and card statistics
 */
export async function fetch17landsData(
  setCode: string,
  format: "Draft" | "Sealed" = "Draft",
  gameType: "BO1" | "BO3" = "BO1"
): Promise<SevenLandsResponse> {
  const cacheKey = getCacheKey(setCode, format, gameType);

  // Check cache first
  const cached = getCachedData(cacheKey);
  if (cached) {
    console.log(`[17Lands] Cache hit for ${setCode} ${format} ${gameType}`);
    return cached;
  }

  try {
    console.log(
      `[17Lands] Fetching data for ${setCode} ${format} ${gameType}...`
    );

    // Fetch archetypes
    const archetypesUrl = buildArchetypesUrl(setCode, format, gameType);
    const archetypesRes = await fetch(archetypesUrl);

    if (!archetypesRes.ok) {
      throw new Error(
        `17Lands API error: ${archetypesRes.status} ${archetypesRes.statusText}`
      );
    }

    const archetypesData = await archetypesRes.json();
    const archetypes = parseArchetypes(archetypesData);

    // Fetch card statistics
    const cardStatsUrl = buildCardStatsUrl(setCode, format, gameType);
    const cardStatsRes = await fetch(cardStatsUrl);

    if (!cardStatsRes.ok) {
      throw new Error(
        `17Lands API error: ${cardStatsRes.status} ${cardStatsRes.statusText}`
      );
    }

    const cardStatsData = await cardStatsRes.json();
    const cardStats = parseCardStats(cardStatsData);

    const result: SevenLandsResponse = {
      archetypes,
      cardStats,
      cached: false,
      lastFetch: Date.now(),
    };

    // Store in cache
    setCacheData(cacheKey, result);

    console.log(
      `[17Lands] Success: ${archetypes.length} archetypes, ${cardStats.length} cards`
    );
    return result;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : String(error);
    console.error(`[17Lands] Error fetching data:`, errorMsg);
    throw new Error(`Failed to fetch 17Lands data: ${errorMsg}`);
  }
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function buildArchetypesUrl(
  setCode: string,
  format: string,
  gameType: string
): string {
  const formatPath = format === "Sealed" ? "sealed" : "draft";
  const gameTypeParam = gameType === "BO3" ? "BO3" : "BO1";
  return `https://www.17lands.com/api/v0/${formatPath}/${setCode.toUpperCase()}/meta?format=${gameTypeParam}`;
}

function buildCardStatsUrl(
  setCode: string,
  format: string,
  gameType: string
): string {
  const formatPath = format === "Sealed" ? "sealed" : "draft";
  const gameTypeParam = gameType === "BO3" ? "BO3" : "BO1";
  return `https://www.17lands.com/api/v0/${formatPath}/${setCode.toUpperCase()}/cards?format=${gameTypeParam}`;
}

function parseArchetypes(data: any): Archetype[] {
  try {
    // 17Lands returns archetypes in different structures depending on format
    // Handle both meta and archetypes endpoints
    const archs = data.archetypes || data.meta || [];

    return archs.map((arch: any) => ({
      id: arch.id || `${arch.name || 'unknown'}_${Math.random()}`,
      name: arch.name || "Unknown",
      colors: arch.colors || "",
      gameWinRate: arch.game_win_rate ?? arch.wr ?? 0,
      matchWinRate: arch.match_win_rate ?? arch.match_wr ?? 0,
      colorPairingCount: arch.count ?? arch.num_games ?? 0,
    }));
  } catch (error) {
    console.error("[17Lands] Error parsing archetypes:", error);
    return [];
  }
}

function parseCardStats(data: any): CardStats[] {
  try {
    const cards = Array.isArray(data) ? data : data.cards || [];

    return cards.map((card: any) => ({
      cardName: card.name || card.card_name || "Unknown",
      url: card.url || card.card_url || "",
      gpwr: card.gpwr ?? card.game_win_rate ?? 0,
      alsa: card.alsa ?? card.avg_seen ?? 0,
      gihnwr: card.gihnwr ?? card.gih_wr ?? card.game_in_hand_wr ?? 0,
      iwd: card.iwd ?? card.improvement ?? 0,
      count: card.count ?? card.num_games ?? 0,
    }));
  } catch (error) {
    console.error("[17Lands] Error parsing card stats:", error);
    return [];
  }
}

/**
 * Clear the cache (useful for testing or forcing refresh)
 */
export function clear17LandsCache(): void {
  cache.clear();
  console.log("[17Lands] Cache cleared");
}

/**
 * Get cache statistics
 */
export function get17LandsCacheStats() {
  return {
    entries: cache.size,
    keys: Array.from(cache.keys()),
  };
}

