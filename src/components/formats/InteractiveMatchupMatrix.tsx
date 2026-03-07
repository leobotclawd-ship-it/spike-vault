'use client';

import { useState } from 'react';
import { standardMatchups, allDecks } from '@/data/standardMatchupMatrix';

export default function InteractiveMatchupMatrix() {
  const [hiddenDecks, setHiddenDecks] = useState<Set<string>>(new Set());

  const toggleDeck = (deckName: string) => {
    const newHidden = new Set(hiddenDecks);
    if (newHidden.has(deckName)) {
      newHidden.delete(deckName);
    } else {
      newHidden.add(deckName);
    }
    setHiddenDecks(newHidden);
  };

  const resetView = () => {
    setHiddenDecks(new Set());
  };

  const visibleDecks = allDecks.filter(deck => !hiddenDecks.has(deck));

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {allDecks.map(deck => (
            <button
              key={deck}
              onClick={() => toggleDeck(deck)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                hiddenDecks.has(deck)
                  ? 'bg-neutral-700 text-neutral-400 opacity-50'
                  : 'bg-gold-900/30 text-gold-300 border border-gold-700/50'
              }`}
            >
              {deck} {hiddenDecks.has(deck) && '✕'}
            </button>
          ))}
        </div>

        <button
          onClick={resetView}
          className="self-start px-4 py-2 rounded-lg bg-gold-600 hover:bg-gold-500 text-white font-medium text-sm transition-colors"
        >
          Reset View
        </button>

        <p className="text-xs text-neutral-400">
          Click deck names to hide/show. Currently showing {visibleDecks.length}/{allDecks.length} decks
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border bg-bg-secondary">
        <table className="w-full text-sm">
          <thead className="bg-bg-tertiary border-b border-border sticky top-0">
            <tr>
              <th className="px-4 py-3 text-left text-gold-400 font-semibold min-w-[150px]">Deck</th>
              <th className="px-4 py-3 text-left text-neutral-300 font-semibold min-w-[80px]">Meta %</th>
              <th className="px-4 py-3 text-left text-neutral-300 font-semibold min-w-[80px]">WR</th>
              {visibleDecks.map(deck => (
                <th
                  key={deck}
                  className="px-3 py-3 text-center text-neutral-300 font-semibold min-w-[120px] cursor-pointer hover:bg-gold-900/20 transition-colors"
                  onClick={() => toggleDeck(deck)}
                  title={`Click to hide ${deck}`}
                >
                  <span className="text-xs">{deck}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standardMatchups
              .filter(matchup => !hiddenDecks.has(matchup.deckName))
              .map((matchup, idx) => (
                <tr
                  key={matchup.deckName}
                  className={`border-b border-border/50 hover:bg-bg-secondary/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-bg-secondary' : 'bg-bg-primary'
                  }`}
                >
                  <td
                    className="px-4 py-3 font-medium text-white cursor-pointer hover:text-gold-400"
                    onClick={() => toggleDeck(matchup.deckName)}
                    title={`Click to hide ${matchup.deckName}`}
                  >
                    {matchup.deckName}
                  </td>
                  <td className="px-4 py-3 text-neutral-300">{matchup.metaShare}</td>
                  <td className="px-4 py-3 text-gold-300 font-semibold">{matchup.overallWinrate}</td>
                  {visibleDecks.map(opponentDeck => {
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
                        className={`px-3 py-3 text-center text-sm ${bgColor} ${
                          isNotApplicable ? 'text-neutral-400' : 'text-neutral-200'
                        } border-l border-border/30`}
                      >
                        {isNotApplicable ? 'Mirror' : wr}
                      </td>
                    );
                  })}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-neutral-500">
        💡 Click deck names on headers or rows to show/hide them. Green = favored, Red = unfavored. Darker = more extreme matchup.
      </p>
    </div>
  );
}
