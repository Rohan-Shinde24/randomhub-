"use client";

import { useEffect, useRef, useState } from "react";
import { Dices, Menu, Sparkles, Ticket, Wrench, X } from "lucide-react";

export type ToolMode = "wheel" | "dice" | "lottery";

const tools: { id: ToolMode; label: string; icon: typeof Sparkles }[] = [
  { id: "wheel", label: "Spin wheel", icon: Sparkles },
  { id: "dice", label: "Name dice", icon: Dices },
  { id: "lottery", label: "Lottery draw", icon: Ticket },
];

export function ToolNavigation({
  mode,
  onModeChange,
}: {
  mode: ToolMode;
  onModeChange: (mode: ToolMode) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="RandomHub home">
        <span className="brand-mark"><Sparkles size={19} /></span>
        <span>random<span className="brand-accent">hub</span></span>
      </a>
      <nav className="top-navigation" aria-label="Main navigation">
        <a className="nav-current" href="#tools">Random tools</a>
        <span className="nav-divider" />
        <a href="/about">About</a>
        <div className="coming-tools" aria-label="More tools coming soon">
          <Wrench size={15} />
          <span>More tools</span>
          <span className="soon-badge">Coming soon</span>
        </div>
      </nav>
      <span className="privacy-note"><span className="privacy-dot" /> Free &amp; private</span>
      <button
        aria-controls="mobile-tool-drawer"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      {menuOpen && (
        <div className="mobile-drawer">
          <button aria-label="Close menu" className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} type="button" />
          <aside aria-label="Mobile navigation" aria-modal="true" className="mobile-drawer-panel" id="mobile-tool-drawer" role="dialog">
            <div className="drawer-heading">
              <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
                <span className="brand-mark"><Sparkles size={18} /></span>
                <span>random<span className="brand-accent">hub</span></span>
              </a>
              <button aria-label="Close menu" className="drawer-close" onClick={() => setMenuOpen(false)} ref={closeButton} type="button"><X size={19} /></button>
            </div>
            <p className="drawer-section-label">RANDOM TOOLS</p>
            <nav aria-label="Choose a random tool" className="drawer-tools">
              {tools.map(({ id, label, icon: Icon }) => (
                <button
                  aria-current={mode === id ? "page" : undefined}
                  className={`drawer-tool${mode === id ? " active" : ""}`}
                  key={id}
                  onClick={() => { onModeChange(id); setMenuOpen(false); }}
                  type="button"
                >
                  <Icon size={18} /><span>{label}</span>
                  {mode === id && <span className="drawer-active-mark">ACTIVE</span>}
                </button>
              ))}
            </nav>
            <p className="drawer-section-label drawer-coming-label"><Wrench size={14} /> MORE TOOLS <span className="soon-badge">Coming soon</span></p>
            <div className="drawer-upcoming"><span className="upcoming-icon">01</span><span>Coin flip</span></div>
            <div className="drawer-upcoming"><span className="upcoming-icon">02</span><span>Team maker</span></div>
            <a className="drawer-footer-link" href="/about" onClick={() => setMenuOpen(false)}>About RandomHub <span>Free, simple random tools</span></a>
            <p className="drawer-privacy"><span className="privacy-dot" /> Free &amp; private. Your names stay here.</p>
          </aside>
        </div>
      )}
    </header>
  );
}