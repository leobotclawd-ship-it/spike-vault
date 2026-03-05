'use client';

import Link from 'next/link';
import MacroCalendar from '@/components/schedule/MacroCalendar';
import DetailedSchedule from '@/components/schedule/DetailedSchedule';

export default function SchedulePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-gold-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-neutral-300">Schedule</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">
          2026 Event Schedule
        </h1>
        <p className="mt-2 text-neutral-400">
          Complete Magic competitive calendar with major tournaments, from today through end of year.
        </p>
      </div>

      {/* Year Timeline at Top (Macro Calendar) */}
      <div className="mb-12 rounded-xl border border-gold-700/30 bg-gradient-to-br from-gold-950/20 to-gold-900/10 p-8">
        <MacroCalendar />
      </div>

      {/* Divider */}
      <div className="mb-12 h-px bg-gradient-to-r from-transparent via-gold-700/30 to-transparent"></div>

      {/* Month Calendar (Detailed Schedule) */}
      <div className="mb-12">
        <DetailedSchedule />
      </div>

      {/* Legend */}
      <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6 mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-300">Event Types</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-gold-500"></div>
            <span className="text-sm text-neutral-300">Pro Tour</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-neutral-300">Arena Ch.</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-neutral-300">Direct</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-sm text-neutral-300">Weekend</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm text-neutral-300">MOCS</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-neutral-300">Set Release</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-neutral-300">Ban Notice</span>
          </div>
        </div>
      </div>

      {/* How to Participate */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-bold text-gold-300">
          How to Participate
        </h2>
        <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6">
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 font-semibold text-white">
                🎮 Arena Direct
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Compete in Magic Arena with leaderboard rankings. Direct qualification paths to higher-level tournaments.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                🏆 Store-Level Events
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Arena Weekends and MTGO Superqualifiers at local game stores and online. Win to qualify for Regional Championships.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                ⭐ Regional Championships
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Compete across three seasons (Pioneer, Modern, Standard) for Pro Tour invitations and cash prizes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">
                👑 Pro Tour & Worlds
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                Top competitors compete at the highest level with the Magic World Championship in December.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <div className="rounded-xl border border-gold-700/50 bg-gold-900/20 p-6 mb-10">
        <h3 className="font-semibold text-gold-300 mb-2">📅 Event Information</h3>
        <p className="text-sm text-neutral-300">
          This calendar shows the 2026 Magic competitive season. Dates and formats are subject to change. Check the official Magic Competitive website for the most up-to-date information.
        </p>
      </div>
    </div>
  );
}
