/**
 * Test script for Phase 1 API utilities
 * Tests 17Lands and Scryfall APIs with logging
 */

// ============================================================================
// TEST FUNCTION
// ============================================================================

async function runTests() {
  console.log("🧪 SpikeVault Phase 1 API Test Suite\n");

  // Test 1: Scryfall API
  console.log("=".repeat(50));
  console.log("TEST 1: Scryfall API - Fetch Card Data");
  console.log("=".repeat(50));

  try {
    // Import would normally be: import { fetchCardData } from './utils/fetchCardData';
    // For this test, we simulate the fetch
    const cardName = "Black Lotus";
    console.log(`\nFetching card data for: "${cardName}"\n`);

    const scryfallUrl = `https://api.scryfall.com/cards/named?exact=${encodeURIComponent(cardName)}`;
    const scryfallRes = await fetch(scryfallUrl);

    if (scryfallRes.ok) {
      const cardData = await scryfallRes.json();
      console.log("✅ Scryfall API Response:");
      console.log(`   Name: ${cardData.name}`);
      console.log(`   Mana Cost: ${cardData.mana_cost}`);
      console.log(`   Type: ${cardData.type_line}`);
      console.log(`   Rarity: ${cardData.rarity}`);
      console.log(`   Set: ${cardData.set.toUpperCase()}`);
      console.log(`   Image: ${cardData.image_uris?.normal ? "Available" : "N/A"}`);
    } else {
      console.log(`❌ Scryfall API Error: ${scryfallRes.status}`);
    }
  } catch (error) {
    console.log(`❌ Scryfall Test Error: ${error.message}`);
  }

  // Test 2: 17Lands API
  console.log("\n" + "=".repeat(50));
  console.log("TEST 2: 17Lands API - Fetch Limited Format Data");
  console.log("=".repeat(50));

  try {
    const setCode = "OKA"; // Outlaws of Thunder Junction (recent draft format)
    const format = "Draft";
    const gameType = "BO1";

    console.log(`\nFetching 17Lands data for:`);
    console.log(`   Set: ${setCode}`);
    console.log(`   Format: ${format}`);
    console.log(`   Game Type: ${gameType}\n`);

    // Fetch archetypes
    const archetypesUrl = `https://www.17lands.com/api/v0/draft/${setCode.toUpperCase()}/meta?format=${gameType}`;
    const archetypesRes = await fetch(archetypesUrl);

    if (archetypesRes.ok) {
      const archetypesData = await archetypesRes.json();
      console.log(`✅ 17Lands Archetypes Response:`);
      console.log(`   Total archetypes: ${(archetypesData.archetypes || []).length}`);
      
      if (archetypesData.archetypes && archetypesData.archetypes.length > 0) {
        const arch = archetypesData.archetypes[0];
        console.log(`   Top archetype: ${arch.name}`);
        console.log(`   Colors: ${arch.colors}`);
        console.log(`   Winrate: ${arch.game_win_rate ? (arch.game_win_rate * 100).toFixed(1) : "N/A"}%`);
        console.log(`   Games: ${arch.count}`);
      }
    } else {
      console.log(`❌ 17Lands Archetypes Error: ${archetypesRes.status}`);
    }

    // Fetch card stats
    const cardStatsUrl = `https://www.17lands.com/api/v0/draft/${setCode.toUpperCase()}/cards?format=${gameType}`;
    const cardStatsRes = await fetch(cardStatsUrl);

    if (cardStatsRes.ok) {
      const cardStatsData = await cardStatsRes.json();
      console.log(`\n✅ 17Lands Card Stats Response:`);
      console.log(`   Total cards: ${(cardStatsData.data || cardStatsData).length || "N/A"}`);
      
      const cards = Array.isArray(cardStatsData) ? cardStatsData : cardStatsData.data || [];
      if (cards.length > 0) {
        // Find the card with highest GPWR
        const topCard = cards.reduce((best, card) => {
          const bestGpwr = best.gpwr || best.game_win_rate || 0;
          const cardGpwr = card.gpwr || card.game_win_rate || 0;
          return cardGpwr > bestGpwr ? card : best;
        });

        console.log(`   Top card (by GPWR): ${topCard.name}`);
        console.log(`   GPWR: ${(topCard.gpwr || topCard.game_win_rate || 0).toFixed(3)}`);
        console.log(`   Usage: ${topCard.count || topCard.num_games || "N/A"} games`);
      }
    } else {
      console.log(`❌ 17Lands Card Stats Error: ${cardStatsRes.status}`);
    }
  } catch (error) {
    console.log(`❌ 17Lands Test Error: ${error.message}`);
  }

  console.log("\n" + "=".repeat(50));
  console.log("✅ Test suite completed!");
  console.log("=".repeat(50));
}

// Run tests
runTests().catch(console.error);
