import Link from "next/link";
import { formats } from "@/data/formats";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-border bg-white dark:bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-gold-600 dark:text-gold-400">MTGProInfo</span>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Competitive Magic data, simplified. Free resources for serious players.
            </p>
          </div>

          {/* Formats */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Formats
            </h3>
            <ul className="space-y-1.5">
              {formats.slice(0, 4).map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/format/${f.slug}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors hover:text-gold-600 dark:hover:text-gold-400"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              &nbsp;
            </h3>
            <ul className="space-y-1.5">
              {formats.slice(4).map((f) => (
                <li key={f.slug}>
                  <Link
                    href={`/format/${f.slug}`}
                    className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors hover:text-gold-600 dark:hover:text-gold-400"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
              Resources
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/schedule"
                  className="text-sm text-neutral-600 dark:text-neutral-400 transition-colors hover:text-gold-600 dark:hover:text-gold-400"
                >
                  Event Schedule
                </Link>
              </li>
              <li>
                <span className="text-sm text-neutral-500 dark:text-neutral-500">
                  More coming soon
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 dark:border-border pt-6 text-center text-xs text-neutral-600 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} MTGProInfo. Not affiliated with
          Wizards of the Coast. Magic: The Gathering is a trademark of Wizards
          of the Coast LLC.
        </div>
      </div>
    </footer>
  );
}
