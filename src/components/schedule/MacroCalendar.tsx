'use client';

import React, { useState } from 'react';
import { scheduleEvents } from '@/data/scheduleData';

export default function MacroCalendar() {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  // Filter only important tournaments: Pro Tours, Regional Championships, World Championship, MOCS
  const importantEvents = scheduleEvents
    .filter(event => ['pro-tour', 'rc', 'sq-mtgo'].includes(event.type))
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

  // Get date range
  const today = new Date(2026, 2, 5); // March 5, 2026
  const endOfYear = new Date(2026, 11, 31);
  const totalDays = Math.floor((endOfYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const getEventPosition = (eventDate: string) => {
    const eventTime = new Date(eventDate).getTime();
    const daysSinceToday = Math.floor((eventTime - today.getTime()) / (1000 * 60 * 60 * 24));
    return (daysSinceToday / totalDays) * 100;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'pro-tour':
        return 'Pro Tour';
      case 'rc':
        return 'Arena Championship';
      case 'sq-mtgo':
        return 'MOCS';
      default:
        return type;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'pro-tour':
        return { dot: 'bg-gold-500', label: 'text-gold-300' };
      case 'rc':
        return { dot: 'bg-blue-500', label: 'text-blue-300' };
      case 'sq-mtgo':
        return { dot: 'bg-emerald-500', label: 'text-emerald-300' };
      default:
        return { dot: 'bg-neutral-500', label: 'text-neutral-300' };
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Timeline */}
      <div className="relative">
        <h2 className="mb-2 text-xl font-bold text-gold-300">2026 Tournament Timeline</h2>
        <p className="mb-6 text-sm text-neutral-400">Major tournaments from today through end of year</p>

        {/* Timeline bar */}
        <div className="relative h-20 rounded-xl border border-gold-700/30 bg-gradient-to-r from-gold-950/30 to-gold-900/20 px-6 py-4">
          {/* Background timeline line */}
          <div className="absolute left-6 right-6 top-1/2 h-1 bg-gradient-to-r from-gold-800/20 to-gold-700/20"></div>

          {/* Today marker */}
          <div className="absolute top-1/2 left-6 -translate-y-1/2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gold-400 ring-2 ring-gold-300"></div>
              <span className="text-xs whitespace-nowrap text-gold-300 font-semibold">TODAY</span>
            </div>
          </div>

          {/* Event dots */}
          <div className="relative h-full">
            {importantEvents.map((event) => {
              const position = getEventPosition(event.startDate);
              const colors = getEventColor(event.type);
              const isExpanded = expandedEventId === event.id;

              return (
                <div
                  key={event.id}
                  className="absolute top-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ left: `calc(${position}%)` }}
                >
                  {/* Dot */}
                  <div
                    onClick={() => setExpandedEventId(isExpanded ? null : event.id)}
                    className={`w-4 h-4 rounded-full -translate-x-1/2 transition-all transform hover:scale-125 ${colors.dot} ring-2 ring-neutral-900 hover:ring-4 hover:ring-gold-500/50`}
                  />

                  {/* Tooltip on hover */}
                  <div className="absolute top-8 -left-32 w-64 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                    <div className="bg-neutral-950 border border-gold-700/50 rounded-lg p-3 shadow-xl">
                      <p className="text-xs font-semibold text-gold-300 truncate">{event.name}</p>
                      <p className="text-xs text-neutral-400">{formatDate(event.startDate)}</p>
                      {event.format && <p className="text-xs text-neutral-500">{event.format}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* End of year marker */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2">
            <div className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gold-800/50"></div>
              <span className="text-xs whitespace-nowrap text-neutral-500 font-semibold">EOY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Event list */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gold-300">Upcoming Events</h3>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {importantEvents.map((event) => {
            const colors = getEventColor(event.type);
            const isExpanded = expandedEventId === event.id;

            return (
              <div
                key={event.id}
                onClick={() => setExpandedEventId(isExpanded ? null : event.id)}
                className="cursor-pointer rounded-lg border border-neutral-700 bg-neutral-900/50 p-4 transition-colors hover:bg-neutral-800/50 hover:border-gold-700/50"
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`}></div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <p className="font-semibold text-white truncate">{event.name}</p>
                      <span className={`text-xs font-medium whitespace-nowrap ${colors.label}`}>
                        {getEventTypeLabel(event.type)}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      {formatDate(event.startDate)}
                      {event.endDate && ` – ${formatDate(event.endDate)}`}
                    </p>
                    {event.format && (
                      <p className="text-xs text-neutral-500">Format: {event.format}</p>
                    )}
                    {event.location && (
                      <p className="text-xs text-neutral-500">Location: {event.location}</p>
                    )}
                  </div>
                </div>

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-neutral-700 space-y-2">
                    {event.platform && (
                      <p className="text-sm text-neutral-400">
                        <span className="text-neutral-500">Platform:</span> {event.platform}
                      </p>
                    )}
                    {event.details && (
                      <p className="text-sm text-neutral-400">
                        <span className="text-neutral-500">Details:</span> {event.details}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
