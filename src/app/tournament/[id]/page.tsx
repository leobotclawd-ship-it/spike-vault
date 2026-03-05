import React from 'react';
import Link from 'next/link';
import { scheduleEvents } from '@/data/scheduleData';

interface Props {
  params: { id: string };
}

export default function TournamentPage({ params }: Props) {
  const tournament = scheduleEvents.find(e => e.id === params.id);

  if (!tournament) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl font-bold text-white">Not Found</h1>
        <Link href="/schedule" className="text-yellow-400">Back</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-4xl font-bold text-white">{tournament.name}</h1>
      <Link href="/schedule" className="text-yellow-400">Back to Schedule</Link>
    </div>
  );
}