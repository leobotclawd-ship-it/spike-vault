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

  const visibleRows = allDecks.filter(deck => !hiddenRows.has(deck));
  const visibleCols = allDecks.filter(deck => !hiddenCols.has(deck));

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

      <div className="overflow-x-auto rounded-lg border border-border bg-bg-secondary">
        <table className="text-base">
          <thead className="bg-bg-tertiary border-b border-border sticky top-0">
            <tr>
              <th className="px-2 py-3 text-left text-gold-400 font-semibold sticky left-0 z-10 bg-bg-tertiary min-w-[50px] text-xs">Deck</th>
              <th className="px-3 py-3 text-center text-neutral-300 font-semibold min-w-[50px]">%</th>
              <th className="px-3 py-3 text-center text-neutral-300 font-semibold min-w-[50px]">WR</th>
              {visibleCols.map(deck => (
                <th
                  key={deck}
                  className="px-2 py-3 text-center text-neutral-300 font-semibold min-w-[75px] cursor-pointer hover:bg-gold-900/30 transition-colors select-none"
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
              .filter(matchup => !hiddenRows.has(matchup.deckName))
              .map((matchup, idx) => (
                <tr
                  key={matchup.deckName}
                  className={`border-b border-border/50 hover:bg-bg-secondary/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'
                  }`}
                >
                  <td
                    className="px-2 py-3 font-medium text-white text-xs cursor-pointer hover:text-gold-400 sticky left-0 z-10 bg-inherit min-w-[50px] max-w-[50px] whitespace-normal break-words select-none"
                    onClick={() => toggleRow(matchup.deckName)}
                    title={`Click to hide: ${matchup.deckName}`}
                  >
                    {matchup.deckName}
                  </td>
                  <td className="px-3 py-3 text-center text-sm text-neutral-300">{matchup.metaShare}</td>
                  <td className="px-3 py-3 text-center text-sm font-semibold text-gold-300">{matchup.overallWinrate}</td>
                  {visibleCols.map(opponentDeck => {
                    const wr = matchup.matchups[opponentDeck];
                    const isNotApplicable = wr === null;
                    const wrValue = isNotApplicable ? 0 : parseFloat(wr || '0');
                    
                    // Color code: red (bad) to green (good)
                    let bgColor = 'bg-bg-tertiary';
                    if (!isNotApplicable) {
                      if (wrValue >= 60) bgColor = 'bg-green-900/30';
                      else if (wrValue >= 55) bgColor = 'bg-green-900/20';
                      else if (wrValue >= 45) bgColor = 'bg-neutral-700/20';
                      else if (wrValue >= 40) bgColor = 'bg-red-900/20';
                      else bgColor = 'bg-red-900/30';
                    }

                    return (
                      <td
                        key={opponentDeck}
                        className={`px-2 py-3 text-center text-sm font-medium min-w-[75px] ${bgColor} ${
                          isNotApplicable ? 'text-neutral-400' : 'text-neutral-100'
                        } border-l border-border/30 cursor-pointer hover:opacity-80 transition-opacity select-none`}
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
