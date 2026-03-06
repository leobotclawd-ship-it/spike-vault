import Link from "next/link";

export const metadata = {
  title: "Limited Stats Guide - SpikeVault",
  description: "Understanding 17lands data and limited statistics",
};

export default function StatsGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/format/limited" className="hover:text-gold-400">
          Limited
        </Link>
        <span>/</span>
        <span className="text-neutral-300">Stats Guide</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Limited Format Statistics Guide
        </h1>
        <p className="mt-3 text-neutral-400">
          Understanding 17lands data from top Arena players
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* Overview */}
        <section className="rounded-lg border border-border bg-bg-secondary p-6">
          <h2 className="mb-3 text-xl font-bold text-gold-400">Data Source</h2>
          <p className="text-neutral-300 leading-relaxed">
            All statistics on this page come from{" "}
            <span className="font-semibold text-white">17lands</span>, a
            community-driven database of Magic: The Gathering Limited format
            data. The data is collected from thousands of games played by top
            Arena players, providing a comprehensive view of the metagame,
            archetype performance, and individual card evaluation.
          </p>
        </section>

        {/* Statistics */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gold-400">Key Statistics</h2>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">GW</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  GPWR (Games in Play Win Rate)
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The percentage of games a card was played in that were won.
                  This includes all games where the card was drawn or in hand.
                  GPWR accounts for selection bias and show the real impact of
                  the card in play.
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: 55% GPWR means the card was present in winning games
                  55% of the time.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">AL</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  ALSA (Average Last Seen At)
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The average pick number when the card was last seen in a draft.
                  Lower numbers indicate the card is picked earlier (and thus more
                  valued), while higher numbers mean it tends to wheel (pass through
                  multiple picks).
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: ALSA of 2.5 means the card is typically picked around
                  the 2-3 position, while 5.0 means it often goes around pick 5.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">GH</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  GIH WR (Games In Hand Win Rate)
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The percentage of games where the card was in the player&apos;s deck
                  and hand that were won. This shows how the card impacts
                  outcomes when it&apos;s actually available to play, ignoring drawn
                  vs not drawn scenarios.
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: 60% GIH WR means decks with this card in hand won 60%
                  of their games.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">IW</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  IWD (In Your Deck Percentage)
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The percentage of decks that played this card. Shows how
                  commonly a card appears in successful decks at the format.
                  Higher percentages indicate cards are more efficient or format-staple.
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: 45% IWD means the card appears in 45% of drafted decks.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">PC</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Pick Count
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The total number of times the card was picked in the dataset.
                  Higher numbers indicate more data points and more reliable
                  statistics. Cards with very low pick counts may have less
                  reliable metrics.
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: 12,000 picks means the card was picked 12,000 times across
                  all drafts analyzed.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-700/20 flex-shrink-0">
                <span className="text-lg font-bold text-gold-400">AP</span>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Avg Pick (Average Pick Number)
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  The average pick position when the card was selected. This shows
                  overall demand: lower numbers mean early picks, higher numbers
                  mean late picks or wheel candidates.
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  Example: Avg Pick of 1.8 means the card is taken around pick 2,
                  while 6.5 means it typically comes around pick 6-7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Archetypes */}
        <section className="rounded-lg border border-border bg-bg-secondary p-6">
          <h2 className="mb-4 text-xl font-bold text-gold-400">
            Archetype Metrics
          </h2>
          <div className="space-y-3 text-neutral-300">
            <p>
              <span className="font-semibold text-white">Win Rate (WR)</span> -
              The percentage of games won by decks in that archetype. Influenced
              by metagame positioning.
            </p>
            <p>
              <span className="font-semibold text-white">Meta Share</span> - The
              percentage of the metagame that archetype represents. Shows how common
              the strategy is at different play levels.
            </p>
            <p className="text-sm text-neutral-400 mt-4">
              Available breakdowns: Draft BO1, Draft BO3, Sealed BO1, and Sealed BO3
              provide format-specific data for each archetype.
            </p>
          </div>
        </section>

        {/* How to Use */}
        <section className="rounded-lg border border-gold-700/30 bg-gold-700/5 p-6">
          <h2 className="mb-4 text-xl font-bold text-gold-400">
            How to Use This Data
          </h2>
          <ul className="space-y-3 text-neutral-300">
            <li className="flex gap-3">
              <span className="text-gold-400 font-bold flex-shrink-0">1.</span>
              <span>
                <strong>Evaluate Cards:</strong> Use GPWR and GIH WR to understand
                card strength in the current meta.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-400 font-bold flex-shrink-0">2.</span>
              <span>
                <strong>Plan Your Draft:</strong> ALSA and Avg Pick help you know
                when to take cards or wait for them to wheel.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-400 font-bold flex-shrink-0">3.</span>
              <span>
                <strong>Build Decks:</strong> Archetype breakdowns show which
                color combinations are strongest in the format.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold-400 font-bold flex-shrink-0">4.</span>
              <span>
                <strong>Adapt to Metagame:</strong> Meta Share shows what opponents
                are likely playing, helping you sideboard and plan.
              </span>
            </li>
          </ul>
        </section>

        {/* Back Link */}
        <div className="pt-8 border-t border-border">
          <Link
            href="/format/limited"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors font-medium"
          >
            ← Back to Limited Formats
          </Link>
        </div>
      </div>
    </div>
  );
}
