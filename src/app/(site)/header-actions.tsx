"use client";

import { ThemeToggle } from "@/app/(site)/theme-toggle";

function SearchIcon() {
  return (
    <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none">
      <circle cx="7" cy="7" r="4.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M10.5 10.5L13.25 13.25"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HeaderActions() {
  return (
    <div className="site-header-actions">
      <button
        type="button"
        className="header-action header-action--search"
        aria-label="Buscar documentação (em breve)"
        disabled
      >
        <SearchIcon />
        <span className="header-action-label">Search</span>
        <kbd className="header-kbd">⌘K</kbd>
      </button>

      <ThemeToggle />
    </div>
  );
}
