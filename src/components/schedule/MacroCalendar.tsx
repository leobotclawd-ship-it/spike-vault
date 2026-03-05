"use client";

import React, { useState } from "react";
import { scheduleEvents } from "@/data/scheduleData";

interface MacroCalendarProps {
  filters?: {
    major: boolean;
    tabletop: boolean;
    arena: boolean;
    mtgo: boolean;
  };
}

export default function MacroCalendar({ filters }: MacroCalendarProps) {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);

  const today = new Date(2026, 2, 5); // March 5, 2026

  // Filter events: important tournaments + today or later + apply category filters
  const defaultFilters = {
    major: true,
    tabletop: true,
    arena: true,
    mtgo: true,
    ...filters,
  };

  const importantEvents = scheduleEvents
    .filter((event) => {
      // Filter OUT sq-mtgo, keep only: pro-tour, set-release, ban-schedule, rc (MOCS)
      if (!["pro-tour", "set-release", "ban-schedule", "rc"].includes(event.type)) return false;

      // Only events from today forward
      const eventDate = new Date(event.startDate);
      if (eventDate < today) return false;

      // Apply category filters
      return defaultFilters[event.category as keyof typeof defaultFilters];
    })
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "pro-tour":
        return "Pro Tour";
      case "rc":
        return "MOCS";
      case "set-release":
        return "Set Release";
      case "ban-schedule":
        return "Ban Announcement";
      default:
        return type;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "pro-tour":
        return { bg: "bg-gold-500", border: "border-gold-500" };
      case "rc":
        return { bg: "bg-emerald-500", border: "border-emerald-500" };
      case "set-release":
        return { bg: "bg-orange-500", border: "border-orange-500" };
      case "ban-schedule":
        return { bg: "bg-red-500", border: "border-red-500" };
      default:
        return { bg: "bg-neutral-500", border: "border-neutral-500" };
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Horizontal Scrolling Cards */}
      <div>
        <h2 className="mb-1 text-base font-bold text-gold-300">
          2026 Upcoming Tournament Timeline
        </h2>
        <p className="mb-3 text-xs text-neutral-400">
          Major tournaments from today through end of year
        </p>

        {/* Scrolling container */}
        {importantEvents.length > 0 ? (
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-3 min-w-min">
              {importantEvents.map((event) => {
                const colors = getEventColor(event.type);

                return (
                  <div
                    key={event.id}
                    className={`flex-shrink-0 w-32 rounded-lg border-2 ${colors.border} p-2 transition-all cursor-pointer hover:scale-105 hover:shadow-lg ${colors.bg} bg-opacity-10 hover:bg-opacity-20`}
                    onClick={() =>
                      setExpandedEventId(
                        expandedEventId === event.id ? null : event.id
                      )
                    }
                  >
                    {/* Event name */}
                    <p className="font-bold text-white text-xs leading-tight mb-2 line-clamp-2">
                      {event.name}
                    </p>

                    {/* Date */}
                    <p className="text-xs text-neutral-300 mb-2">
                      {formatDate(event.startDate)}
                      {event.endDate && (
                        <>
                          <br />
                          <span className="text-neutral-400">
                            – {formatDate(event.endDate)}
                          </span>
                        </>
                      )}
                    </p>

                    {/* Format */}
                    {event.format && (
                      <p className="text-xs text-neutral-400">{event.format}</p>
                    )}

                    {/* Expanded details */}
                    {expandedEventId === event.id && (
                      <div className="mt-2 pt-2 border-t border-current border-opacity-30 space-y-1 text-xs text-neutral-400">
                        <div>
                          <span className="text-neutral-300">
                            {getEventTypeLabel(event.type)}
                          </span>
                        </div>
                        {event.location && (
                          <p>
                            <span className="text-neutral-300">Loc:</span>{" "}
                            {event.location}
                          </p>
                        )}
                        {event.platform && (
                          <p>
                            <span className="text-neutral-300">Platform:</span>{" "}
                            {event.platform}
                          </p>
                        )}
                        {event.details && (
                          <p className="text-xs">{event.details}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p className="text-sm text-neutral-500 text-center py-4">
            No upcoming events match your filters
          </p>
        )}
      </div>
    </div>
  );
}
