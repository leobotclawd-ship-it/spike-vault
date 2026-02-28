import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Schedule - SpikeVault",
  description:
    "Pro Tour 2025 dates, MTGO weekly events, and how to qualify for competitive Magic: The Gathering events.",
};

interface Event {
  name: string;
  date: string;
  location: string;
  format: string;
  type: "pro-tour" | "rc" | "mtgo" | "qualifier";
}

const proTourEvents: Event[] = [
  {
    name: "Pro Tour Murders at Karlov Manor",
    date: "February 21-23, 2025",
    location: "Chicago, IL",
    format: "Pioneer / Draft",
    type: "pro-tour",
  },
  {
    name: "Pro Tour Thunder Junction",
    date: "April 26-28, 2025",
    location: "Seattle, WA",
    format: "Standard / Draft",
    type: "pro-tour",
  },
  {
    name: "Pro Tour Modern Horizons 3",
    date: "June 28-30, 2025",
    location: "Amsterdam, Netherlands",
    format: "Modern / Draft",
    type: "pro-tour",
  },
  {
    name: "Magic World Championship",
    date: "September 2025",
    location: "TBA",
    format: "TBA",
    type: "pro-tour",
  },
];

const rcEvents: Event[] = [
  {
    name: "Regional Championship Q1",
    date: "January - March 2025",
    location: "Various Regions",
    format: "Pioneer",
    type: "rc",
  },
  {
    name: "Regional Championship Q2",
    date: "April - June 2025",
    location: "Various Regions",
    format: "Modern",
    type: "rc",
  },
  {
    name: "Regional Championship Q3",
    date: "July - September 2025",
    location: "Various Regions",
    format: "Standard",
    type: "rc",
  },
];

interface MtgoEvent {
  name: string;
  day: string;
  format: string;
  entryFee: string;
}

const mtgoWeekly: MtgoEvent[] = [
  {
    name: "Modern Challenge",
    day: "Saturday & Sunday",
    format: "Modern",
    entryFee: "30 tix",
  },
  {
    name: "Pioneer Challenge",
    day: "Saturday & Sunday",
    format: "Pioneer",
    entryFee: "30 tix",
  },
  {
    name: "Legacy Challenge",
    day: "Saturday",
    format: "Legacy",
    entryFee: "30 tix",
  },
  {
    name: "Vintage Challenge",
    day: "Saturday",
    format: "Vintage",
    entryFee: "30 tix",
  },
  {
    name: "Pauper Challenge",
    day: "Sunday",
    format: "Pauper",
    entryFee: "10 tix",
  },
  {
    name: "Standard Challenge",
    day: "Sunday",
    format: "Standard",
    entryFee: "30 tix",
  },
  {
    name: "Modern Preliminary",
    day: "Daily",
    format: "Modern",
    entryFee: "24 tix",
  },
  {
    name: "Pioneer Preliminary",
    day: "Daily",
    format: "Pioneer",
    entryFee: "24 tix",
  },
];

const typeBadgeStyles: Record<string, string> = {
  "pro-tour": "bg-gold-900/40 text-gold-400 border-gold-700/50",
  rc: "bg-blue-900/40 text-blue-400 border-blue-700/50",
  mtgo: "bg-purple-900/40 text-purple-400 border-purple-700/50",
  qualifier: "bg-green-900/40 text-green-400 border-green-700/50",
};

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-gold-400">
          Home
        </Link>
        <span>/</span>
        <span className="text-neutral-300">Schedule</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Event Schedule
        </h1>
        <p className="mt-2 text-neutral-400">
          Pro Tour dates, MTGO weekly events, and the path to qualification.
        </p>
      </div>

      {/* Pro Tour 2025 */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">
          Pro Tour 2025 Season
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {proTourEvents.map((event) => (
            <div
              key={event.name}
              className="rounded-xl border border-border bg-bg-secondary p-5 transition-colors hover:border-border-light"
            >
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${typeBadgeStyles["pro-tour"]}`}
                >
                  Pro Tour
                </span>
              </div>
              <h3 className="font-semibold text-white">{event.name}</h3>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-neutral-400">
                  <span className="text-neutral-500">Date:</span> {event.date}
                </p>
                <p className="text-neutral-400">
                  <span className="text-neutral-500">Location:</span>{" "}
                  {event.location}
                </p>
                <p className="text-neutral-400">
                  <span className="text-neutral-500">Format:</span>{" "}
                  {event.format}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Championships */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">
          Regional Championships
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {rcEvents.map((event) => (
            <div
              key={event.name}
              className="rounded-xl border border-border bg-bg-secondary p-5"
            >
              <span
                className={`mb-2 inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${typeBadgeStyles["rc"]}`}
              >
                Regional Championship
              </span>
              <h3 className="font-semibold text-white">{event.name}</h3>
              <div className="mt-2 space-y-1 text-sm">
                <p className="text-neutral-400">
                  <span className="text-neutral-500">Window:</span> {event.date}
                </p>
                <p className="text-neutral-400">
                  <span className="text-neutral-500">Format:</span>{" "}
                  {event.format}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MTGO Weekly Events */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">
          MTGO Weekly Events
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-bg-secondary">
                <th className="px-4 py-3 font-medium text-neutral-400">
                  Event
                </th>
                <th className="px-4 py-3 font-medium text-neutral-400">Day</th>
                <th className="px-4 py-3 font-medium text-neutral-400">
                  Format
                </th>
                <th className="px-4 py-3 font-medium text-neutral-400">
                  Entry
                </th>
              </tr>
            </thead>
            <tbody>
              {mtgoWeekly.map((event, i) => (
                <tr
                  key={event.name}
                  className={`border-b border-border transition-colors hover:bg-bg-tertiary ${
                    i % 2 === 0 ? "bg-bg-primary" : "bg-bg-secondary/50"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-neutral-200">
                    {event.name}
                  </td>
                  <td className="px-4 py-3 text-neutral-400">{event.day}</td>
                  <td className="px-4 py-3 text-neutral-400">
                    {event.format}
                  </td>
                  <td className="px-4 py-3 text-neutral-400">
                    {event.entryFee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How to Qualify */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-400">
          How to Qualify
        </h2>
        <div className="rounded-xl border border-border bg-bg-secondary p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-white">
                1. Store-Level RCQs
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Regional Championship Qualifiers (RCQs) are held at local game
                stores. Win an RCQ to earn an invitation to your Regional
                Championship. Formats vary by season&mdash;check with your local
                store for their upcoming RCQ schedule.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                2. Regional Championships
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Regional Championships are the gateway to the Pro Tour. Top
                finishers earn Pro Tour invitations and travel awards. Each
                region runs its own RC with varying dates and locations
                throughout the season.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                3. MTGO Qualifiers
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Magic Online runs qualifier events that feed directly into the
                Pro Tour. Preliminary events throughout the week lead to weekend
                Challenge events. Top performers in Challenges and Showcase
                events earn Pro Tour invitations.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                4. Pro Tour &amp; Worlds
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Top finishers at each Pro Tour earn invitations to subsequent Pro
                Tours and the Magic World Championship. Consistent performance
                throughout the season is rewarded with ongoing qualification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
