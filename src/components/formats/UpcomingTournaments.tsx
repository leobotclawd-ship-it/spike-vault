import { scheduleEvents, eventTypeColors } from "@/data/scheduleData";

interface UpcomingTournamentsProps {
  format?: string;
  limit?: number;
}

const platformIcons: Record<string, string> = {
  Arena: "🎮",
  MTGO: "💻",
  Paper: "🃏",
};

function getPlatformFromString(platformStr: string): string[] {
  const platforms: string[] = [];
  if (platformStr.includes("Arena")) platforms.push("Arena");
  if (platformStr.includes("MTGO")) platforms.push("MTGO");
  if (platformStr.includes("Paper")) platforms.push("Paper");
  return platforms.length > 0 ? platforms : ["Paper"];
}

function getEventTypeIcon(type: string): string {
  const icons: Record<string, string> = {
    "pro-tour": "🏆",
    rc: "🎯",
    "arena-direct": "⚡",
    "arena-weekend": "🎪",
    "sq-mtgo": "🔧",
    "set-release": "📦",
    "ban-schedule": "⛔",
  };
  return icons[type] || "📅";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function UpcomingTournaments({
  format,
  limit = 5,
}: UpcomingTournamentsProps) {
  // Filter events based on format if provided, and future events
  // Only show major tournaments: Pro Tour, World Championship, Arena Championships (Weekends), MOCS (sq-mtgo)
  const today = new Date();
  const filteredEvents = scheduleEvents
    .filter((event) => {
      const eventDate = new Date(event.startDate + "T00:00:00");
      const isFuture = eventDate >= today;
      const isRelevantFormat = !format || !event.format || event.format.includes(format);
      const isRelevantType =
        event.type === "pro-tour" ||
        event.type === "arena-weekend" ||
        event.type === "sq-mtgo";
      return isFuture && isRelevantFormat && isRelevantType;
    })
    .sort(
      (a, b) =>
        new Date(a.startDate + "T00:00:00").getTime() -
        new Date(b.startDate + "T00:00:00").getTime()
    )
    .slice(0, limit);

  if (filteredEvents.length === 0) {
    return (
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-600 dark:text-gold-400">
          Upcoming Tournaments
        </h2>
        <div className="flex min-h-[150px] items-center justify-center rounded-xl border border-dashed border-neutral-300 dark:border-border-light bg-neutral-50 dark:bg-bg-secondary">
          <div className="text-center">
            <p className="text-neutral-600 dark:text-neutral-500">No upcoming tournaments scheduled</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-gold-600 dark:text-gold-400">
        Upcoming Tournaments
      </h2>
      <div className="space-y-3">
        {filteredEvents.map((event) => {
          const platforms = getPlatformFromString(event.platform);
          const typeColors =
            eventTypeColors[event.type as keyof typeof eventTypeColors] ||
            eventTypeColors["pro-tour"];

          return (
            <a
              key={event.id}
              href={event.tournamentPageUrl || "#"}
              className={`group block rounded-lg border p-4 transition-colors ${typeColors.bg} ${typeColors.border} border hover:border-gold-600 dark:hover:border-gold-700/50`}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getEventTypeIcon(event.type)}</span>
                    <h3 className={`font-semibold transition-colors group-hover:text-gold-600 dark:group-hover:text-gold-400 ${typeColors.text}`}>
                      {event.name}
                    </h3>
                  </div>
                  <div className="mt-2 flex flex-col gap-1 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row sm:items-center sm:gap-3">
                    <span>📅 {formatDate(event.startDate)}</span>
                    {event.location && (
                      <span>📍 {event.location}</span>
                    )}
                    <div className="flex gap-1">
                      {platforms.map((p) => (
                        <span key={p} title={p}>
                          {platformIcons[p]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}