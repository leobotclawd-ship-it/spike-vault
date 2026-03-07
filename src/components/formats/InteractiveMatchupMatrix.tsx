'use client';

import { useState } from 'react';
import { standardMatchups, allDecks } from '@/data/standardMatchupMatrix';

// Display names for column headers (can span 2 lines)
const deckDisplayNames: Record<string, string> = {
  'Izzet Lessons': 'Izzet\nLessons',
  'Mono-Green Landfall': 'MonoG\nLandfall',
  'Dimir Excruciator': 'Dimir\nExcruciator',
  'Simic Rhythm': 'Simic\nRhythm',
  'Dimir Midrange': 'Dimir\nMidrange',
  'Izzet Elementals': 'Izzet\nElementals',
  'Azorius Tempo': 'Azorius\nTempo',
  'Jeskai Control': 'Jeskai\nControl',
  'Izzet Spellementals': 'Izzet\nSpellementals',
  'Izzet Prowess': 'Izzet\nProwess',
  'Mono-Red Aggro': 'MonoR\nAggro',
  'Temur Harmonizer': 'Temur\nHarmonizer',
  'Boros Dragons': 'Boros\nDragons',
  'Bant Airbending': 'Bant\nAirbending',
  'Other': 'Other'
};

export default function InteractiveMatchupMatrix() {
  const [hiddenRows, setHiddenRows] = useState<Set<string>>(new Set());
  const [hiddenCols, setHiddenCols] = useState<Set<string>>(new Set());

  const toggleRow = (deckName: string) => {
    const newHidden = new Set(hiddenRows);
    if (newHidden.has(deckName)) {
      newHidden.delete(deckName);
    } else {
      newHidden.add(deckName);
    }
    setHiddenRows(newHidden);
  };

  const toggleCol = (deckName: string) => {
    const newHidden = new Set(hiddenCols);
    if (newHidden.has(deckName)) {
      newHidden.delete(deckName);
    } else {
      newHidden.add(deckName);
    }
    setHiddenCols(newHidden);
  };

  const resetView = () => {
    setHiddenRows(new Set());
    setHiddenCols(new Set());
  };

  const visibleRows = allDecks.filter(deck => !hiddenRows.has(deck) && deck !== 'Other');
  const visibleCols = allDecks.filter(deck => !hiddenCols.has(deck) && deck !== 'Other');

  const getWRColor = (wrString: string): string => {
    const wr = parseFloat(wrString);
    if (wr >= 55) return 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300';
    if (wr >= 52) return 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400';
    if (wr >= 48) return 'bg-neutral-100 dark:bg-neutral-700/20 text-neutral-700 dark:text-neutral-300';
    if (wr >= 45) return 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400';
    return 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300';
  };

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs text-neutral-400">
          Click row or column header to hide. Showing {visibleRows.length}×{visibleCols.length}
        </p>
        <button
          onClick={resetView}
          className="px-3 py-1.5 rounded text-xs bg-gold-600 hover:bg-gold-500 text-white font-medium transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-border bg-white dark:bg-bg-secondary">
        <table className="text-base">
          <thead className="bg-neutral-50 dark:bg-bg-tertiary border-b border-neutral-200 dark:border-border sticky top-0">
            <tr>
              <th className="px-2 py-2 text-left text-gold-600 dark:text-gold-400 font-semibold sticky left-0 z-10 bg-neutral-50 dark:bg-bg-tertiary min-w-[85px] text-xs">Deck</th>
              <th className="px-1.5 py-2 text-center text-neutral-700 dark:text-neutral-300 font-semibold min-w-[36px] text-xs">Meta%</th>
              <th className="px-1.5 py-2 text-center text-neutral-700 dark:text-neutral-300 font-semibold min-w-[30px] text-xs">WR</th>
              {visibleCols.map(deck => (
                <th
                  key={deck}
                  className="px-1.5 py-2 text-center text-neutral-700 dark:text-neutral-300 font-semibold min-w-[65px] cursor-pointer hover:bg-neutral-100 dark:hover:bg-gold-900/30 transition-colors select-none"
                  onClick={() => toggleCol(deck)}
                  title={`Click to hide: ${deck}`}
                >
                  <span className="text-xs font-medium whitespace-pre-wrap leading-tight">{deckDisplayNames[deck] || deck}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standardMatchups
              .filter(matchup => !hiddenRows.has(matchup.deckName) && matchup.deckName !== 'Other')
              .map((matchup, idx) => (
                <tr
                  key={matchup.deckName}
                  className={`border-b border-neutral-200 dark:border-border/30 hover:bg-neutral-50 dark:hover:bg-bg-secondary/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white dark:bg-bg-secondary' : 'bg-neutral-50 dark:bg-bg-primary'
                  }`}
                >
                  <td
                    className="px-2 py-2 font-medium text-neutral-900 dark:text-white text-xs cursor-pointer hover:text-gold-600 dark:hover:text-gold-400 sticky left-0 z-10 bg-inherit min-w-[85px] max-w-[85px] whitespace-normal break-words select-none"
                    onClick={() => toggleRow(matchup.deckName)}
                    title={`Click to hide: ${matchup.deckName}`}
                  >
                    {matchup.deckName}
                  </td>
                  <td className="px-1.5 py-2 text-center text-xs text-neutral-600 dark:text-neutral-300">{matchup.metaShare}</td>
                  <td className={`px-1.5 py-2 text-center text-xs font-semibold ${getWRColor(matchup.overallWinrate)}`}>
                    {matchup.overallWinrate}
                  </td>
                  {visibleCols.map(opponentDeck => {
                    const wr = matchup.matchups[opponentDeck];
                    const isNotApplicable = wr === null;
                    const wrValue = isNotApplicable ? 0 : parseFloat(wr || '0');
                    
                    // Color code: red (bad) to green (good)
                    let bgColor = 'bg-neutral-100 dark:bg-bg-tertiary text-neutral-700 dark:text-neutral-300';
                    if (!isNotApplicable) {
                      if (wrValue >= 60) bgColor = 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-300';
                      else if (wrValue >= 55) bgColor = 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400';
                      else if (wrValue >= 45) bgColor = 'bg-neutral-100 dark:bg-neutral-700/20 text-neutral-700 dark:text-neutral-200';
                      else if (wrValue >= 40) bgColor = 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400';
                      else bgColor = 'bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-300';
                    }

                    return (
                      <td
                        key={opponentDeck}
                        className={`px-1.5 py-2 text-center text-xs font-medium min-w-[65px] ${bgColor} border-l border-neutral-200 dark:border-border/30 cursor-pointer hover:opacity-80 transition-opacity select-none`}
                      >
                        {isNotApplicable ? 'M' : wr}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
