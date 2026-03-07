// Standard Matchup Matrix Data

export interface MatchupData {
  deckName: string;
  metaShare: string;
  overallWinrate: string;
  matchups: Record<string, string | null>; // null = Mirror
}

export const standardMatchups: MatchupData[] = [
  {
    deckName: "Izzet Lessons",
    metaShare: "11.1%",
    overallWinrate: "54.0%",
    matchups: {
      "Izzet Lessons": null,
      "Mono-Green Landfall": "48.9% (174)",
      "Dimir Excruciator": "60.0% (140)",
      "Simic Rhythm": "52.1% (140)",
      "Dimir Midrange": "59.6% (104)",
      "Izzet Elementals": "40.0% (90)",
      "Azorius Tempo": "47.1% (85)",
      "Jeskai Control": "78.2% (55)",
      "Izzet Spellementals": "60.2% (83)",
      "Izzet Prowess": "37.1% (70)",
      "Mono-Red Aggro": "51.2% (41)",
      "Temur Harmonizer": "45.2% (42)",
      "Boros Dragons": "59.2% (49)",
      "Bant Airbending": "48.0% (25)",
      "Other": "61.1% (190)"
    }
  },
  {
    deckName: "Mono-Green Landfall",
    metaShare: "10.6%",
    overallWinrate: "55.1%",
    matchups: {
      "Izzet Lessons": "50.6% (174)",
      "Mono-Green Landfall": null,
      "Dimir Excruciator": "61.1% (131)",
      "Simic Rhythm": "34.1% (132)",
      "Dimir Midrange": "53.1% (98)",
      "Izzet Elementals": "64.4% (87)",
      "Azorius Tempo": "60.2% (83)",
      "Jeskai Control": "70.8% (65)",
      "Izzet Spellementals": "54.9% (91)",
      "Izzet Prowess": "44.1% (93)",
      "Mono-Red Aggro": "66.7% (54)",
      "Temur Harmonizer": "50.0% (40)",
      "Boros Dragons": "52.3% (44)",
      "Bant Airbending": "34.3% (35)",
      "Other": "67.8% (171)"
    }
  },
  {
    deckName: "Dimir Excruciator",
    metaShare: "9.3%",
    overallWinrate: "46.2%",
    matchups: {
      "Izzet Lessons": "40.0% (140)",
      "Mono-Green Landfall": "38.9% (131)",
      "Dimir Excruciator": null,
      "Simic Rhythm": "50.0% (88)",
      "Dimir Midrange": "31.8% (85)",
      "Izzet Elementals": "52.9% (68)",
      "Azorius Tempo": "50.8% (63)",
      "Jeskai Control": "58.3% (48)",
      "Izzet Spellementals": "44.4% (54)",
      "Izzet Prowess": "36.7% (60)",
      "Mono-Red Aggro": "48.3% (29)",
      "Temur Harmonizer": "34.4% (32)",
      "Boros Dragons": "55.9% (34)",
      "Bant Airbending": "53.8% (26)",
      "Other": "57.4% (162)"
    }
  },
  {
    deckName: "Simic Rhythm",
    metaShare: "8.6%",
    overallWinrate: "49.9%",
    matchups: {
      "Izzet Lessons": "47.9% (140)",
      "Mono-Green Landfall": "65.9% (132)",
      "Dimir Excruciator": "50.0% (88)",
      "Simic Rhythm": null,
      "Dimir Midrange": "60.5% (76)",
      "Izzet Elementals": "45.3% (53)",
      "Azorius Tempo": "40.6% (69)",
      "Jeskai Control": "51.4% (35)",
      "Izzet Spellementals": "16.7% (60)",
      "Izzet Prowess": "45.8% (59)",
      "Mono-Red Aggro": "55.6% (27)",
      "Temur Harmonizer": "36.7% (30)",
      "Boros Dragons": "38.7% (31)",
      "Bant Airbending": "35.5% (31)",
      "Other": "59.4% (160)"
    }
  },
  {
    deckName: "Dimir Midrange",
    metaShare: "6.8%",
    overallWinrate: "51.2%",
    matchups: {
      "Izzet Lessons": "40.4% (104)",
      "Mono-Green Landfall": "45.9% (98)",
      "Dimir Excruciator": "67.1% (85)",
      "Simic Rhythm": "39.5% (76)",
      "Dimir Midrange": null,
      "Izzet Elementals": "66.0% (47)",
      "Azorius Tempo": "61.5% (52)",
      "Jeskai Control": "68.2% (44)",
      "Izzet Spellementals": "42.5% (40)",
      "Izzet Prowess": "40.0% (55)",
      "Mono-Red Aggro": "35.5% (31)",
      "Temur Harmonizer": "70.8% (24)",
      "Boros Dragons": "50.0% (30)",
      "Bant Airbending": "43.8% (16)",
      "Other": "53.7% (121)"
    }
  },
  {
    deckName: "Izzet Elementals",
    metaShare: "5.8%",
    overallWinrate: "49.5%",
    matchups: {
      "Izzet Lessons": "58.9% (90)",
      "Mono-Green Landfall": "35.6% (87)",
      "Dimir Excruciator": "42.6% (68)",
      "Simic Rhythm": "54.7% (53)",
      "Dimir Midrange": "31.9% (47)",
      "Izzet Elementals": null,
      "Azorius Tempo": "48.8% (43)",
      "Jeskai Control": "66.7% (36)",
      "Izzet Spellementals": "71.8% (39)",
      "Izzet Prowess": "41.7% (36)",
      "Mono-Red Aggro": "51.7% (29)",
      "Temur Harmonizer": "60.0% (25)",
      "Boros Dragons": "32.1% (28)",
      "Bant Airbending": "41.2% (17)",
      "Other": "54.6% (97)"
    }
  },
  {
    deckName: "Azorius Tempo",
    metaShare: "5.8%",
    overallWinrate: "49.5%",
    matchups: {
      "Izzet Lessons": "52.9% (85)",
      "Mono-Green Landfall": "39.8% (83)",
      "Dimir Excruciator": "49.2% (63)",
      "Simic Rhythm": "58.0% (69)",
      "Dimir Midrange": "38.5% (52)",
      "Izzet Elementals": "48.8% (43)",
      "Azorius Tempo": null,
      "Jeskai Control": "47.4% (38)",
      "Izzet Spellementals": "28.6% (21)",
      "Izzet Prowess": "50.0% (42)",
      "Mono-Red Aggro": "50.0% (16)",
      "Temur Harmonizer": "81.5% (27)",
      "Boros Dragons": "51.9% (27)",
      "Bant Airbending": "34.6% (26)",
      "Other": "53.9% (115)"
    }
  },
  {
    deckName: "Jeskai Control",
    metaShare: "5.3%",
    overallWinrate: "36.7%",
    matchups: {
      "Izzet Lessons": "20.0% (55)",
      "Mono-Green Landfall": "26.2% (65)",
      "Dimir Excruciator": "37.5% (48)",
      "Simic Rhythm": "48.6% (35)",
      "Dimir Midrange": "27.3% (44)",
      "Izzet Elementals": "27.8% (36)",
      "Azorius Tempo": "44.7% (38)",
      "Jeskai Control": null,
      "Izzet Spellementals": "60.0% (25)",
      "Izzet Prowess": "47.6% (21)",
      "Mono-Red Aggro": "25.0% (16)",
      "Temur Harmonizer": "35.7% (14)",
      "Boros Dragons": "71.4% (7)",
      "Bant Airbending": "72.7% (11)",
      "Other": "39.3% (117)"
    }
  },
  {
    deckName: "Izzet Spellementals",
    metaShare: "4.7%",
    overallWinrate: "52.2%",
    matchups: {
      "Izzet Lessons": "39.8% (83)",
      "Mono-Green Landfall": "45.1% (91)",
      "Dimir Excruciator": "53.7% (54)",
      "Simic Rhythm": "83.3% (60)",
      "Dimir Midrange": "57.5% (40)",
      "Izzet Elementals": "25.6% (39)",
      "Azorius Tempo": "71.4% (21)",
      "Jeskai Control": "36.0% (25)",
      "Izzet Spellementals": null,
      "Izzet Prowess": "53.7% (41)",
      "Mono-Red Aggro": "58.8% (17)",
      "Temur Harmonizer": "64.7% (17)",
      "Boros Dragons": "53.8% (13)",
      "Bant Airbending": "75.0% (8)",
      "Other": "52.2% (92)"
    }
  },
  {
    deckName: "Izzet Prowess",
    metaShare: "4.6%",
    overallWinrate: "58.2%",
    matchups: {
      "Izzet Lessons": "61.4% (70)",
      "Mono-Green Landfall": "54.8% (93)",
      "Dimir Excruciator": "63.3% (60)",
      "Simic Rhythm": "54.2% (59)",
      "Dimir Midrange": "60.0% (55)",
      "Izzet Elementals": "58.3% (36)",
      "Azorius Tempo": "50.0% (42)",
      "Jeskai Control": "52.4% (21)",
      "Izzet Spellementals": "46.3% (41)",
      "Izzet Prowess": null,
      "Mono-Red Aggro": "53.3% (30)",
      "Temur Harmonizer": "58.8% (17)",
      "Boros Dragons": "46.2% (13)",
      "Bant Airbending": "93.3% (15)",
      "Other": "65.2% (89)"
    }
  },
  {
    deckName: "Mono-Red Aggro",
    metaShare: "3.2%",
    overallWinrate: "47.2%",
    matchups: {
      "Izzet Lessons": "48.8% (41)",
      "Mono-Green Landfall": "33.3% (54)",
      "Dimir Excruciator": "51.7% (29)",
      "Simic Rhythm": "44.4% (27)",
      "Dimir Midrange": "64.5% (31)",
      "Izzet Elementals": "48.3% (29)",
      "Azorius Tempo": "50.0% (16)",
      "Jeskai Control": "75.0% (16)",
      "Izzet Spellementals": "41.2% (17)",
      "Izzet Prowess": "46.7% (30)",
      "Mono-Red Aggro": null,
      "Temur Harmonizer": "22.2% (18)",
      "Boros Dragons": "35.7% (14)",
      "Bant Airbending": "44.4% (9)",
      "Other": "51.3% (78)"
    }
  },
  {
    deckName: "Temur Harmonizer",
    metaShare: "2.9%",
    overallWinrate: "49.3%",
    matchups: {
      "Izzet Lessons": "52.4% (42)",
      "Mono-Green Landfall": "50.0% (40)",
      "Dimir Excruciator": "62.5% (32)",
      "Simic Rhythm": "63.3% (30)",
      "Dimir Midrange": "29.2% (24)",
      "Izzet Elementals": "40.0% (25)",
      "Azorius Tempo": "14.8% (27)",
      "Jeskai Control": "64.3% (14)",
      "Izzet Spellementals": "35.3% (17)",
      "Izzet Prowess": "29.4% (17)",
      "Mono-Red Aggro": "77.8% (18)",
      "Temur Harmonizer": null,
      "Boros Dragons": "40.0% (15)",
      "Bant Airbending": "66.7% (15)",
      "Other": "57.4% (47)"
    }
  },
  {
    deckName: "Boros Dragons",
    metaShare: "2.8%",
    overallWinrate: "51.8%",
    matchups: {
      "Izzet Lessons": "40.8% (49)",
      "Mono-Green Landfall": "47.7% (44)",
      "Dimir Excruciator": "44.1% (34)",
      "Simic Rhythm": "61.3% (31)",
      "Dimir Midrange": "50.0% (30)",
      "Izzet Elementals": "67.9% (28)",
      "Azorius Tempo": "48.1% (27)",
      "Jeskai Control": "28.6% (7)",
      "Izzet Spellementals": "46.2% (13)",
      "Izzet Prowess": "53.8% (13)",
      "Mono-Red Aggro": "64.3% (14)",
      "Temur Harmonizer": "60.0% (15)",
      "Boros Dragons": null,
      "Bant Airbending": "61.5% (13)",
      "Other": "54.9% (51)"
    }
  },
  {
    deckName: "Bant Airbending",
    metaShare: "2.5%",
    overallWinrate: "50.2%",
    matchups: {
      "Izzet Lessons": "52.0% (25)",
      "Mono-Green Landfall": "65.7% (35)",
      "Dimir Excruciator": "46.2% (26)",
      "Simic Rhythm": "64.5% (31)",
      "Dimir Midrange": "56.3% (16)",
      "Izzet Elementals": "58.8% (17)",
      "Azorius Tempo": "61.5% (26)",
      "Jeskai Control": "27.3% (11)",
      "Izzet Spellementals": "25.0% (8)",
      "Izzet Prowess": "6.7% (15)",
      "Mono-Red Aggro": "55.6% (9)",
      "Temur Harmonizer": "33.3% (15)",
      "Boros Dragons": "38.5% (13)",
      "Bant Airbending": null,
      "Other": "50.0% (50)"
    }
  },
  {
    deckName: "Other",
    metaShare: "16.0%",
    overallWinrate: "42.1%",
    matchups: {
      "Izzet Lessons": "38.9% (190)",
      "Mono-Green Landfall": "31.6% (171)",
      "Dimir Excruciator": "39.5% (162)",
      "Simic Rhythm": "39.4% (160)",
      "Dimir Midrange": "45.5% (121)",
      "Izzet Elementals": "43.3% (97)",
      "Azorius Tempo": "45.2% (115)",
      "Jeskai Control": "54.7% (117)",
      "Izzet Spellementals": "47.8% (92)",
      "Izzet Prowess": "33.7% (89)",
      "Mono-Red Aggro": "48.7% (78)",
      "Temur Harmonizer": "42.6% (47)",
      "Boros Dragons": "45.1% (51)",
      "Bant Airbending": "50.0% (50)",
      "Other": null
    }
  }
];

export const allDecks = standardMatchups.map(m => m.deckName);
