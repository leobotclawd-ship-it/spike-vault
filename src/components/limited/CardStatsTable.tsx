'use client';

import { useState } from 'react';
import CardImageHover from '@/components/CardImageHover';

interface Card {
  name: string;
  type?: string;
  colors?: string[];
  gpwr: number;
  alsa: number;
  gihWr: number;
  iwd?: number;
  pickCount: number;
  avgPick?: number;
}

interface Props {
  cards?: Card[];
}

type SortKey = keyof Card;
type SortOrder = 'asc' | 'desc';

export default function CardStatsTable({ cards = [] }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const handleSort = (key: SortKey) => {
    setSortKey(key);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedCards = [...cards].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    
    let result = 0;
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      result = aVal - bVal;
    } else {
      result = String(aVal || '').localeCompare(String(bVal || ''));
    }
    
    return sortOrder === 'asc' ? result : -result;
  });

  if (!cards.length) {
    return <div className="p-6 text-neutral-400">Loading card data...</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-bg-secondary">
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-bg-tertiary">
          <tr>
            <th onClick={() => handleSort('name')} className="cursor-pointer px-4 py-3 text-left">Name</th>
            <th onClick={() => handleSort('alsa')} className="cursor-pointer px-4 py-3 text-left">ALSA</th>
            <th onClick={() => handleSort('gpwr')} className="cursor-pointer px-4 py-3 text-left">GP WR</th>
            <th onClick={() => handleSort('gihWr')} className="cursor-pointer px-4 py-3 text-left">GIH WR</th>
            <th onClick={() => handleSort('pickCount')} className="cursor-pointer px-4 py-3 text-left"># Picked</th>
            <th onClick={() => handleSort('avgPick')} className="cursor-pointer px-4 py-3 text-left">Avg Pick</th>
          </tr>
        </thead>
        <tbody>
          {sortedCards.map((card) => (
            <tr key={card.name} className="border-b border-border/50 hover:bg-bg-secondary/50">
              <td className="px-4 py-3"><CardImageHover cardName={card.name} /></td>
              <td className="px-4 py-3 text-neutral-300">{card.alsa?.toFixed(2) || '-'}</td>
              <td className="px-4 py-3 text-neutral-300">{(card.gpwr * 100).toFixed(1)}%</td>
              <td className="px-4 py-3 text-neutral-300">{(card.gihWr * 100).toFixed(1)}%</td>
              <td className="px-4 py-3 text-neutral-300">{card.pickCount}</td>
              <td className="px-4 py-3 text-neutral-300">{card.avgPick?.toFixed(1) || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}