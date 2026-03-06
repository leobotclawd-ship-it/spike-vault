export interface DeckList {
  name: string;
  metaShare: string;
  tier: 1 | 2 | 3;
  colors: string[];
  keyCards: string[];
  description: string;
}

export interface ProContent {
  title: string;
  author: string;
  type: "article" | "video" | "stream";
  url: string;
}

export interface FormatData {
  name: string;
  slug: string;
  description: string;
  metaOverview: string;
  topDecks: DeckList[];
  proContent: ProContent[];
  upcomingTournaments?: string[];
}

// Limited Format Interfaces
export interface LimitedArchetype {
  name: string;
  colors: string[];
  draftBO1WR: number;
  draftBO3WR: number;
  sealedBO1WR: number;
  sealedBO3WR: number;
  draftBO1Meta: number;
  draftBO3Meta: number;
  sealedBO1Meta: number;
  sealedBO3Meta: number;
}

export interface CardStat {
  name: string;
  type: string;
  colors: string[];
  gpwr: number;
  alsa: number;
  gihWr: number;
  iwd: number;
  pickCount: number;
  avgPick: number;
}

export interface LimitedSet {
  setCode: string;
  setName: string;
  releaseDate: string;
  archetypes: LimitedArchetype[];
  cardStats: CardStat[];
  mechanics: string[];
  lastUpdated: string;
}

const COLOR_SYMBOLS: Record<string, string> = {
  W: "Plains",
  U: "Island",
  B: "Swamp",
  R: "Mountain",
  G: "Forest",
  C: "Colorless",
};

export { COLOR_SYMBOLS };

export const formats: FormatData[] = [
  {
    name: "Standard",
    slug: "standard",
    description: "The most recently released Magic cards in competitive play.",
    metaOverview: "Standard is Magic's evergreen format featuring the newest sets. The meta shifts with each release.",
    topDecks: [
      {
        name: "Mono Red Aggro",
        tier: 1,
        metaShare: "18%",
        colors: ["R"],
        keyCards: ["Thunderous Wrath", "Embercleave"],
        description: "Fast and aggressive red deck focused on early damage."
      },
      {
        name: "Azorius Control",
        tier: 1,
        metaShare: "15%",
        colors: ["W", "U"],
        keyCards: ["Counterspell", "Wrath of God"],
        description: "Control deck using blue and white magic."
      },
      {
        name: "Gruul Midrange",
        tier: 2,
        metaShare: "10%",
        colors: ["G", "R"],
        keyCards: ["Bonecrusher Giant", "Embercleave"],
        description: "Midrange strategy combining green and red."
      }
    ],
    proContent: [
      {
        type: "article",
        title: "Standard Meta Analysis",
        author: "ProPlayer",
        url: "#"
      },
      {
        type: "video",
        title: "Standard Deck Tech",
        author: "YouTuber",
        url: "#"
      }
    ],
    upcomingTournaments: ["arena-direct-1", "rc-season-1", "arena-weekend-1"]
  },
  {
    name: "Limited",
    slug: "limited",
    description: "Booster draft and sealed deck formats using limited card pools.",
    metaOverview: "Limited formats emphasize adaptability and card evaluation with a restricted card pool.",
    topDecks: [
      {
        name: "Blue-White Fliers",
        tier: 1,
        metaShare: "20%",
        colors: ["U", "W"],
        keyCards: ["Sky Winder Drake", "Favorable Winds"],
        description: "Flying-focused limited deck."
      },
      {
        name: "Black-Green Ramp",
        tier: 1,
        metaShare: "16%",
        colors: ["B", "G"],
        keyCards: ["Cultivate", "Vampire Bloodline"],
        description: "Ramp strategy for limited play."
      }
    ],
    proContent: [
      {
        type: "article",
        title: "Limited Format Guide",
        author: "DraftGuru",
        url: "#"
      }
    ],
    upcomingTournaments: ["pro-tour-1", "pro-tour-2", "pro-tour-3", "pro-tour-4"]
  },
  {
    name: "Pioneer",
    slug: "pioneer",
    description: "Includes cards from Return to Ravnica and later.",
    metaOverview: "Pioneer features a diverse meta with multiple viable strategies across the format.",
    topDecks: [
      {
        name: "Izzet Murktide",
        tier: 1,
        metaShare: "12%",
        colors: ["U", "R"],
        keyCards: ["Murktide", "Counterspell"],
        description: "Tempo strategy using blue-red."
      },
      {
        name: "Mono Black Aggro",
        tier: 1,
        metaShare: "11%",
        colors: ["B"],
        keyCards: ["Thoughtseize", "Gurmag Angler"],
        description: "Aggressive black strategy."
      }
    ],
    proContent: [
      {
        type: "stream",
        title: "Pioneer Brewing Session",
        author: "StreamStar",
        url: "#"
      }
    ],
    upcomingTournaments: ["sq-mtgo-1", "rc-season-1"]
  },
  {
    name: "Modern",
    slug: "modern",
    description: "Includes cards from Eighth Edition and later.",
    metaOverview: "Modern features powerful spells and a diverse competitive landscape.",
    topDecks: [
      {
        name: "Murktide Murktide",
        tier: 1,
        metaShare: "14%",
        colors: ["U", "R"],
        keyCards: ["Murktide", "Dragon's Rage Channeler"],
        description: "Tempo deck for modern play."
      }
    ],
    proContent: [
      {
        type: "article",
        title: "Modern Primer",
        author: "ModernGuru",
        url: "#"
      }
    ],
    upcomingTournaments: ["sq-mtgo-2", "pro-tour-2", "rc-season-2"]
  },
  {
    name: "Legacy",
    slug: "legacy",
    description: "All cards are legal except for a small banned list.",
    metaOverview: "Legacy is defined by powerful tutors, fast mana, and explosive strategies.",
    topDecks: [
      {
        name: "RUG Delver",
        tier: 1,
        metaShare: "13%",
        colors: ["R", "U", "G"],
        keyCards: ["Delver of Secrets", "Lightning Bolt"],
        description: "Fast delver-based tempo strategy."
      }
    ],
    proContent: [
      {
        type: "article",
        title: "Legacy Metagame",
        author: "LegacyPro",
        url: "#"
      }
    ],
    upcomingTournaments: ["pro-tour-3"]
  },
  {
    name: "Vintage",
    slug: "vintage",
    description: "Nearly all Magic cards are legal.",
    metaOverview: "Vintage is the oldest format with access to the most powerful spells in Magic history.",
    topDecks: [
      {
        name: "Dredge",
        tier: 1,
        metaShare: "11%",
        colors: ["B", "R", "G"],
        keyCards: ["Bazaar of Baghdad", "Golgari Grave-Troll"],
        description: "Dredge strategy for vintage play."
      }
    ],
    proContent: [
      {
        type: "stream",
        title: "Vintage Championship",
        author: "VintageGod",
        url: "#"
      }
    ],
    upcomingTournaments: ["pro-tour-4"]
  },
  {
    name: "Pauper",
    slug: "pauper",
    description: "Only common cards are legal.",
    metaOverview: "Pauper offers an affordable and diverse competitive format.",
    topDecks: [
      {
        name: "Grixis Control",
        tier: 1,
        metaShare: "15%",
        colors: ["G", "R", "U"],
        keyCards: ["Counterspell", "Terminate"],
        description: "Control strategy for pauper."
      }
    ],
    proContent: [
      {
        type: "article",
        title: "Pauper Guide",
        author: "PauperKing",
        url: "#"
      }
    ],
    upcomingTournaments: []
  },
  {
    name: "Commander",
    slug: "commander",
    description: "100-card singleton format with a legendary creature general.",
    metaOverview: "Commander is a social and powerful format with incredible deck diversity.",
    topDecks: [
      {
        name: "Kaalia of the Vast",
        tier: 1,
        metaShare: "8%",
        colors: ["W", "B", "R"],
        keyCards: ["Kaalia of the Vast", "Reanimate"],
        description: "Angel/Demon/Dragon strategy."
      }
    ],
    proContent: [
      {
        type: "video",
        title: "Commander Gameplay",
        author: "CommanderGuy",
        url: "#"
      }
    ],
    upcomingTournaments: ["mwc-2026"]
  }
];

export const limitedSets: LimitedSet[] = [
  {
    setCode: "TMNT",
    setName: "Teenage Mutant Ninja Turtles: Shellbreak",
    releaseDate: "2026-02-01",
    lastUpdated: "2026-03-05T19:00:00Z",
    mechanics: [
      "Ninjutsu - Return creature to hand, cast another for its ninjutsu cost",
      "Mutate - Stack abilities when mutating creatures",
      "Pizza Tokens - Food tokens that can be sacrificed",
      "Sewer Tokens - Create map tokens to explore dungeons"
    ],
    archetypes: [
      {
        name: "Dimir Ninjas",
        colors: ["U", "B"],
        draftBO1WR: 0.552,
        draftBO3WR: 0.561,
        sealedBO1WR: 0.548,
        sealedBO3WR: 0.555,
        draftBO1Meta: 0.082,
        draftBO3Meta: 0.075,
        sealedBO1Meta: 0.065,
        sealedBO3Meta: 0.070
      },
      {
        name: "Gruul Mutate",
        colors: ["G", "R"],
        draftBO1WR: 0.540,
        draftBO3WR: 0.548,
        sealedBO1WR: 0.535,
        sealedBO3WR: 0.542,
        draftBO1Meta: 0.076,
        draftBO3Meta: 0.082,
        sealedBO1Meta: 0.071,
        sealedBO3Meta: 0.068
      },
      {
        name: "Orzhov Tokens",
        colors: ["O", "B"],
        draftBO1WR: 0.528,
        draftBO3WR: 0.536,
        sealedBO1WR: 0.524,
        sealedBO3WR: 0.532,
        draftBO1Meta: 0.068,
        draftBO3Meta: 0.072,
        sealedBO1Meta: 0.059,
        sealedBO3Meta: 0.061
      },
      {
        name: "Azorius Fliers",
        colors: ["W", "U"],
        draftBO1WR: 0.520,
        draftBO3WR: 0.527,
        sealedBO1WR: 0.515,
        sealedBO3WR: 0.523,
        draftBO1Meta: 0.064,
        draftBO3Meta: 0.068,
        sealedBO1Meta: 0.052,
        sealedBO3Meta: 0.055
      }
    ],
            cardStats: [
      {
        name: "Mighty Mutanimals",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.6779999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 133,
        avgPick: 3.5
      },
      {
        name: "Leonardo, Leader in Blue",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.6779999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 124,
        avgPick: 3.5
      },
      {
        name: "Nobody",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0.6759999999999999,
        alsa: 6.52,
        gihWr: 0.6759999999999999,
        iwd: 0.4,
        pickCount: 392,
        avgPick: 3.5
      },
      {
        name: "Ooze Spill",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.6729999999999999,
        alsa: 5.61,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 132,
        avgPick: 3.5
      },
      {
        name: "Dream Beavers",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.6659999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 109,
        avgPick: 3.5
      },
      {
        name: "Donatello, Way with Machines",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.6659999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 112,
        avgPick: 3.5
      },
      {
        name: "Casey Jones, Jury-Rig Justiciar",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.6629999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 131,
        avgPick: 3.5
      },
      {
        name: "The Last Ronin",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0.659,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 51,
        avgPick: 3.5
      },
      {
        name: "Lita, Little Orphan Amphibian",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.6579999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 134,
        avgPick: 3.5
      },
      {
        name: "Return to the Sewers",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.6559999999999999,
        alsa: 6.8,
        gihWr: 0.674,
        iwd: 0.4,
        pickCount: 452,
        avgPick: 3.5
      },
      {
        name: "Metalhead",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.6559999999999999,
        alsa: 0,
        gihWr: 0.677,
        iwd: 0.4,
        pickCount: 215,
        avgPick: 3.5
      },
      {
        name: "Lord Dregg, Insect Invader",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.655,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 104,
        avgPick: 3.5
      },
      {
        name: "Mouser Foundry",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.654,
        alsa: 5.45,
        gihWr: 0.672,
        iwd: 0.4,
        pickCount: 330,
        avgPick: 3.5
      },
      {
        name: "Donatello, Turtle Techie",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.653,
        alsa: 5.6,
        gihWr: 0.6759999999999999,
        iwd: 0.4,
        pickCount: 357,
        avgPick: 3.5
      },
      {
        name: "Manhole Missile",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.653,
        alsa: 4.66,
        gihWr: 0.65,
        iwd: 0.4,
        pickCount: 381,
        avgPick: 3.5
      },
      {
        name: "Koya, Death from Above",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.6509999999999999,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 147,
        avgPick: 3.5
      },
      {
        name: "Buzz Bots",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.649,
        alsa: 5.55,
        gihWr: 0.6970000000000001,
        iwd: 0.4,
        pickCount: 294,
        avgPick: 3.5
      },
      {
        name: "Brilliance Unleashed",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0.648,
        alsa: 4.45,
        gihWr: 0.698,
        iwd: 0.4,
        pickCount: 194,
        avgPick: 3.5
      },
      {
        name: "General Traag, Heart of Stone",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.647,
        alsa: 4.42,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 148,
        avgPick: 3.5
      },
      {
        name: "Oroku Saki, Shredder Rising",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.644,
        alsa: 5.27,
        gihWr: 0.636,
        iwd: 0.4,
        pickCount: 323,
        avgPick: 3.5
      },
      {
        name: "Squirrelanoids",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.644,
        alsa: 5.51,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 227,
        avgPick: 3.5
      },
      {
        name: "Lessons from Life",
        type: "Creature",
        colors: ["UG"],
        gpwr: 0.643,
        alsa: 4.64,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 166,
        avgPick: 3.5
      },
      {
        name: "Sewer-veillance Cam",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.643,
        alsa: 6.46,
        gihWr: 0.6629999999999999,
        iwd: 0.4,
        pickCount: 339,
        avgPick: 3.5
      },
      {
        name: "Mechanized Ninja Cavalry",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0.642,
        alsa: 4.74,
        gihWr: 0.653,
        iwd: 0.4,
        pickCount: 374,
        avgPick: 3.5
      },
      {
        name: "April O'Neil, Kunoichi Trainee",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.635,
        alsa: 5.07,
        gihWr: 0.643,
        iwd: 0.4,
        pickCount: 298,
        avgPick: 3.5
      },
      {
        name: "Genghis Frog",
        type: "Creature",
        colors: ["UG"],
        gpwr: 0.635,
        alsa: 4.48,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 153,
        avgPick: 3.5
      },
      {
        name: "Spicy Oatmeal Pizza",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.635,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 153,
        avgPick: 3.5
      },
      {
        name: "Baxter Stockman",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0.635,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 136,
        avgPick: 3.5
      },
      {
        name: "Mouser Mark III",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0.635,
        alsa: 6.76,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 287,
        avgPick: 3.5
      },
      {
        name: "TCRI Building",
        type: "Creature",
        colors: [],
        gpwr: 0.632,
        alsa: 6.85,
        gihWr: 0.655,
        iwd: 0.4,
        pickCount: 313,
        avgPick: 3.5
      },
      {
        name: "Courier of Comestibles",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.632,
        alsa: 4.53,
        gihWr: 0.6579999999999999,
        iwd: 0.4,
        pickCount: 213,
        avgPick: 3.5
      },
      {
        name: "The Last Ronin's Technique",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.631,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 103,
        avgPick: 3.5
      },
      {
        name: "Mutant Town",
        type: "Creature",
        colors: [],
        gpwr: 0.631,
        alsa: 6.51,
        gihWr: 0.6859999999999999,
        iwd: 0.4,
        pickCount: 278,
        avgPick: 3.5
      },
      {
        name: "Uneasy Alliance",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.629,
        alsa: 4.66,
        gihWr: 0.603,
        iwd: 0.4,
        pickCount: 270,
        avgPick: 3.5
      },
      {
        name: "High-Flying Ace",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.629,
        alsa: 6.46,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 238,
        avgPick: 3.5
      },
      {
        name: "Action News Crew",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.628,
        alsa: 6.18,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 289,
        avgPick: 3.5
      },
      {
        name: "Frog Butler",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.627,
        alsa: 4.29,
        gihWr: 0.6709999999999999,
        iwd: 0.4,
        pickCount: 366,
        avgPick: 3.5
      },
      {
        name: "EPF Point Squad",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0.627,
        alsa: 5.84,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 205,
        avgPick: 3.5
      },
      {
        name: "Grounded for Life",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.627,
        alsa: 5.16,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 200,
        avgPick: 3.5
      },
      {
        name: "Foot Headquarters",
        type: "Creature",
        colors: [],
        gpwr: 0.625,
        alsa: 6.32,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 227,
        avgPick: 3.5
      },
      {
        name: "Novel Nunchaku",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.625,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 144,
        avgPick: 3.5
      },
      {
        name: "Karai's Technique",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0.625,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 132,
        avgPick: 3.5
      },
      {
        name: "Karai, Future of the Foot",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0.624,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 109,
        avgPick: 3.5
      },
      {
        name: "Mind Transfer Protocol",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.621,
        alsa: 7.17,
        gihWr: 0.6459999999999999,
        iwd: 0.4,
        pickCount: 349,
        avgPick: 3.5
      },
      {
        name: "Omni-Cheese Pizza",
        type: "Creature",
        colors: [],
        gpwr: 0.62,
        alsa: 6.4,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 354,
        avgPick: 3.5
      },
      {
        name: "Featherbrained Filcher",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.62,
        alsa: 4.94,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 122,
        avgPick: 3.5
      },
      {
        name: "Jennika, Bad Apple Big Sister",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.619,
        alsa: 6.2,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 236,
        avgPick: 3.5
      },
      {
        name: "Illegitimate Business",
        type: "Creature",
        colors: [],
        gpwr: 0.619,
        alsa: 6.07,
        gihWr: 0.647,
        iwd: 0.4,
        pickCount: 263,
        avgPick: 3.5
      },
      {
        name: "Henchbots",
        type: "Creature",
        colors: [],
        gpwr: 0.619,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 112,
        avgPick: 3.5
      },
      {
        name: "Dimension X",
        type: "Creature",
        colors: [],
        gpwr: 0.618,
        alsa: 7.05,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 237,
        avgPick: 3.5
      },
      {
        name: "Slithering Cryptid",
        type: "Creature",
        colors: ["UG"],
        gpwr: 0.618,
        alsa: 6.1,
        gihWr: 0.63,
        iwd: 0.4,
        pickCount: 357,
        avgPick: 3.5
      },
      {
        name: "Stomped by the Foot",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.617,
        alsa: 4.47,
        gihWr: 0.619,
        iwd: 0.4,
        pickCount: 339,
        avgPick: 3.5
      },
      {
        name: "Leonardo, Big Brother",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.617,
        alsa: 5.2,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 192,
        avgPick: 3.5
      },
      {
        name: "Dimensional Exile",
        type: "Creature",
        colors: ["W"],
        gpwr: 0.616,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 134,
        avgPick: 3.5
      },
      {
        name: "Escape Tunnel",
        type: "Creature",
        colors: [],
        gpwr: 0.616,
        alsa: 5.43,
        gihWr: 0.633,
        iwd: 0.4,
        pickCount: 321,
        avgPick: 3.5
      },
      {
        name: "Tainted Treats",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0.615,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 138,
        avgPick: 3.5
      },
      {
        name: "Shredder's Technique",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.612,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 118,
        avgPick: 3.5
      },
      {
        name: "Pizza Face, Gastromancer",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0.612,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 159,
        avgPick: 3.5
      },
      {
        name: "Anchovy & Banana Pizza",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.612,
        alsa: 3.91,
        gihWr: 0.621,
        iwd: 0.4,
        pickCount: 358,
        avgPick: 3.5
      },
      {
        name: "Michelangelo, Mutant BFF",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.611,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 123,
        avgPick: 3.5
      },
      {
        name: "Guac & Marshmallow Pizza",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.61,
        alsa: 6.78,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 270,
        avgPick: 3.5
      },
      {
        name: "Everything Pizza",
        type: "Creature",
        colors: [],
        gpwr: 0.609,
        alsa: 5.9,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 174,
        avgPick: 3.5
      },
      {
        name: "Purple Dragon Punks",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.606,
        alsa: 7.42,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 260,
        avgPick: 3.5
      },
      {
        name: "Bot Bashing Time",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.606,
        alsa: 6.19,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 260,
        avgPick: 3.5
      },
      {
        name: "Ragamuffin Raptor",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.605,
        alsa: 6.4,
        gihWr: 0.624,
        iwd: 0.4,
        pickCount: 367,
        avgPick: 3.5
      },
      {
        name: "Foot Ninjas",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0.604,
        alsa: 5.98,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 230,
        avgPick: 3.5
      },
      {
        name: "Primordial Pachyderm",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.604,
        alsa: 6.11,
        gihWr: 0.636,
        iwd: 0.4,
        pickCount: 311,
        avgPick: 3.5
      },
      {
        name: "Michelangelo, Game Master",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.604,
        alsa: 5.26,
        gihWr: 0.596,
        iwd: 0.4,
        pickCount: 235,
        avgPick: 3.5
      },
      {
        name: "West Wind Avatar",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.603,
        alsa: 4.11,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 135,
        avgPick: 3.5
      },
      {
        name: "Mona Lisa, Science Geek",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.602,
        alsa: 4.64,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 116,
        avgPick: 3.5
      },
      {
        name: "Rocksteady, Crash Courser",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.6,
        alsa: 6.44,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 225,
        avgPick: 3.5
      },
      {
        name: "Tenderize",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.598,
        alsa: 4.95,
        gihWr: 0.638,
        iwd: 0.4,
        pickCount: 284,
        avgPick: 3.5
      },
      {
        name: "Bespoke B?",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.597,
        alsa: 4.65,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 175,
        avgPick: 3.5
      },
      {
        name: "Ice Cream Kitty",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0.596,
        alsa: 5.74,
        gihWr: 0.598,
        iwd: 0.4,
        pickCount: 350,
        avgPick: 3.5
      },
      {
        name: "Zoo Escapees",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.591,
        alsa: 6.26,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 247,
        avgPick: 3.5
      },
      {
        name: "Ray Fillet, Man Ray",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.59,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 118,
        avgPick: 3.5
      },
      {
        name: "Splinter, Hamato Yoshi",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.5870000000000001,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 104,
        avgPick: 3.5
      },
      {
        name: "Saved by the Shell",
        type: "Creature",
        colors: ["G"],
        gpwr: 0.5870000000000001,
        alsa: 4.91,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 103,
        avgPick: 3.5
      },
      {
        name: "Tunnel Rats",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.586,
        alsa: 7.07,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 231,
        avgPick: 3.5
      },
      {
        name: "Death in the Family",
        type: "Creature",
        colors: ["B"],
        gpwr: 0.585,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 100,
        avgPick: 3.5
      },
      {
        name: "Raphael, Tough Turtle",
        type: "Creature",
        colors: ["R"],
        gpwr: 0.5820000000000001,
        alsa: 5.93,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 201,
        avgPick: 3.5
      },
      {
        name: "Retro-Mutation",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.578,
        alsa: 6.49,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 241,
        avgPick: 3.5
      },
      {
        name: "Crustacean Commando",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.574,
        alsa: 7.15,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 289,
        avgPick: 3.5
      },
      {
        name: "Utrom Scientists",
        type: "Creature",
        colors: ["U"],
        gpwr: 0.5710000000000001,
        alsa: 6.77,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 228,
        avgPick: 3.5
      },
      {
        name: "Agent Bishop, Man in Black",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 21,
        avgPick: 3.5
      },
      {
        name: "East Wind Avatar",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 6.67,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 188,
        avgPick: 3.5
      },
      {
        name: "Hamato Guardian Stance",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 7.8,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 228,
        avgPick: 3.5
      },
      {
        name: "Leader's Talent",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 24,
        avgPick: 3.5
      },
      {
        name: "Leonardo, Cutting Edge",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 31,
        avgPick: 3.5
      },
      {
        name: "Leonardo, Sewer Samurai",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 23,
        avgPick: 3.5
      },
      {
        name: "Leonardo's Technique",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 13,
        avgPick: 3.5
      },
      {
        name: "Make Your Move",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 5.89,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 162,
        avgPick: 3.5
      },
      {
        name: "Prehistoric Pet",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 19,
        avgPick: 3.5
      },
      {
        name: "Quintessential Katana",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 4.95,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 76,
        avgPick: 3.5
      },
      {
        name: "Sally Pride, Lioness Leader",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 27,
        avgPick: 3.5
      },
      {
        name: "Triceraton Commander",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 53,
        avgPick: 3.5
      },
      {
        name: "Turncoat Kunoichi",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 22,
        avgPick: 3.5
      },
      {
        name: "Turtles Forever",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 15,
        avgPick: 3.5
      },
      {
        name: "April O'Neil, Hacktivist",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 39,
        avgPick: 3.5
      },
      {
        name: "April, Reporter of the Weird",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 5.8,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 78,
        avgPick: 3.5
      },
      {
        name: "Does Machines",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 24,
        avgPick: 3.5
      },
      {
        name: "Donatello, Gadget Master",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 32,
        avgPick: 3.5
      },
      {
        name: "Donatello, Mutant Mechanic",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 30,
        avgPick: 3.5
      },
      {
        name: "Donatello's Technique",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 5,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 102,
        avgPick: 3.5
      },
      {
        name: "Fugitive Droid",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 4.81,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 110,
        avgPick: 3.5
      },
      {
        name: "Kitsune, Dragon's Daughter",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 38,
        avgPick: 3.5
      },
      {
        name: "Kitsune's Technique",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 8,
        avgPick: 3.5
      },
      {
        name: "Krang, Master Mind",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 34,
        avgPick: 3.5
      },
      {
        name: "Mondo Gecko",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 52,
        avgPick: 3.5
      },
      {
        name: "Negate",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 8.23,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 223,
        avgPick: 3.5
      },
      {
        name: "Renet, Temporal Apprentice",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 37,
        avgPick: 3.5
      },
      {
        name: "Stockman, Mad Fly-entist",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 7.62,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 290,
        avgPick: 3.5
      },
      {
        name: "Turtles in Time",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 29,
        avgPick: 3.5
      },
      {
        name: "Armaggon, Future Shark",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 29,
        avgPick: 3.5
      },
      {
        name: "Bebop, Warthog Warrior",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 7.03,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 225,
        avgPick: 3.5
      },
      {
        name: "The Cloning of Shredder",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 53,
        avgPick: 3.5
      },
      {
        name: "Foot Mystic",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 6.79,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 207,
        avgPick: 3.5
      },
      {
        name: "Insectoid Exterminator",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 6.67,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 190,
        avgPick: 3.5
      },
      {
        name: "Madame Null, Power Broker",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 26,
        avgPick: 3.5
      },
      {
        name: "Ninja Teen",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 18,
        avgPick: 3.5
      },
      {
        name: "Pain 101",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 6.87,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 167,
        avgPick: 3.5
      },
      {
        name: "Paramecia Coloniex",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 5.77,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 105,
        avgPick: 3.5
      },
      {
        name: "Rat King, Verminister",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 29,
        avgPick: 3.5
      },
      {
        name: "Savanti Romero, Time's Exile",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 29,
        avgPick: 3.5
      },
      {
        name: "Shark Shredder, Killer Clone",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 31,
        avgPick: 3.5
      },
      {
        name: "Shredder, Unrelenting",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 3.78,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 73,
        avgPick: 3.5
      },
      {
        name: "Shredder's Armor",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 6.51,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 76,
        avgPick: 3.5
      },
      {
        name: "Shredder's Revenge",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 6.88,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 201,
        avgPick: 3.5
      },
      {
        name: "South Wind Avatar",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 20,
        avgPick: 3.5
      },
      {
        name: "Splinter's Technique",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 12,
        avgPick: 3.5
      },
      {
        name: "Super Shredder",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 48,
        avgPick: 3.5
      },
      {
        name: "Broadcast Takeover",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 37,
        avgPick: 3.5
      },
      {
        name: "Casey Jones, Vigilante",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 30,
        avgPick: 3.5
      },
      {
        name: "Cool but Rude",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 16,
        avgPick: 3.5
      },
      {
        name: "Hard-Won Jitte",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 6.11,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 65,
        avgPick: 3.5
      },
      {
        name: "Improvised Arsenal",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 28,
        avgPick: 3.5
      },
      {
        name: "Jennika's Technique",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 6.56,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 71,
        avgPick: 3.5
      },
      {
        name: "Mouser Attack!",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 7.8,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 202,
        avgPick: 3.5
      },
      {
        name: "Mutant Town Musicians",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 7.78,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 213,
        avgPick: 3.5
      },
      {
        name: "Null Group Biological Assets",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 7.54,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 240,
        avgPick: 3.5
      },
      {
        name: "Old Hob, Alleycat Blues",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 4.85,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 90,
        avgPick: 3.5
      },
      {
        name: "Raphael, Most Attitude",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 4.61,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 87,
        avgPick: 3.5
      },
      {
        name: "Raphael, Ninja Destroyer",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 10,
        avgPick: 3.5
      },
      {
        name: "Raphael, the Nightwatcher",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 35,
        avgPick: 3.5
      },
      {
        name: "Raphael's Technique",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 16,
        avgPick: 3.5
      },
      {
        name: "Ravenous Robots",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 22,
        avgPick: 3.5
      },
      {
        name: "Rock Soldiers",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 7.65,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 236,
        avgPick: 3.5
      },
      {
        name: "Slash, Reptile Rampager",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 21,
        avgPick: 3.5
      },
      {
        name: "Wingnut, Bat on the Belfry",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 4.82,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 85,
        avgPick: 3.5
      },
      {
        name: "Zog, Triceraton Castaway",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 7.4,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 190,
        avgPick: 3.5
      },
      {
        name: "Cowabunga!",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 7.38,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 245,
        avgPick: 3.5
      },
      {
        name: "Groundchuck & Dirtbag",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 23,
        avgPick: 3.5
      },
      {
        name: "Leatherhead, Swamp Stalker",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 17,
        avgPick: 3.5
      },
      {
        name: "Michelangelo, Improviser",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 15,
        avgPick: 3.5
      },
      {
        name: "Michelangelo, Weirdness to 11",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 38,
        avgPick: 3.5
      },
      {
        name: "Michelangelo's Technique",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 14,
        avgPick: 3.5
      },
      {
        name: "Mutagen Man, Living Ooze",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 15,
        avgPick: 3.5
      },
      {
        name: "Mutant Chain Reaction",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 7.48,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 195,
        avgPick: 3.5
      },
      {
        name: "New Generation's Technique",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 6.02,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 79,
        avgPick: 3.5
      },
      {
        name: "Party Dude",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 13,
        avgPick: 3.5
      },
      {
        name: "Transdimensional Bovine",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 28,
        avgPick: 3.5
      },
      {
        name: "Turtle Power!",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 19,
        avgPick: 3.5
      },
      {
        name: "Venus, Torn Between Worlds",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 4.33,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 107,
        avgPick: 3.5
      },
      {
        name: "Bebop & Rocksteady",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 18,
        avgPick: 3.5
      },
      {
        name: "Dark Leo & Shredder",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 39,
        avgPick: 3.5
      },
      {
        name: "Don & Leo, Problem Solvers",
        type: "Creature",
        colors: ["W", "U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 22,
        avgPick: 3.5
      },
      {
        name: "Don & Raph, Hard Science",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 18,
        avgPick: 3.5
      },
      {
        name: "Foot Elite",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0,
        alsa: 5.87,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 184,
        avgPick: 3.5
      },
      {
        name: "Go Ninja Go",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0,
        alsa: 5.05,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 126,
        avgPick: 3.5
      },
      {
        name: "Krang & Shredder",
        type: "Creature",
        colors: ["U", "B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 38,
        avgPick: 3.5
      },
      {
        name: "Mikey & Don, Party Planners",
        type: "Creature",
        colors: ["UG"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 24,
        avgPick: 3.5
      },
      {
        name: "Mikey & Leo, Chaos & Order",
        type: "Creature",
        colors: ["WG"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 19,
        avgPick: 3.5
      },
      {
        name: "The Neutrinos",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0,
        alsa: 4.86,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 126,
        avgPick: 3.5
      },
      {
        name: "North Wind Avatar",
        type: "Creature",
        colors: ["U", "R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 63,
        avgPick: 3.5
      },
      {
        name: "Punk Frogs",
        type: "Creature",
        colors: ["UG"],
        gpwr: 0,
        alsa: 7.83,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 245,
        avgPick: 3.5
      },
      {
        name: "Putrid Pals",
        type: "Creature",
        colors: ["B", "G"],
        gpwr: 0,
        alsa: 6.07,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 146,
        avgPick: 3.5
      },
      {
        name: "Raph & Leo, Sibling Rivals",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 15,
        avgPick: 3.5
      },
      {
        name: "Raph & Mikey, Troublemakers",
        type: "Creature",
        colors: ["R", "G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 34,
        avgPick: 3.5
      },
      {
        name: "Splinter, Radical Rat",
        type: "Creature",
        colors: ["W", "B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 24,
        avgPick: 3.5
      },
      {
        name: "Tokka & Rahzar, Terrible Twos",
        type: "Creature",
        colors: ["B", "R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 12,
        avgPick: 3.5
      },
      {
        name: "Chrome Dome",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 33,
        avgPick: 3.5
      },
      {
        name: "Krang, Utrom Warlord",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 25,
        avgPick: 3.5
      },
      {
        name: "The Ooze",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 25,
        avgPick: 3.5
      },
      {
        name: "Skateboard",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 6.08,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 73,
        avgPick: 3.5
      },
      {
        name: "Technodrome",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 51,
        avgPick: 3.5
      },
      {
        name: "Turtle Blimp",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 5.93,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 121,
        avgPick: 3.5
      },
      {
        name: "Turtle Van",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 22,
        avgPick: 3.5
      },
      {
        name: "Weather Maker",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 30,
        avgPick: 3.5
      },
      {
        name: "Northampton Farm",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 28,
        avgPick: 3.5
      },
      {
        name: "Turtle Lair",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 5.2,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 63,
        avgPick: 3.5
      },
      {
        name: "Path to Exile",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 2,
        avgPick: 3.5
      },
      {
        name: "Teleportation Circle",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 2,
        avgPick: 3.5
      },
      {
        name: "Trouble in Pairs",
        type: "Creature",
        colors: ["W"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 2,
        avgPick: 3.5
      },
      {
        name: "Brainstorm",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 2,
        avgPick: 3.5
      },
      {
        name: "Cytoplast Manipulator",
        type: "Creature",
        colors: ["U"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 8,
        avgPick: 3.5
      },
      {
        name: "Ashcoat of the Shadow Swarm",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 0,
        avgPick: 3.5
      },
      {
        name: "Plague of Vermin",
        type: "Creature",
        colors: ["B"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 3,
        avgPick: 3.5
      },
      {
        name: "All Will Be One",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 0,
        avgPick: 3.5
      },
      {
        name: "Silverclad Ferocidons",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 1,
        avgPick: 3.5
      },
      {
        name: "Underworld Breach",
        type: "Creature",
        colors: ["R"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 0,
        avgPick: 3.5
      },
      {
        name: "Doubling Season",
        type: "Creature",
        colors: ["G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 1,
        avgPick: 3.5
      },
      {
        name: "Rhythm of the Wild",
        type: "Creature",
        colors: ["R", "G"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 1,
        avgPick: 3.5
      },
      {
        name: "Waves of Aggression",
        type: "Creature",
        colors: ["WR"],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 1,
        avgPick: 3.5
      },
      {
        name: "Arcbound Ravager",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 3,
        avgPick: 3.5
      },
      {
        name: "Conqueror's Flail",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 0,
        avgPick: 3.5
      },
      {
        name: "Metallic Mimic",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 4,
        avgPick: 3.5
      },
      {
        name: "Shadowspear",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 5,
        avgPick: 3.5
      },
      {
        name: "Sword of Sinew and Steel",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 2,
        avgPick: 3.5
      },
      {
        name: "Umezawa's Jitte",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 3,
        avgPick: 3.5
      },
      {
        name: "Undercity Sewers",
        type: "Creature",
        colors: [],
        gpwr: 0,
        alsa: 0,
        gihWr: 0,
        iwd: 0.4,
        pickCount: 5,
        avgPick: 3.5
      }
    ]
  },
  {
    setCode: "LOR",
    setName: "Lorwyn Eclipsed",
    releaseDate: "2026-01-15",
    lastUpdated: "2026-03-05T17:30:00Z",
    mechanics: [
      "Tribal Synergy - Creatures benefit from sharing types (Elves, Goblins, etc.)",
      "Flash - Many creatures flash in at end of turn",
      "Kithkin Bonding - White synergy theme",
      "Rebel Search - Tutoring mechanic for certain creatures"
    ],
    archetypes: [
      {
        name: "Gd Elves",
        colors: ["G", "B"],
        draftBO1WR: 0.560,
        draftBO3WR: 0.568,
        sealedBO1WR: 0.555,
        sealedBO3WR: 0.562,
        draftBO1Meta: 0.095,
        draftBO3Meta: 0.089,
        sealedBO1Meta: 0.078,
        sealedBO3Meta: 0.082
      },
      {
        name: "Blue-Red Faeries",
        colors: ["U", "R"],
        draftBO1WR: 0.545,
        draftBO3WR: 0.553,
        sealedBO1WR: 0.540,
        sealedBO3WR: 0.548,
        draftBO1Meta: 0.082,
        draftBO3Meta: 0.088,
        sealedBO1Meta: 0.074,
        sealedBO3Meta: 0.072
      },
      {
        name: "White Kithkin",
        colors: ["W"],
        draftBO1WR: 0.532,
        draftBO3WR: 0.539,
        sealedBO1WR: 0.527,
        sealedBO3WR: 0.534,
        draftBO1Meta: 0.071,
        draftBO3Meta: 0.075,
        sealedBO1Meta: 0.064,
        sealedBO3Meta: 0.068
      },
      {
        name: "Red Goblins",
        colors: ["R"],
        draftBO1WR: 0.519,
        draftBO3WR: 0.526,
        sealedBO1WR: 0.514,
        sealedBO3WR: 0.521,
        draftBO1Meta: 0.066,
        draftBO3Meta: 0.070,
        sealedBO1Meta: 0.058,
        sealedBO3Meta: 0.061
      }
    ],
    cardStats: [
      {
        name: "Elvish Visionary",
        type: "Creature - Elf Shaman",
        colors: ["G"],
        gpwr: 0.602,
        alsa: 2.8,
        gihWr: 0.658,
        iwd: 0.45,
        pickCount: 13200,
        avgPick: 2.1
      },
      {
        name: "Faerie Conclave",
        type: "Land",
        colors: ["U"],
        gpwr: 0.578,
        alsa: 3.9,
        gihWr: 0.632,
        iwd: 0.38,
        pickCount: 10600,
        avgPick: 3.5
      },
      {
        name: "Mistbind Clique",
        type: "Creature - Faerie Wizard",
        colors: ["U"],
        gpwr: 0.589,
        alsa: 3.2,
        gihWr: 0.644,
        iwd: 0.41,
        pickCount: 11500,
        avgPick: 2.8
      },
      {
        name: "Kithkin Dossil",
        type: "Creature - Kithkin Cleric",
        colors: ["W"],
        gpwr: 0.521,
        alsa: 5.6,
        gihWr: 0.568,
        iwd: 0.29,
        pickCount: 6800,
        avgPick: 5.8
      },
      {
        name: "Warren Instigator",
        type: "Creature - Goblin Shaman",
        colors: ["R"],
        gpwr: 0.510,
        alsa: 6.8,
        gihWr: 0.551,
        iwd: 0.25,
        pickCount: 5500,
        avgPick: 6.9
      }
    ]
  }
];

export function getFormatBySlug(slug: string): FormatData | undefined {
  return formats.find((f) => f.slug === slug);
}

export function getAllFormatSlugs(): string[] {
  return formats.map((f) => f.slug);
}

export function getLimitedSetByCode(setCode: string): LimitedSet | undefined {
  return limitedSets.find((s) => s.setCode === setCode);
}

export function getAllLimitedSets(): LimitedSet[] {
  return limitedSets;
}
