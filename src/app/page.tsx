import Link from "next/link";
import { formats } from "@/data/formats";

const formatIcons: Record<string, string> = {
  standard: "S",
  pioneer: "P",
  modern: "M",
  legacy: "L",
  vintage: "V",
  pauper: "Pa",
  commander: "C",
  limited: "Li",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-900/20 via-bg-primary to-bg-primary" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Spike<span className="text-gold-400">Vault</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gold-200/80 sm:text-xl">
            Your competitive MTG command center
          </p>
          <p className="mt-3 max-w-2xl text-neutral-400">
            Free metagame breakdowns, stock decklists, matchup data, and curated
            pro content for every competitive format. Built by spikes, for
            spikes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/format/modern"
              className="rounded-lg bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              Explore Modern
            </Link>
            <Link
              href="/schedule"
              className="rounded-lg border border-border-light px-5 py-2.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-gold-700 hover:text-gold-400"
            >
              Event Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Format Cards Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold text-white">
          Browse by Format
        </h2>
        <p className="mb-8 text-neutral-400">
          Dive into metagame data, top decks, and pro content for each
          competitive format.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((format) => (
            <Link
              key={format.slug}
              href={`/format/${format.slug}`}
              className="group rounded-xl border border-border bg-bg-secondary p-5 transition-all hover:border-gold-700/50 hover:bg-bg-tertiary"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-900/30 text-sm font-bold text-gold-400">
                {formatIcons[format.slug]}
              </div>
              <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-gold-400">
                {format.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-400">
                {format.description}
              </p>
              <div className="mt-3 text-xs font-medium text-gold-600 transition-colors group-hover:text-gold-400">
                {format.topDecks.length} top decks &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="border-t border-border bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-bg-primary p-6">
              <h3 className="font-semibold text-gold-400">Metagame Data</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Meta share percentages, tier lists, and archetype breakdowns for
                every format.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-6">
              <h3 className="font-semibold text-gold-400">Stock Decklists</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Proven lists with key cards highlighted. Know what to play and
                what to expect.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-bg-primary p-6">
              <h3 className="font-semibold text-gold-400">Pro Content</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Curated articles, videos, and streams from the best competitive
                players.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
