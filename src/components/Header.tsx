"use client";

import Link from "next/link";
import { useState } from "react";
import { formats } from "@/data/formats";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  ...formats.map((f) => ({ name: f.name, href: `/format/${f.slug}` })),
  { name: "Schedule", href: "/schedule" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 dark:border-border bg-white dark:bg-bg-primary/95 backdrop-blur dark:supports-[backdrop-filter]:bg-bg-primary/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gold-400">
            MTGProInfo
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:bg-neutral-100 dark:hover:bg-bg-tertiary hover:text-gold-600 dark:hover:text-gold-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Theme toggle */}
        <ThemeToggle />

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-bg-tertiary md:hidden"
          aria-label="Toggle navigation"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-neutral-200 dark:border-border px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors hover:bg-neutral-100 dark:hover:bg-bg-tertiary hover:text-gold-600 dark:hover:text-gold-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
