'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import SetSelector from '@/components/limited/SetSelector';
import ArchetypeBreakdown from '@/components/limited/ArchetypeBreakdown';
import CardStatsTable from '@/components/limited/CardStatsTable';
import SetInfoPanel from '@/components/limited/SetInfoPanel';
import UpcomingTournaments from '@/components/formats/UpcomingTournaments';
import { getAllLimitedSets } from '@/data/formats';

export default function LimitedPage() {
  const searchParams = useSearchParams();
  const sets = getAllLimitedSets();
  const currentSet = searchParams.get('set') || sets[0]?.setCode || 'TMNT';
  const currentSetData = sets.find((s) => s.setCode === currentSet);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
        <Link href="/" className="hover:text-gold-400">Home</Link>
        <span>/</span>
        <Link href="/format/limited" className="hover:text-gold-400">Limited</Link>
        <span>/</span>
        <span className="text-neutral-300">{currentSetData?.setName || currentSet}</span>
      </div>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">Limited Format</h1>
        <p className="mt-2 text-neutral-400">Draft and sealed statistics</p>
      </div>

      <SetSelector />
      <UpcomingTournaments format="limited" limit={4} />
      <ArchetypeBreakdown setCode={currentSet} />
      <CardStatsTable cards={currentSetData?.cardStats || []} />
      <SetInfoPanel setCode={currentSet} />

      <section className="border-t border-border pt-8 mt-8">
        <h3 className="mb-3 text-sm font-semibold uppercase text-neutral-500">Other Formats</h3>
        <div className="flex flex-wrap gap-2">
          <Link href="/format/standard" className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm hover:text-gold-400">Standard</Link>
          <Link href="/format/pioneer" className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm hover:text-gold-400">Pioneer</Link>
          <Link href="/format/modern" className="rounded-lg border border-border bg-bg-secondary px-3 py-1.5 text-sm hover:text-gold-400">Modern</Link>
        </div>
      </section>
    </div>
  );
}