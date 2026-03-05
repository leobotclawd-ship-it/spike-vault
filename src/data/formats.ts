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


export function getFormatBySlug(slug: string): FormatData | undefined {
  return formats.find((f) => f.slug === slug);
}

export function getAllFormatSlugs(): string[] {
  return formats.map((f) => f.slug);
}
