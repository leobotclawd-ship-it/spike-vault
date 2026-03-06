"use client";

import { getLimitedSetByCode } from "@/data/formats";
import Link from "next/link";

interface SetInfoPanelProps {
  setCode: string;
}

export default function SetInfoPanel({ setCode }: SetInfoPanelProps) {
  const set = getLimitedSetByCode(setCode);

  if (!set) {
    return <div className="text-center text-neutral-500">Set not found</div>;
  }

  const lastUpdated = new Date(set.lastUpdated);
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <section className="mb-10">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Set Info */}
        <div className="rounded-lg border border-border bg-bg-secondary p-6">
          <h3 className="mb-4 text-lg font-bold text-white">{set.setName}</h3>
          <div className="space-y-2 text-sm text-neutral-400">
            <p>
              <span className="text-neutral-500">Set Code:</span> {set.setCode}
            </p>
            <p>
              <span className="text-neutral-500">Release Date:</span>{" "}
              {new Date(set.releaseDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <p>
              <span className="text-neutral-500">Last Updated:</span>{" "}
              {formattedDate}
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <Link
                href="/format/limited/stats-guide"
                className="text-gold-400 hover:text-gold-300 transition-colors font-medium text-sm"
              >
                View Stats Explanation →
              </Link>
            </div>
          </div>
        </div>

        {/* Mechanics */}
        <div className="rounded-lg border border-border bg-bg-secondary p-6">
          <h3 className="mb-4 text-lg font-bold text-white">Set Mechanics</h3>
          <ul className="space-y-3">
            {set.mechanics.map((mechanic, i) => (
              <li key={i} className="text-sm">
                <span className="font-semibold text-gold-400">
                  {mechanic.split(" - ")[0]}
                </span>
                {mechanic.split(" - ")[1] && (
                  <p className="text-neutral-400 text-xs mt-1">
                    {mechanic.split(" - ")[1]}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
