import React from 'react';
import Link from 'next/link';
import { scheduleEvents } from '@/data/scheduleData';
import type { Metadata } from 'next';

interface TournamentPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: TournamentPageProps): Promise<Metadata> {
  const tournament = scheduleEvents.find(e => e.id === params.id);
  const name = tournament?.name || 'Tournament';
  return {
    title: name + ' - SpikeVault',
    description: tournament ? 'Details and information about ' + tournament.name : 'Tournament details',
  };
}

export async function generateStaticParams() {
  return scheduleEvents.map(event => ({ id: event.id }));
}

export default function TournamentPage({ params }: TournamentPageProps) {
  const tournament = scheduleEvents.find(e => e.id === params.id);

  if (!tournament) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="rounded-xl border border-red-700/50 bg-red-900/20 p-6 text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Tournament Not Found</h1>
          <p className="text-neutral-400 mb-4">The tournament you are looking for does not exist.</p>
          <Link href="/schedule" className="text-yellow-400 hover:text-yellow-300">
            Back to Schedule
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        <span>/</span>
        <Link href="/schedule" className="hover:text-gold-400">Schedule</Link>
        <span>/</span>
        <span className="text-neutral-300">{tournament.name}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">{tournament.name}</h1>
        {tournament.details && <p className="text-lg text-neutral-400 mt-2">{tournament.details}</p>}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6">
            <h2 className="text-xl font-bold text-yellow-300 mb-4">Event Details</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-neutral-400">DATE</p>
                <p className="mt-2 text-lg font-semibold text-white">
                  {new Date(tournament.startDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                {tournament.endDate && (
                  <p className="mt-1 text-sm text-neutral-400">
                    to {new Date(tournament.endDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                )}
              </div>
              {tournament.format && (
                <div>
                  <p className="text-sm font-semibold text-neutral-400">FORMAT</p>
                  <p className="mt-2 text-lg font-semibold text-white">{tournament.format}</p>
                </div>
              )}
              {tournament.location && (
                <div>
                  <p className="text-sm font-semibold text-neutral-400">LOCATION</p>
                  <p className="mt-2 text-lg font-semibold text-white">{tournament.location}</p>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-neutral-400">PLATFORM</p>
                <p className="mt-2 text-lg font-semibold text-white">{tournament.platform}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-700 bg-neutral-900/50 p-6">
            <h2 className="text-xl font-bold text-yellow-300 mb-4">About This Event</h2>
            <p className="text-neutral-300 leading-relaxed">
              {tournament.details || 'This is a major Magic event. Check the official Magic website for more information and registration details.'}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {tournament.tournamentPageUrl && tournament.tournamentPageUrl !== '#' && (
            <a
              href={tournament.tournamentPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-xl transition-all"
            >
              View Official Page
            </a>
          )}
          <Link
            href="/schedule"
            className="block w-full text-center bg-neutral-700 hover:bg-neutral-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
          >
            Back to Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}