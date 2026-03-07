'use client';

import { useState } from 'react';
import { standardMatchups, allDecks } from '@/data/standardMatchupMatrix';

// Abbreviations for column headers
const deckAbbreviations: Record<string, string> = {
  'Izzet Lessons': 'IzL',
  'Mono-Green Landfall': 'MG',
  'Dimir Excruciator': 'DE',
  'Simic Rhythm': 'SR',
  'Dimir Midrange': 'DM',
  'Izzet Elementals': 'IzE',
  'Azorius Tempo': 'AT',
  'Jeskai Control': 'JC',
  'Izzet Spellementals': 'IzS',
  'Izzet Prowess': 'IP',
  'Mono-Red Aggro': 'MRA',
  'Temur Harmonizer': 'TH',
  'Boros Dragons': 'BD',
  'Bant Airbending': 'BA',
  'Other': 'Oth'
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
      <div className="mb-6 flex flex-col gap-4">
        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-neutral-500">Hide from rows (left side):</h3>
          <div className="flex flex-wrap gap-1.5">
            {allDecks.map(deck => (
              <button
                key={`row-${deck}`}
                onClick={() => toggleRow(deck)}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  hiddenRows.has(deck)
                    ? 'bg-red-900/40 text-red-300 line-through'
                    : 'bg-gold-900/30 text-gold-300 border border-gold-700/50'
                }`}
              >
                {deck}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-xs font-semibold uppercase text-neutral-500">Hide from columns (top):</h3>
          <div className="flex flex-wrap gap-1.5">
            {allDecks.map(deck => (
              <button
                key={`col-${deck}`}
                onClick={() => toggleCol(deck)}
                className={`px-2 py-1 rounded text-xs font-medium transition-all ${
                  hiddenCols.has(deck)
                    ? 'bg-red-900/40 text-red-300 line-through'
                    : 'bg-blue-900/30 text-blue-300 border border-blue-700/50'
                }`}
              >
                {deck}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={resetView}
          className="self-start px-4 py-2 rounded-lg bg-gold-600 hover:bg-gold-500 text-white font-medium text-sm transition-colors"
        >
          Reset All
        </button>

        <p className="text-xs text-neutral-400">
          📊 Rows hidden: {hiddenRows.size} | Columns hidden: {hiddenCols.size} | Showing {visibleRows.length}×{visibleCols.length} grid
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-bg-secondary">
        <table className="text-sm">
          <thead className="bg-bg-tertiary border-b border-border sticky top-0">
            <tr>
              <th className="px-3 py-2 text-left text-gold-400 font-semibold sticky left-0 z-10 bg-bg-tertiary min-w-[90px] max-w-[90px]">Deck</th>
              <th className="px-2 py-2 text-center text-neutral-300 font-semibold min-w-[40px]">%</th>
              <th className="px-2 py-2 text-center text-neutral-300 font-semibold min-w-[40px]">WR</th>
              {visibleCols.map(deck => (
                <th
                  key={deck}
                  className="px-1.5 py-2 text-center text-neutral-300 font-semibold min-w-[50px] max-w-[50px] cursor-pointer hover:bg-blue-900/30 transition-colors"
                  onClick={() => toggleCol(deck)}
                  title={`Click to hide column: ${deck}`}
                >
                  <span className="text-[10px] leading-tight">{deckAbbreviations[deck] || deck.substring(0, 3)}</span>
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
                    className="px-3 py-2 font-medium text-white text-xs cursor-pointer hover:text-gold-400 sticky left-0 z-10 bg-inherit max-w-[90px] overflow-hidden text-ellipsis whitespace-nowrap"
                    onClick={() => toggleRow(matchup.deckName)}
                    title={`Click to hide row: ${matchup.deckName}`}
                  >
                    {matchup.deckName}
                  </td>
                  <td className="px-2 py-2 text-center text-xs text-neutral-300">{matchup.metaShare}</td>
                  <td className="px-2 py-2 text-center text-xs text-gold-300 font-semibold">{matchup.overallWinrate}</td>
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
                        className={`px-1.5 py-2 text-center text-[10px] min-w-[50px] max-w-[50px] ${bgColor} ${
                          isNotApplicable ? 'text-neutral-400' : 'text-neutral-200'
                        } border-l border-border/30`}
                      >
                        {isNotApplicable ? 'M' : wr?.replace('% ', '%\n') || '—'}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        💡 Click row labels (left) to hide decks from comparison. Click column headers (top) to hide opponent matchups.
        <br />Green = favored (60%+), Red = unfavored (&lt;40%). <strong>M</strong> = Mirror match.
      </p>
    </div>
  );
}
