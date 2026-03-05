'use client';

import { useState } from 'react';
import { scheduleEvents, ScheduleEvent } from '@/data/scheduleData';

interface DetailedScheduleProps {
  filters?: {
    major: boolean;
    tabletop: boolean;
    arena: boolean;
    mtgo: boolean;
  };
}

export default function DetailedSchedule({ filters }: DetailedScheduleProps) {
  const [currentMonth, setCurrentMonth] = useState(3);
  const [currentYear, setCurrentYear] = useState(2026);

  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month - 1, 1).getDay();
  };

  const filterEvents = (events: ScheduleEvent[]): ScheduleEvent[] => {
    if (!filters) return events;

    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      const monthMatch = eventDate.getMonth() === currentMonth - 1 && 
                         eventDate.getFullYear() === currentYear;

      if (!monthMatch) return false;

      if (event.category === 'major' && filters.major) return true;
      if (event.category === 'tabletop' && filters.tabletop) return true;
      if (event.category === 'arena' && filters.arena) return true;
      if (event.category === 'mtgo' && filters.mtgo) return true;

      return false;
    });
  };

  const getEventsForDay = (day: number): ScheduleEvent[] => {
    const dateStr = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return filterEvents(scheduleEvents).filter(event => 
      event.startDate.startsWith(dateStr)
    );
  };

  const handleNextMonth = () => {
    if (currentMonth === 12) {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'major':
        return 'border-l-4 border-yellow-500';
      case 'tabletop':
        return 'border-l-4 border-blue-500';
      case 'arena':
        return 'border-l-4 border-purple-500';
      case 'mtgo':
        return 'border-l-4 border-green-500';
      default:
        return 'border-l-4 border-gray-500';
    }
  };

  const getCategoryBg = (category: string): string => {
    switch(category) {
      case 'major':
        return 'bg-yellow-900/20';
      case 'tabletop':
        return 'bg-blue-900/20';
      case 'arena':
        return 'bg-purple-900/20';
      case 'mtgo':
        return 'bg-green-900/20';
      default:
        return 'bg-gray-900/20';
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          {monthNames[currentMonth - 1]} {currentYear}
        </h2>
        <button
          onClick={handleNextMonth}
          className="px-4 py-2 rounded-lg bg-gold-600 hover:bg-gold-700 text-white font-semibold transition-colors"
        >
          Next Month
        </button>
      </div>

      <div className="rounded-xl border border-neutral-700 bg-neutral-900/30 overflow-hidden">
        <div className="grid grid-cols-7 gap-px bg-neutral-800">
          {dayNames.map((day) => (
            <div
              key={day}
              className="bg-neutral-900 py-3 px-2 text-center text-sm font-semibold text-gold-300"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-neutral-800">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-neutral-950 min-h-32"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dayEvents = getEventsForDay(day);
            const isToday = currentMonth === 3 && day === 5 && currentYear === 2026;

            return (
              <div
                key={day}
                className={`bg-neutral-950 min-h-32 border border-neutral-800 p-2 ${
                  isToday ? 'bg-gold-900/20 border-gold-700/50' : ''
                }`}
              >
                <div
                  className={`text-sm font-bold mb-2 ${
                    isToday ? 'text-gold-400' : 'text-neutral-300'
                  }`}
                >
                  {day}
                </div>

                <div className="space-y-1">
                  {dayEvents.slice(0, 2).map((event) => (
                    <div
                      key={event.id}
                      className={`text-xs p-1 rounded truncate ${getCategoryColor(event.category)} ${getCategoryBg(event.category)} text-neutral-200`}
                      title={event.name}
                    >
                      {event.name}
                    </div>
                  ))}
                  {dayEvents.length > 2 && (
                    <div className="text-xs text-neutral-500 px-1">
                      +{dayEvents.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-neutral-500 mt-4">
        Current view: March 2026 (today is March 5)
      </p>
    </div>
  );
}