"use client";

import { useState } from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-rl3-mid-gray/50 backdrop-blur-md bg-rl3-black/80">
      <div className="content-container flex items-center justify-between h-16">
        <a href="#" aria-label="Inicio">
          <Logo className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-gray hover:text-rl3-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-0.5 bg-rl3-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-rl3-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-rl3-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-rl3-mid-gray/50 bg-rl3-black/95 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-[0.2em] text-rl3-gray hover:text-rl3-accent transition-colors border-b border-rl3-mid-gray/30"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
