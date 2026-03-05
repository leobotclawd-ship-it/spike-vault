"use client";

import React, { useState } from "react";
import { scheduleEvents } from "@/data/scheduleData";

interface DetailedScheduleProps {
  filters?: {
    major: boolean;
    tabletop: boolean;
    arena: boolean;
    mtgo: boolean;
  };
}

export default function DetailedSchedule({ filters }: DetailedScheduleProps) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 5)); // March 5, 2026

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Get days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const today = new Date(2026, 2, 5); // March 5, 2026

  const defaultFilters = {
    major: true,
    tabletop: true,
    arena: true,
    mtgo: true,
    ...filters,
  };

  // Get events for this month with filters applied
  const monthEvents = scheduleEvents.filter((event) => {
    const eventDate = new Date(event.startDate);
    const isThisMonth =
      eventDate.getMonth() === month && eventDate.getFullYear() === year;
    const isFromTodayOrLater = eventDate >= today;
    const passesFilter =
      defaultFilters[event.category as keyof typeof defaultFilters];

    return isThisMonth && isFromTodayOrLater && passesFilter;
  });

  // Create calendar grid
  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const handleNextMonth = () => {
    const nextMonth = new Date(year, month + 1, 1);
    // Don't allow going past December 2026
    if (nextMonth.getFullYear() <= 2026) {
      setCurrentDate(nextMonth);
    }
  };

  const getEventsForDay = (day: number) => {
    return monthEvents.filter((event) => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === day;
    });
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    );
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "pro-tour":
        return "bg-gold-900/40 border-gold-700/50 text-gold-300";
      case "rc":
        return "bg-blue-900/40 border-blue-700/50 text-blue-300";
      case "arena-direct":
        return "bg-purple-900/40 border-purple-700/50 text-purple-300";
      case "arena-weekend":
        return "bg-pink-900/40 border-pink-700/50 text-pink-300";
      case "sq-mtgo":
        return "bg-emerald-900/40 border-emerald-700/50 text-emerald-300";
      case "set-release":
        return "bg-orange-900/40 border-orange-700/50 text-orange-300";
      case "ban-schedule":
        return "bg-red-900/40 border-red-700/50 text-red-300";
      default:
        return "bg-neutral-900/40 border-neutral-700/50 text-neutral-300";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "pro-tour":
        return "Pro Tour";
      case "rc":
        return "Arena Ch.";
      case "arena-direct":
        return "Direct";
      case "arena-weekend":
        return "Weekend";
      case "sq-mtgo":
        return "MOCS";
      case "set-release":
        return "Set";
      case "ban-schedule":
        return "Ban";
      default:
        return type;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Header with navigation */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {monthNames[month]} {year}
          </h2>
          <p className="mt-1 text-sm text-neutral-400">
            {monthEvents.length} event{monthEvents.length !== 1 ? "s" : ""} this
            month
          </p>
        </div>

        {/* Navigation - Next Month only */}
        <button
          onClick={handleNextMonth}
          disabled={year === 2026 && month === 11}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            year === 2026 && month === 11
              ? "bg-neutral-700 text-neutral-500 cursor-not-allowed opacity-50"
              : "bg-gold-600 text-white hover:bg-gold-500"
          }`}
        >
          Next Month ?
        </button>
      </div>

      {/* Calendar */}
      <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 overflow-hidden">
        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-px bg-neutral-800">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div
              key={day}
              className="bg-neutral-900 p-3 text-center font-semibold text-neutral-400 text-sm"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-px bg-neutral-800 p-px">
          {calendarDays.map((day, idx) => {
            const dayEvents = day ? getEventsForDay(day) : [];
            const isTodayDate = day && isToday(day);

            return (
              <div
                key={idx}
                className={`min-h-24 p-2 ${
                  day
                    ? "bg-neutral-900 hover:bg-neutral-800/50 transition-colors"
                    : "bg-neutral-950"
                }`}
              >
                {day && (
                  <>
                    <div
                      className={`mb-2 inline-block font-semibold text-sm rounded px-2 py-1 ${
                        isTodayDate ? "bg-gold-600 text-white" : "text-neutral-300"
                      }`}
                    >
                      {day}
                    </div>

                    {/* Events for this day */}
                    <div className="space-y-1">
                      {dayEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`text-xs px-2 py-1 rounded border transition-all hover:shadow-lg cursor-pointer ${getEventTypeColor(
                            event.type
                          )}`}
                          title={event.name}
                        >
                          <div className="font-semibold truncate">
                            {getEventTypeLabel(event.type)}
                          </div>
                          <div className="text-xs opacity-75 truncate">
                            {event.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Events list for this month */}
      {monthEvents.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gold-300">Events</h3>
          <div className="space-y-2">
            {monthEvents.map((event) => (
              <div
                key={event.id}
                className={`rounded-lg border p-3 transition-colors hover:bg-neutral-800/50 ${getEventTypeColor(
                  event.type
                )}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <p className="font-semibold">{event.name}</p>
                    <p className="text-xs mt-1 opacity-75">
                      {new Date(event.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                      {event.endDate && (
                        <>
                          {" "}
                          –{" "}
                          {new Date(event.endDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </>
                      )}
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase whitespace-nowrap">
                    {getEventTypeLabel(event.type)}
                  </span>
                </div>
                {event.format && (
                  <p className="text-xs mt-2 opacity-75">Format: {event.format}</p>
                )}
                {event.location && (
                  <p className="text-xs opacity-75">Location: {event.location}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
