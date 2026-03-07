"use client";

import Link from "next/link";
import { useState } from "react";
import MacroCalendar from "@/components/schedule/MacroCalendar";
import DetailedSchedule from "@/components/schedule/DetailedSchedule";

export default function SchedulePage() {
  const [filters, setFilters] = useState({
    major: true,
    tabletop: true,
    arena: true,
    mtgo: true,
  });

  const handleFilterChange = (category: keyof typeof filters) => {
    setFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-3 flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-500">
        <Link href="/" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-neutral-700 dark:text-neutral-300">Schedule</span>
      </div>

      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-white sm:text-4xl">
          2026 Event Schedule
        </h1>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Complete Magic competitive calendar with major tournaments, from
          today through end of year.
        </p>
      </div>

      {/* Year Timeline at Top (Macro Calendar) */}
      <div className="mb-4 rounded-xl border border-gold-300 dark:border-gold-700/30 bg-gradient-to-br from-gold-50 dark:from-gold-950/20 to-gold-100 dark:to-gold-900/10 p-3">
        <MacroCalendar filters={filters} />
      </div>

      {/* Divider */}
      <div className="mb-4 h-px bg-gradient-to-r from-transparent via-gold-300 dark:via-gold-700/30 to-transparent"></div>

      {/* Month Calendar (Detailed Schedule) */}
      <div className="mb-4">
        <DetailedSchedule filters={filters} />
      </div>

      {/* Filter UI */}
      <div className="mb-6 rounded-xl border border-gold-300 dark:border-gold-700/30 bg-gradient-to-br from-gold-50 dark:from-gold-950/20 to-gold-100 dark:to-gold-900/10 p-4">
        <h2 className="mb-4 text-lg font-semibold text-gold-700 dark:text-gold-300">
          Filter Events by Platform
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {/* Major - Always checked and disabled */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.major}
              onChange={() => handleFilterChange("major")}
              disabled
              className="w-5 h-5 rounded border border-gold-600 bg-gold-100 dark:bg-gold-950/40 cursor-not-allowed accent-gold-600 dark:accent-gold-500 checked:bg-gold-600"
            />
            <span className="text-sm font-medium text-gold-700 dark:text-gold-300 group-hover:text-gold-800 dark:group-hover:text-gold-200 transition-colors">
              Major Events
            </span>
          </label>

          {/* Tabletop */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.tabletop}
              onChange={() => handleFilterChange("tabletop")}
              className="w-5 h-5 rounded border border-gold-600 bg-neutral-100 dark:bg-neutral-950 cursor-pointer accent-gold-600 dark:accent-gold-500 hover:bg-gold-100 dark:hover:bg-gold-950/20"
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              Paper RCs
            </span>
          </label>

          {/* Arena */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.arena}
              onChange={() => handleFilterChange("arena")}
              className="w-5 h-5 rounded border border-gold-600 bg-neutral-100 dark:bg-neutral-950 cursor-pointer accent-gold-600 dark:accent-gold-500 hover:bg-gold-100 dark:hover:bg-gold-950/20"
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              Arena
            </span>
          </label>

          {/* MTGO */}
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={filters.mtgo}
              onChange={() => handleFilterChange("mtgo")}
              className="w-5 h-5 rounded border border-gold-600 bg-neutral-100 dark:bg-neutral-950 cursor-pointer accent-gold-600 dark:accent-gold-500 hover:bg-gold-100 dark:hover:bg-gold-950/20"
            />
            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              MTGO
            </span>
          </label>
        </div>
        <p className="mt-4 text-xs text-neutral-600 dark:text-neutral-400">
          Major Events (Pro Tours, World Championship, Set Releases) are always
          displayed.
        </p>
      </div>

      {/* Legend */}
      <div className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900/50 p-4 mb-6">
        <h2 className="mb-3 text-lg font-bold text-gold-700 dark:text-gold-300">Event Types</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gold-500"></div>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Pro Tour</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">MOCS</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Set Release</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-neutral-700 dark:text-neutral-300">Ban Notice</span>
          </div>
        </div>
      </div>

      {/* How to Participate */}
      <section className="mb-6">
        <h2 className="mb-3 text-lg font-bold text-gold-700 dark:text-gold-300">
          How to Participate
        </h2>
        <div className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900/50 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white text-sm">Arena Direct</h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Compete in Magic Arena with leaderboard rankings. Direct
                qualification paths to higher-level tournaments.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white text-sm">
                Store-Level Events
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Arena Weekends and MTGO events at local game stores
                and online. Win to qualify for Regional Championships.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white text-sm">
                Regional Championships
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Compete across three seasons (Pioneer, Modern, Standard) for
                Pro Tour invitations and cash prizes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-neutral-900 dark:text-white text-sm">
                Pro Tour & Worlds
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                Top competitors compete at the highest level with the Magic
                World Championship in December.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <div className="rounded-xl border border-gold-300 dark:border-gold-700/50 bg-gold-100 dark:bg-gold-900/20 p-4">
        <h3 className="font-semibold text-gold-700 dark:text-gold-300 mb-2 text-sm">Event Information</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          This calendar shows the 2026 Magic competitive season. Dates and
          formats are subject to change. Check the official Magic Competitive
          website for the most up-to-date information.
        </p>
      </div>
    </div>
  );
}
