import Link from "next/link";
import { formats } from "@/data/formats";
import { scheduleEvents, eventTypeColors } from "@/data/scheduleData";

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

// Get upcoming major events (next 4-5)
function getUpcomingMajorEvents() {
  const today = new Date("2026-03-06");
  const upcoming = scheduleEvents
    .filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate >= today && event.category === "major";
    })
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
    .slice(0, 5);
  return upcoming;
}

export default function Home() {
  const upcomingEvents = getUpcomingMajorEvents();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200 dark:border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-900/5 via-white dark:from-gold-900/20 dark:via-bg-primary to-white dark:to-bg-primary" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
            MTG<span className="text-gold-600 dark:text-gold-400">ProInfo</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gold-700 dark:text-gold-200/80 sm:text-xl">
            Competitive Magic data, simplified
          </p>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Find metagame breakdowns, matchup matrices, tournament schedules, and top decklists 
            for every competitive Magic format. Your one-stop resource for competitive play.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/schedule"
              className="rounded-lg bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              Competitive Schedule
            </Link>
            <Link
              href="/format/standard"
              className="rounded-lg bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              Standard
            </Link>
            <Link
              href="/format/limited"
              className="rounded-lg bg-gold-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gold-500"
            >
              Limited
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Major Events */}
      <section className="border-t border-neutral-200 dark:border-border bg-neutral-50 dark:bg-bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
            Upcoming Major Events
          </h2>
          <p className="mb-8 text-neutral-600 dark:text-neutral-400">
            Don&apos;t miss the next big tournaments in competitive Magic.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {upcomingEvents.map((event) => {
              const colors = eventTypeColors[event.type as keyof typeof eventTypeColors] || {
                bg: "bg-neutral-900/30",
                text: "text-neutral-300",
                border: "border-neutral-700/50",
              };
              const eventDate = new Date(event.startDate);
              const formattedDate = eventDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });

              return (
                <Link
                  key={event.id}
                  href="/schedule"
                  className={`rounded-lg border p-4 transition-all ${colors.border} ${colors.bg} hover:border-gold-700/50 hover:bg-gold-900/20`}
                >
                  <div className={`mb-2 text-xs font-semibold uppercase tracking-wide ${colors.text}`}>
                    {event.type === "pro-tour"
                      ? "Pro Tour"
                      : event.type === "rc"
                      ? "Regional Championship"
                      : event.type === "arena-direct"
                      ? "Arena Direct"
                      : event.type === "arena-weekend"
                      ? "Arena Weekend"
                      : event.type === "sq-mtgo"
                      ? "SQ MTGO"
                      : "Set Release"}
                  </div>
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-white line-clamp-2">
                    {event.name}
                  </h3>
                  <div className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                    {formattedDate}
                  </div>
                  {event.location && (
                    <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                      📍 {event.location}
                    </div>
                  )}
                  {event.format && (
                    <div className="mt-2 text-xs text-gold-600 dark:text-gold-400">
                      {event.format} →
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Formats Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
          All Formats
        </h2>
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Explore metagame data, top decks, and matchup breakdowns for every competitive format.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {formats.map((format) => (
            <Link
              key={format.slug}
              href={`/format/${format.slug}`}
              className="group rounded-xl border border-neutral-200 dark:border-border bg-white dark:bg-bg-secondary p-5 transition-all hover:border-gold-600 dark:hover:border-gold-700/50 hover:bg-neutral-50 dark:hover:bg-bg-tertiary"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold-100 dark:bg-gold-900/30 text-sm font-bold text-gold-600 dark:text-gold-400">
                {formatIcons[format.slug]}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white transition-colors group-hover:text-gold-600 dark:group-hover:text-gold-400">
                {format.name}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {format.description}
              </p>
              <div className="mt-3 text-xs font-medium text-gold-600 dark:text-gold-600 transition-colors group-hover:text-gold-700 dark:group-hover:text-gold-400">
                {format.topDecks.length} top decks &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
