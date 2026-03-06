"use client";

import { getLimitedSetByCode } from "@/data/formats";
import { useState } from "react";

type FormatFilter = "draft-bo1" | "draft-bo3" | "sealed-bo1" | "sealed-bo3";

const colorMap: Record<string, { bg: string; text: string; label: string }> = {
  W: { bg: "bg-yellow-100", text: "text-yellow-900", label: "W" },
  U: { bg: "bg-blue-500", text: "text-white", label: "U" },
  B: { bg: "bg-neutral-800", text: "text-neutral-200", label: "B" },
  R: { bg: "bg-red-600", text: "text-white", label: "R" },
  G: { bg: "bg-green-600", text: "text-white", label: "G" },
  O: { bg: "bg-orange-600", text: "text-white", label: "W" },
};

function ColorPips({ colors }: { colors: string[] }) {
  return (
    <div className="flex gap-1">
      {colors.map((c, i) => {
        const color = colorMap[c];
        if (!color) return null;
        return (
          <span
            key={i}
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${color.bg} ${color.text}`}
          >
            {color.label}
          </span>
        );
      })}
    </div>
  );
}

interface ArchetypeBreakdownProps {
  setCode: string;
}

export default function ArchetypeBreakdown({ setCode }: ArchetypeBreakdownProps) {
  const [format, setFormat] = useState<FormatFilter>("draft-bo1");
  const set = getLimitedSetByCode(setCode);

  if (!set) {
    return <div className="text-center text-neutral-500">Set not found</div>;
  }

  const getWR = (archetype: typeof set.archetypes[0]) => {
    switch (format) {
      case "draft-bo1":
        return archetype.draftBO1WR;
      case "draft-bo3":
        return archetype.draftBO3WR;
      case "sealed-bo1":
        return archetype.sealedBO1WR;
      case "sealed-bo3":
        return archetype.sealedBO3WR;
    }
  };

  const getMeta = (archetype: typeof set.archetypes[0]) => {
    switch (format) {
      case "draft-bo1":
        return archetype.draftBO1Meta;
      case "draft-bo3":
        return archetype.draftBO3Meta;
      case "sealed-bo1":
        return archetype.sealedBO1Meta;
      case "sealed-bo3":
        return archetype.sealedBO3Meta;
    }
  };

  const buttons: { label: string; value: FormatFilter }[] = [
    { label: "Draft BO1", value: "draft-bo1" },
    { label: "Draft BO3", value: "draft-bo3" },
    { label: "Sealed BO1", value: "sealed-bo1" },
    { label: "Sealed BO3", value: "sealed-bo3" },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-gold-400">Archetype Breakdown</h2>

      {/* Format Filter Buttons */}
      <div className="mb-6 flex flex-wrap gap-2">
        {buttons.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFormat(btn.value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              format === btn.value
                ? "bg-gold-700 text-white"
                : "border border-border bg-bg-secondary text-neutral-300 hover:border-gold-700/50"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Archetypes Table */}
      <div className="overflow-x-auto rounded-lg border border-border bg-bg-secondary">
        <table className="w-full">
          <thead className="border-b border-border bg-bg-tertiary">
            <tr className="text-left text-sm font-semibold text-neutral-300">
              <th className="px-4 py-3">Archetype</th>
              <th className="px-4 py-3">Colors</th>
              <th className="px-4 py-3 text-right">Win Rate</th>
              <th className="px-4 py-3 text-right">Meta Share</th>
            </tr>
          </thead>
          <tbody>
            {set.archetypes
              .sort((a, b) => getMeta(b) - getMeta(a))
              .map((archetype) => {
                const wr = getWR(archetype);
                const meta = getMeta(archetype);
                return (
                  <tr
                    key={archetype.name}
                    className="border-b border-border/50 transition-colors hover:bg-bg-secondary/50"
                  >
                    <td className="px-4 py-3 font-medium text-white">
                      {archetype.name}
                    </td>
                    <td className="px-4 py-3">
                      <ColorPips colors={archetype.colors} />
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-300">
                      <span className={wr > 0.5 ? "text-green-400" : "text-red-400"}>
                        {(wr * 100).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right text-neutral-300">
                      {(meta * 100).toFixed(1)}%
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
