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
    description: "The most popular competitive format featuring recent sets.",
    metaOverview:
      "Standard is currently defined by efficient midrange strategies and powerful Planeswalkers. Domain decks leverage the multicolor manabase to cast the format's best threats, while aggressive red strategies keep the format honest. Control decks have adapted with versatile removal suites and card advantage engines.",
    topDecks: [
      {
        name: "Domain Ramp",
        metaShare: "18%",
        tier: 1,
        colors: ["W", "U", "B", "R", "G"],
        keyCards: [
          "Atraxa, Grand Unifier",
          "Leyline Binding",
          "Herd Migration",
          "Topiary Stomper",
        ],
        description:
          "Five-color ramp leveraging domain payoffs. Leyline Binding provides premium removal while Atraxa closes games.",
      },
      {
        name: "Esper Midrange",
        metaShare: "15%",
        tier: 1,
        colors: ["W", "U", "B"],
        keyCards: [
          "Raffine, Scheming Seer",
          "Wedding Announcement",
          "Void Rend",
          "Sheoldred, the Apocalypse",
        ],
        description:
          "The premier midrange deck with evasive threats, disruption, and card advantage through connive.",
      },
      {
        name: "Mono-Red Aggro",
        metaShare: "14%",
        tier: 1,
        colors: ["R"],
        keyCards: [
          "Monastery Swiftspear",
          "Kumano Faces Kakkazan",
          "Play with Fire",
          "Lightning Strike",
        ],
        description:
          "Fast, consistent aggro that punishes slow starts. The format's primary beatdown strategy.",
      },
      {
        name: "Azorius Control",
        metaShare: "10%",
        tier: 2,
        colors: ["W", "U"],
        keyCards: [
          "The Wandering Emperor",
          "Memory Deluge",
          "Farewell",
          "Make Disappear",
        ],
        description:
          "Classic draw-go control with powerful sweepers and flash threats.",
      },
      {
        name: "Golgari Midrange",
        metaShare: "8%",
        tier: 2,
        colors: ["B", "G"],
        keyCards: [
          "Glissa Sunslayer",
          "Sheoldred, the Apocalypse",
          "Go Blank",
          "Liliana of the Veil",
        ],
        description:
          "Grindy midrange with efficient threats and disruption. Strong against other fair decks.",
      },
    ],
    proContent: [
      {
        title: "Standard Metagame Breakdown - Week 12",
        author: "Frank Karsten",
        type: "article",
        url: "#",
      },
      {
        title: "Domain Ramp Sideboard Guide",
        author: "Reid Duke",
        type: "article",
        url: "#",
      },
      {
        title: "Standard Challenge Top 8 Analysis",
        author: "Covertgoblue",
        type: "video",
        url: "#",
      },
    ],
  },
  {
    name: "Pioneer",
    slug: "pioneer",
    description:
      "A non-rotating format featuring cards from Return to Ravnica forward.",
    metaOverview:
      "Pioneer's metagame is diverse with combo, aggro, and midrange all well-represented. Izzet Phoenix has cemented itself as the deck to beat with its graveyard synergies and efficient threats. Rakdos Midrange provides a consistent disruptive gameplan, while combo decks like Lotus Combo keep linear strategies in check.",
    topDecks: [
      {
        name: "Izzet Phoenix",
        metaShare: "16%",
        tier: 1,
        colors: ["U", "R"],
        keyCards: [
          "Arclight Phoenix",
          "Treasure Cruise",
          "Lightning Axe",
          "Temporal Trespass",
        ],
        description:
          "Graveyard-based tempo combining cheap spells with recursive threats. Delve fuels both card advantage and haymakers.",
      },
      {
        name: "Rakdos Midrange",
        metaShare: "14%",
        tier: 1,
        colors: ["B", "R"],
        keyCards: [
          "Thoughtseize",
          "Fatal Push",
          "Fable of the Mirror-Breaker",
          "Sheoldred, the Apocalypse",
        ],
        description:
          "Disruptive midrange with the format's best interaction suite. Fable provides engine and pressure.",
      },
      {
        name: "Azorius Spirits",
        metaShare: "10%",
        tier: 1,
        colors: ["W", "U"],
        keyCards: [
          "Mausoleum Wanderer",
          "Supreme Phantom",
          "Spell Queller",
          "Shacklegeist",
        ],
        description:
          "Tempo-aggro tribal deck with built-in disruption. Flash creatures make it hard to play against.",
      },
      {
        name: "Mono-Green Devotion",
        metaShare: "9%",
        tier: 2,
        colors: ["G"],
        keyCards: [
          "Nykthos, Shrine to Nyx",
          "Cavalier of Thorns",
          "Kiora, Behemoth Beckoner",
          "Storm the Festival",
        ],
        description:
          "Big mana strategy fueled by Nykthos. Generates absurd amounts of mana to cast overwhelming threats.",
      },
      {
        name: "Lotus Combo",
        metaShare: "7%",
        tier: 2,
        colors: ["W", "U", "G"],
        keyCards: [
          "Hidden Strings",
          "Lotus Field",
          "Thespian's Stage",
          "Pore Over the Pages",
        ],
        description:
          "Combo deck that generates huge mana from copying Lotus Field, then casts a game-ending spell.",
      },
    ],
    proContent: [
      {
        title: "Pioneer RCQ Prep Guide",
        author: "Nassim Ketita",
        type: "article",
        url: "#",
      },
      {
        title: "Izzet Phoenix Deep Dive",
        author: "Aspiringspike",
        type: "video",
        url: "#",
      },
      {
        title: "Pioneer Challenge Highlights",
        author: "Yellowhat",
        type: "stream",
        url: "#",
      },
    ],
  },
  {
    name: "Modern",
    slug: "modern",
    description:
      "A non-rotating format with cards from 8th Edition and Modern Horizons sets forward.",
    metaOverview:
      "Modern is shaped by Modern Horizons 2 and 3 cards. The One Ring and Nadu have pushed the format's power level significantly. Ring decks dominate the midrange and control space while combo strategies like Amulet Titan abuse the format's powerful land-based synergies. Boros Energy represents the aggressive end of the spectrum.",
    topDecks: [
      {
        name: "Boros Energy",
        metaShare: "15%",
        tier: 1,
        colors: ["W", "R"],
        keyCards: [
          "Guide of Souls",
          "Ocelot Pride",
          "Galvanic Discharge",
          "Phlage, Titan of Fire's Fury",
        ],
        description:
          "Aggressive energy deck combining efficient creatures with powerful energy payoffs. Fast and resilient.",
      },
      {
        name: "Amulet Titan",
        metaShare: "10%",
        tier: 1,
        colors: ["U", "G"],
        keyCards: [
          "Amulet of Vigor",
          "Primeval Titan",
          "Dryad of the Ilysian Grove",
          "The One Ring",
        ],
        description:
          "Land-combo ramp that accelerates into Primeval Titan. Complex lines with bounce lands and Amulet of Vigor.",
      },
      {
        name: "Jeskai Control",
        metaShare: "9%",
        tier: 1,
        colors: ["W", "U", "R"],
        keyCards: [
          "The One Ring",
          "Teferi, Time Raveler",
          "Supreme Verdict",
          "Counterspell",
        ],
        description:
          "Classic control using The One Ring as an engine. Sweepers and countermagic control the board.",
      },
      {
        name: "Living End",
        metaShare: "7%",
        tier: 2,
        colors: ["U", "B", "R"],
        keyCards: [
          "Living End",
          "Grief",
          "Subtlety",
          "Shardless Agent",
        ],
        description:
          "Cascade-combo that cycles large creatures then resolves Living End to reanimate them all.",
      },
      {
        name: "Yawgmoth Combo",
        metaShare: "6%",
        tier: 2,
        colors: ["B", "G"],
        keyCards: [
          "Yawgmoth, Thran Physician",
          "Young Wolf",
          "Grist, the Hunger Tide",
          "Chord of Calling",
        ],
        description:
          "Creature-combo deck built around Yawgmoth's sacrifice synergies with undying creatures.",
      },
    ],
    proContent: [
      {
        title: "Modern Metagame Update Post-Ban",
        author: "Kanister",
        type: "article",
        url: "#",
      },
      {
        title: "Amulet Titan Masterclass",
        author: "Fpawlusz",
        type: "video",
        url: "#",
      },
      {
        title: "Modern Challenge Stream VOD",
        author: "Aspiringspike",
        type: "stream",
        url: "#",
      },
    ],
  },
  {
    name: "Legacy",
    slug: "legacy",
    description:
      "An eternal format with access to almost every card ever printed.",
    metaOverview:
      "Legacy revolves around efficient blue cantrips and free counterspells. Delver strategies remain a cornerstone, leveraging Murktide Regent alongside the format's best disruption. Reanimator provides a fast combo angle, while 4-Color Control (Beanstalk) grinds through everything. The format rewards deep knowledge and tight play.",
    topDecks: [
      {
        name: "Izzet Delver",
        metaShare: "14%",
        tier: 1,
        colors: ["U", "R"],
        keyCards: [
          "Delver of Secrets",
          "Murktide Regent",
          "Daze",
          "Force of Will",
        ],
        description:
          "Tempo strategy deploying cheap threats backed by free countermagic. The premier fair deck.",
      },
      {
        name: "Reanimator",
        metaShare: "10%",
        tier: 1,
        colors: ["U", "B"],
        keyCards: [
          "Reanimate",
          "Entomb",
          "Grief",
          "Atraxa, Grand Unifier",
        ],
        description:
          "Fast combo that cheats massive creatures into play on turns 1-2. Grief strips answers preemptively.",
      },
      {
        name: "4-Color Control",
        metaShare: "9%",
        tier: 1,
        colors: ["W", "U", "R", "G"],
        keyCards: [
          "Uro, Titan of Nature's Wrath",
          "Minsc & Boo, Timeless Heroes",
          "Swords to Plowshares",
          "Force of Will",
        ],
        description:
          "Midrange-control leveraging the best cards across four colors. Grinds out opponents with card advantage.",
      },
      {
        name: "Death & Taxes",
        metaShare: "7%",
        tier: 2,
        colors: ["W"],
        keyCards: [
          "Thalia, Guardian of Thraben",
          "Stoneforge Mystic",
          "Aether Vial",
          "Rishadan Port",
        ],
        description:
          "Disruptive white aggro using taxing effects and Stoneforge Mystic equipment packages.",
      },
      {
        name: "Doomsday",
        metaShare: "5%",
        tier: 2,
        colors: ["U", "B"],
        keyCards: [
          "Doomsday",
          "Thassa's Oracle",
          "Dark Ritual",
          "Brainstorm",
        ],
        description:
          "Combo deck that resolves Doomsday to stack the perfect 5-card pile for a deterministic win.",
      },
    ],
    proContent: [
      {
        title: "Legacy Challenge Meta Analysis",
        author: "Phil Gallagher",
        type: "article",
        url: "#",
      },
      {
        title: "Delver Sideboard Mastery",
        author: "Jarvis Yu",
        type: "video",
        url: "#",
      },
      {
        title: "Legacy Showcase Finals Coverage",
        author: "Reid Duke",
        type: "stream",
        url: "#",
      },
    ],
  },
  {
    name: "Vintage",
    slug: "vintage",
    description:
      "The most powerful format in Magic, featuring every card ever printed.",
    metaOverview:
      "Vintage is defined by the most powerful cards ever printed. Bazaar of Baghdad fuels graveyard strategies, while Workshop decks leverage fast artifact mana. Blue decks have access to restricted power like Ancestral Recall and Time Walk. The format is high-powered with games often decided in the first few turns.",
    topDecks: [
      {
        name: "Dredge",
        metaShare: "15%",
        tier: 1,
        colors: ["B", "R", "G"],
        keyCards: [
          "Bazaar of Baghdad",
          "Golgari Grave-Troll",
          "Hollow One",
          "Hogaak, Arisen Necropolis",
        ],
        description:
          "Graveyard combo that uses Bazaar of Baghdad to fuel dredge mechanics, flooding the board without casting spells.",
      },
      {
        name: "Jewel Shops",
        metaShare: "13%",
        tier: 1,
        colors: ["C"],
        keyCards: [
          "Mishra's Workshop",
          "Trinisphere",
          "Lodestone Golem",
          "Phyrexian Metamorph",
        ],
        description:
          "Prison-combo using Workshop mana to deploy taxing artifacts. Locks opponents out of the game.",
      },
      {
        name: "Oath of Druids",
        metaShare: "10%",
        tier: 1,
        colors: ["U", "G"],
        keyCards: [
          "Oath of Druids",
          "Forbidden Oracle",
          "Force of Will",
          "Ancestral Recall",
        ],
        description:
          "Cheats massive creatures into play with Oath triggers. Backed by blue power cards.",
      },
      {
        name: "PO Storm",
        metaShare: "8%",
        tier: 2,
        colors: ["U", "B"],
        keyCards: [
          "Paradoxical Outcome",
          "Mox Sapphire",
          "Mox Jet",
          "Tendrils of Agony",
        ],
        description:
          "Storm combo bouncing Moxen with Paradoxical Outcome for massive card draw, finishing with Tendrils.",
      },
      {
        name: "BUG Midrange",
        metaShare: "6%",
        tier: 2,
        colors: ["U", "B", "G"],
        keyCards: [
          "Deathrite Shaman",
          "Oko, Thief of Crowns",
          "Force of Will",
          "Ancestral Recall",
        ],
        description:
          "Fair blue midrange leveraging the best interaction and threats with power nine support.",
      },
    ],
    proContent: [
      {
        title: "Vintage Metagame Primer",
        author: "Brian Kelly",
        type: "article",
        url: "#",
      },
      {
        title: "Vintage Challenge Top 8 Decklists",
        author: "The Vintage Showcase",
        type: "article",
        url: "#",
      },
      {
        title: "Dredge Piloting Guide",
        author: "Justin Gennari",
        type: "video",
        url: "#",
      },
    ],
  },
  {
    name: "Pauper",
    slug: "pauper",
    description: "A format where only commons are legal. Budget-friendly and deep.",
    metaOverview:
      "Pauper proves that commons can create a rich competitive format. Kuldotha Red brings explosive aggro with artifact synergies. Affinity leverages artifact lands and Atog for burst damage. Blue-based control decks use the best common cantrips and removal to grind. The format rewards tight play and metagame awareness.",
    topDecks: [
      {
        name: "Kuldotha Red",
        metaShare: "16%",
        tier: 1,
        colors: ["R"],
        keyCards: [
          "Kuldotha Rebirth",
          "Monastery Swiftspear",
          "Galvanic Blast",
          "Experimental Synthesizer",
        ],
        description:
          "Explosive artifact-aggro combining token generation with burn. Consistent and fast.",
      },
      {
        name: "Golgari Gardens",
        metaShare: "12%",
        tier: 1,
        colors: ["B", "G"],
        keyCards: [
          "Tithing Blade",
          "Deadly Dispute",
          "Commune with the Gods",
          "Writhing Chrysalis",
        ],
        description:
          "Sacrifice-based midrange generating value through artifact and creature synergies.",
      },
      {
        name: "Dimir Faeries",
        metaShare: "11%",
        tier: 1,
        colors: ["U", "B"],
        keyCards: [
          "Spellstutter Sprite",
          "Ninja of the Deep Hours",
          "Counterspell",
          "Snuff Out",
        ],
        description:
          "Tempo-control using flash creatures and ninjutsu for repeatable card advantage.",
      },
      {
        name: "Affinity",
        metaShare: "9%",
        tier: 2,
        colors: ["U", "R"],
        keyCards: [
          "Myr Enforcer",
          "Frogmite",
          "Galvanic Blast",
          "Thoughtcast",
        ],
        description:
          "Artifact-based aggro leveraging affinity for cheap threats and metalcraft for powerful burn.",
      },
      {
        name: "Mono-Blue Faeries",
        metaShare: "7%",
        tier: 2,
        colors: ["U"],
        keyCards: [
          "Spellstutter Sprite",
          "Faerie Seer",
          "Counterspell",
          "Ninja of the Deep Hours",
        ],
        description:
          "Mono-colored tempo using Faerie tribal synergies with countermagic and card draw.",
      },
    ],
    proContent: [
      {
        title: "Pauper Format Deep Dive",
        author: "Alex Ullman",
        type: "article",
        url: "#",
      },
      {
        title: "Kuldotha Red Sideboard Guide",
        author: "Pauperwave",
        type: "article",
        url: "#",
      },
      {
        title: "Pauper Challenge Stream",
        author: "Caleb Gannon",
        type: "video",
        url: "#",
      },
    ],
  },
  {
    name: "Commander",
    slug: "commander",
    description:
      "The most popular casual format, now with a growing competitive scene (cEDH).",
    metaOverview:
      "Competitive EDH (cEDH) is a distinct metagame from casual Commander. Fast combo and stax define the top tiers. Turbo Naus strategies using Ad Nauseam and Thassa's Oracle remain dominant. Stax commanders like Kinnan and Tymna/Kraum provide disruption while building toward wins. Games are multiplayer, adding layers of political complexity.",
    topDecks: [
      {
        name: "Turbo Naus (Tymna/Kraum)",
        metaShare: "14%",
        tier: 1,
        colors: ["W", "U", "B", "R"],
        keyCards: [
          "Ad Nauseam",
          "Thassa's Oracle",
          "Demonic Consultation",
          "Tainted Pact",
        ],
        description:
          "Fast combo resolving Ad Nauseam to draw most of the deck, then winning with Thassa's Oracle.",
      },
      {
        name: "Kinnan, Bonder Prodigy",
        metaShare: "11%",
        tier: 1,
        colors: ["U", "G"],
        keyCards: [
          "Kinnan, Bonder Prodigy",
          "Basalt Monolith",
          "Thrasios, Triton Hero",
          "Freed from the Real",
        ],
        description:
          "Mana-doubling commander enabling infinite mana combos. Activates Kinnan to find wincons.",
      },
      {
        name: "Najeela, the Blade-Blossom",
        metaShare: "8%",
        tier: 1,
        colors: ["W", "U", "B", "R", "G"],
        keyCards: [
          "Najeela, the Blade-Blossom",
          "Derevi, Empyrial Tactician",
          "Nature's Will",
          "Sword of Feast and Famine",
        ],
        description:
          "5-color combo using Najeela's ability with mana untap effects for infinite combat steps.",
      },
      {
        name: "Sisay, Weatherlight Captain",
        metaShare: "6%",
        tier: 2,
        colors: ["W", "U", "B", "R", "G"],
        keyCards: [
          "Sisay, Weatherlight Captain",
          "Jegantha, the Wellspring",
          "Derevi, Empyrial Tactician",
          "Kenrith, the Returned King",
        ],
        description:
          "Toolbox combo using Sisay to tutor legendary permanents directly into play.",
      },
      {
        name: "Rogsi (Rograkh/Silas)",
        metaShare: "5%",
        tier: 2,
        colors: ["U", "B", "R"],
        keyCards: [
          "Rograkh, Son of Rohgahh",
          "Silas Renn, Seeker Adept",
          "Underworld Breach",
          "Brain Freeze",
        ],
        description:
          "Partner combo leveraging Rograkh as free storm count with Breach lines.",
      },
    ],
    proContent: [
      {
        title: "cEDH Tier List Update",
        author: "Playing With Power",
        type: "article",
        url: "#",
      },
      {
        title: "Turbo Naus Full Primer",
        author: "Casually Competitive",
        type: "video",
        url: "#",
      },
      {
        title: "cEDH Tournament Finals",
        author: "Play to Win",
        type: "stream",
        url: "#",
      },
    ],
  },
  {
    name: "Limited",
    slug: "limited",
    description:
      "Draft and Sealed formats using the latest sets. The purest test of skill.",
    metaOverview:
      "Limited is defined by the current draft environment. Understanding archetypes, pick orders, and format speed is crucial. Aggressive archetypes tend to be undervalued while synergy-driven decks reward deep format knowledge. Bomb rares matter, but consistent commons and uncommons win more games. Signal reading and flexible drafting are key skills.",
    topDecks: [
      {
        name: "Boros Aggro (RW)",
        metaShare: "Popular",
        tier: 1,
        colors: ["W", "R"],
        keyCards: [
          "Reliable combat tricks",
          "Efficient 2-drops",
          "Removal spells",
          "Equipment",
        ],
        description:
          "The classic aggro archetype. Curve out with cheap creatures and push through with tricks and removal.",
      },
      {
        name: "Dimir Control (UB)",
        metaShare: "Popular",
        tier: 1,
        colors: ["U", "B"],
        keyCards: [
          "Removal spells",
          "Card draw",
          "Evasive threats",
          "Counterspells",
        ],
        description:
          "Control-oriented archetype using removal and card advantage to take over long games.",
      },
      {
        name: "Gruul Midrange (RG)",
        metaShare: "Popular",
        tier: 1,
        colors: ["R", "G"],
        keyCards: [
          "Large creatures",
          "Fight spells",
          "Mana fixing",
          "Combat tricks",
        ],
        description:
          "Midrange strategy deploying large threats backed by removal. Dominates the board in the mid-game.",
      },
      {
        name: "Simic Ramp (UG)",
        metaShare: "Niche",
        tier: 2,
        colors: ["U", "G"],
        keyCards: [
          "Mana ramp",
          "Large flyers",
          "Card draw",
          "Tempo plays",
        ],
        description:
          "Ramp into large threats with card advantage to refuel. Works best in slower formats.",
      },
      {
        name: "Orzhov Grind (WB)",
        metaShare: "Niche",
        tier: 2,
        colors: ["W", "B"],
        keyCards: [
          "Removal",
          "Lifegain synergies",
          "Recursive threats",
          "Token generators",
        ],
        description:
          "Attrition-based archetype that trades resources efficiently and grinds out wins.",
      },
    ],
    proContent: [
      {
        title: "Draft Archetype Tier List",
        author: "Ben Stark",
        type: "article",
        url: "#",
      },
      {
        title: "Common & Uncommon Pick Order",
        author: "LSV",
        type: "article",
        url: "#",
      },
      {
        title: "Trophy Draft Walkthrough",
        author: "Numot the Nummy",
        type: "video",
        url: "#",
      },
    ],
  },
];

export function getFormatBySlug(slug: string): FormatData | undefined {
  return formats.find((f) => f.slug === slug);
}

export function getAllFormatSlugs(): string[] {
  return formats.map((f) => f.slug);
}
