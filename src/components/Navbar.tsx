"use client";

import { T } from "gt-next";
import { LocaleSelector } from "gt-next";
import NavLinks from "./NavLinks";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 bg-neutral-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo / brand */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="https://generaltranslation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors truncate"
          >
            General Translation
          </a>
          <span className="text-neutral-700">/</span>
          <span className="text-sm font-semibold text-neutral-100 whitespace-nowrap">
            <T>SaaS Dashboard</T>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <GitHubLink />
          <LocaleSelector />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-neutral-200 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 px-4 py-3 space-y-3">
          <NavLinks mobile onNavigate={() => setMenuOpen(false)} />
          <div className="flex items-center gap-4 pt-2 border-t border-neutral-800">
            <GitHubLink />
            <LocaleSelector />
          </div>
        </div>
      )}
    </header>
  );
}

function GitHubLink() {
  return (
    <a
      href="https://github.com/gt-examples/saas-dashboard"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-400 hover:text-neutral-200 transition-colors"
      aria-label="View on GitHub"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  );
}
