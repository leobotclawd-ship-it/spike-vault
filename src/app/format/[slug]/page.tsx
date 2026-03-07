import { notFound } from "next/navigation";
import Link from "next/link";
import {
  formats,
  getFormatBySlug,
  getAllFormatSlugs,
  type DeckList,
} from "@/data/formats";
import UpcomingTournaments from "@/components/formats/UpcomingTournaments";
import InteractiveMatchupMatrix from "@/components/formats/InteractiveMatchupMatrix";

export function generateStaticParams() {
  return getAllFormatSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const format = getFormatBySlug(params.slug);
  if (!format) return { title: "Format Not Found" };
  return {
    title: `${format.name} Metagame - MTGProInfo`,
    description: format.description,
  };
}

const colorMap: Record<string, { bg: string; text: string; label: string }> = {
  W: { bg: "bg-yellow-100", text: "text-yellow-900", label: "W" },
  U: { bg: "bg-blue-500", text: "text-white", label: "U" },
  B: { bg: "bg-neutral-800", text: "text-neutral-200", label: "B" },
  R: { bg: "bg-red-600", text: "text-white", label: "R" },
  G: { bg: "bg-green-600", text: "text-white", label: "G" },
  C: { bg: "bg-neutral-500", text: "text-white", label: "C" },
};

function ColorPips({ colors }: { colors: string[] }) {
  return (
    <div className="flex gap-1">
      {colors.map((c, i) => {
        const color = colorMap[c];
        if (!color) return null;
        return (
          <span
            key={i}
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${color.bg} ${color.text}`}
          >
            {color.label}
          </span>
        );
      })}
    </div>
  );
}

function TierBadge({ tier }: { tier: 1 | 2 | 3 }) {
  const styles = {
    1: "bg-gold-100 dark:bg-gold-900/40 text-gold-700 dark:text-gold-400 border-gold-300 dark:border-gold-700/50",
    2: "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700",
    3: "bg-neutral-200 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-500 border-neutral-300 dark:border-neutral-800",
  };
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${styles[tier]}`}
    >
      Tier {tier}
    </span>
  );
}

function DeckCard({ deck }: { deck: DeckList }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-border bg-white dark:bg-bg-secondary p-5 transition-colors hover:border-neutral-300 dark:hover:border-border-light">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-neutral-900 dark:text-white">{deck.name}</h3>
          <div className="mt-1 flex items-center gap-2">
            <ColorPips colors={deck.colors} />
            <span className="text-xs text-neutral-600 dark:text-neutral-500">
              {deck.metaShare} meta
            </span>
          </div>
        </div>
        <TierBadge tier={deck.tier} />
      </div>
      <div className="mb-4">
        <h4 className="mb-1.5 text-xs font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-500">
          Key Cards
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {deck.keyCards.map((card) => (
            <span
              key={card}
              className="rounded-md bg-neutral-100 dark:bg-bg-tertiary px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300"
            >
              {card}
            </span>
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`#deck-guide-${deck.name.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xs font-medium text-gold-600 dark:text-gold-400 transition-colors hover:text-gold-700 dark:hover:text-gold-300"
        >
          View Deck Guide →
        </Link>
      </div>
    </div>
  );
}


export default function FormatPage({ params }: { params: { slug: string } }) {
  const format = getFormatBySlug(params.slug);
  if (!format) notFound();

  const tier1 = format.topDecks.filter((d) => d.tier === 1);
  const tier2 = format.topDecks.filter((d) => d.tier === 2);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-gold-400">
          Home
        </Link>
        <span>/</span>
        <span className="text-neutral-300">{format.name}</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          {format.name}
        </h1>
        <p className="mt-2 text-neutral-400">{format.description}</p>
      </div>

      {/* Matchup Matrix */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">
          Matchup Matrix
        </h2>
        {format.slug === "standard" ? (
          <InteractiveMatchupMatrix />
        ) : (
          <div className="flex min-h-[200px] items-center justify-center rounded-xl border border-dashed border-border-light bg-bg-secondary">
            <div className="text-center">
              <p className="text-neutral-500">Matchup matrix coming soon</p>
              <p className="mt-1 text-xs text-neutral-600">
                Win rates and matchup data between top archetypes
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Top Decks */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">Top Decks</h2>

        {tier1.length > 0 && (
          <>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Tier 1
            </h3>
            <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tier1.map((deck) => (
                <DeckCard key={deck.name} deck={deck} />
              ))}
            </div>
          </>
        )}

        {tier2.length > 0 && (
          <>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Tier 2
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tier2.map((deck) => (
                <DeckCard key={deck.name} deck={deck} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* Upcoming Tournaments */}
      <UpcomingTournaments format={format.slug} limit={5} />

      {/* Format Navigation */}
      <section className="border-t border-border pt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500">
          Other Formats
        </h3>
        <div className="flex flex-wrap gap-2">
          {formats
            .filter((f) => f.slug !== format.slug)
            .map((f) => (
              <Link
                key={f.slug}
                href={`/format/${f.slug}`}
                className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm text-neutral-400 transition-colors hover:border-gold-700/50 hover:text-gold-400"
              >
                {f.name}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}