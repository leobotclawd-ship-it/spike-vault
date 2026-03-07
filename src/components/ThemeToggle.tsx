'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme from html element or localStorage
    const html = document.documentElement;
    const isDarkMode = html.classList.contains('dark');
    setIsDark(isDarkMode);
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const html = document.documentElement;
    const newIsDark = !isDark;
    
    // Update classes
    html.classList.toggle('dark', newIsDark);
    html.classList.toggle('light', !newIsDark);
    
    // Save preference
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    // Update state
    setIsDark(newIsDark);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={handleToggle}
      className="rounded-md p-2 text-neutral-500 hover:text-gold-400 dark:text-neutral-300 dark:hover:text-gold-300 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon (for dark mode - clicking switches to light)
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v1m0 16v1m9-9h-1m-16 0H1m15.364 1.636l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon (for light mode - clicking switches to dark)
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
