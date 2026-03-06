"use client";

import { getAllLimitedSets } from "@/data/formats";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SetSelector() {
  const sets = getAllLimitedSets();
  const searchParams = useSearchParams();
  const currentSet = searchParams.get("set") || sets[0]?.setCode || "TMNT";

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2">
        {sets.map((set) => (
          <Link
            key={set.setCode}
            href={`?set=${set.setCode}`}
            className={`rounded-lg px-4 py-2 font-medium transition-colors ${
              currentSet === set.setCode
                ? "bg-gold-700 text-white"
                : "border border-border bg-bg-secondary text-neutral-300 hover:border-gold-700/50 hover:text-gold-400"
            }`}
          >
            {set.setName}
          </Link>
        ))}
      </div>
    </div>
  );
}
