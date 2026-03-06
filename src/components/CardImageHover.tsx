'use client';

import { useState, useMemo } from 'react';

interface Props {
  cardName: string;
}

export default function CardImageHover({ cardName }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const cache = useMemo(() => new Map<string, string | null>(), []);

  const fetchCardImage = async () => {
    if (loading || (cache.has(cardName) && !loading)) return;

    if (cache.has(cardName)) {
      const cachedUrl = cache.get(cardName);
      setImageUrl(cachedUrl || null);
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await fetch(
        'https://api.scryfall.com/cards/named?fuzzy=' + encodeURIComponent(cardName),
        { headers: { 'User-Agent': 'SpikeVault/1.0' } }
      );

      if (!response.ok) {
        setError(true);
        cache.set(cardName, null);
        setLoading(false);
        return;
      }

      const data = await response.json();
      const url = data.image_uris?.normal || data.card_faces?.[0]?.image_uris?.normal || null;
      
      cache.set(cardName, url);
      setImageUrl(url);
      setError(false);
    } catch {
      setError(true);
      cache.set(cardName, null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => {
        setShowTooltip(true);
        fetchCardImage();
      }}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <span className="border-b border-dotted border-gold-400 cursor-help text-white hover:text-gold-300">
        {cardName}
      </span>

      {showTooltip && (
        <div className="absolute left-0 top-full mt-2 z-50 pointer-events-none">
          <div className="bg-bg-secondary border-2 border-gold-400 rounded-lg overflow-hidden shadow-lg">
            {loading && <div className="w-32 h-48 flex items-center justify-center text-neutral-400">Loading...</div>}
            {error && <div className="w-32 h-48 flex items-center justify-center text-neutral-400 text-xs">Not found</div>}
            {imageUrl && !loading && (
              <img
                src={imageUrl}
                alt={cardName}
                className="w-auto h-auto"
                style={{ maxWidth: '180px' }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}