# SpikeVault Phase 1 API Utilities

## Overview

Two core utility modules for fetching Magic: The Gathering data:

### 1. `fetchCardData.ts` - Scryfall API Integration

Fetches card information from Scryfall API with automatic caching.

**Features:**
- Fetch card data by name (exact or fuzzy search)
- 24-hour caching with automatic expiration
- Fallback to search endpoint if autocomplete fails
- Batch card fetching
- TypeScript interfaces for type safety
- Error handling with fallbacks

**Usage:**
```typescript
import { fetchCardData, fetchMultipleCards, clearScryfallCache } from '@/utils/fetchCardData';

// Single card
const response = await fetchCardData("Black Lotus");
console.log(response.data.name); // "Black Lotus"
console.log(response.data.imageUrl); // Full Scryfall image URL
console.log(response.cached); // true if from cache

// Multiple cards
const cards = await fetchMultipleCards(["Counterspell", "Lightning Bolt"]);

// Clear cache if needed
clearScryfallCache();
```

**Returns:**
- `name`: Card name
- `manaCost`: Mana cost notation
- `cmc`: Converted mana cost
- `type`: Card type line
- `imageUrl`: Card image URL
- `scryfallUrl`: Link to Scryfall
- `set`: Set code
- `rarity`: Common/Uncommon/Rare/Mythic
- `keywords`: Ability keywords
- `oracleText`: Card text

---

### 2. `fetch17landsData.ts` - 17Lands Limited Format API

Fetches Limited format (Draft/Sealed) meta data and card statistics.

**Features:**
- Fetch archetypes with win rates
- Fetch card statistics (GPWR, ALSA, GIH WR, IWD)
- Support for Draft and Sealed formats
- BO1 and BO3 game type selection
- 1-hour caching with automatic expiration
- Robust parsing for API response variations
- Error handling with fallbacks

**Usage:**
```typescript
import { fetch17landsData, clear17LandsCache } from '@/utils/fetch17landsData';

// Fetch data for a specific set
const response = await fetch17landsData("OKA", "Draft", "BO1");

// Archetypes with meta info
response.archetypes.forEach(arch => {
  console.log(`${arch.name} (${arch.colors})`);
  console.log(`Win Rate: ${(arch.gameWinRate * 100).toFixed(1)}%`);
  console.log(`Games: ${arch.colorPairingCount}`);
});

// Card statistics
response.cardStats.forEach(card => {
  console.log(`${card.cardName}`);
  console.log(`GPWR: ${card.gpwr.toFixed(3)}`);
  console.log(`Usage: ${card.count} games`);
});

console.log(response.cached); // true if from cache
```

**Card Stats:**
- `gpwr`: Game Play Win Rate (higher = better)
- `alsa`: Average Last Seen At (pick order)
- `gihnwr`: Games in Hand Win Rate
- `iwd`: Improvement When Drawn
- `count`: Number of games card appeared in

---

## Testing

Scryfall API was successfully tested:
```
✅ Scryfall Response:
  Name: Black Lotus
  Mana Cost: {0}
  Type: Artifact
  Rarity: bonus
  Set: VMA
  Image URL: https://cards.scryfall.io/normal/front/b/d/...
```

17Lands API endpoint requires further investigation (may need special headers/authentication).

---

## Implementation Notes

- **Caching**: Both utilities implement in-memory caching with automatic expiration
- **Error Handling**: Network errors are caught and reported with context
- **Fallbacks**: Scryfall API includes fallback search if primary method fails
- **Performance**: Cache hits return immediately without network requests
- **Type Safety**: Full TypeScript interfaces for IDE autocomplete

---

## Future Enhancements

- [ ] Redis/persistent caching for production
- [ ] Rate limiting to respect API limits
- [ ] Batch requests for performance
- [ ] WebSocket support for real-time meta updates
- [ ] Historical data tracking
