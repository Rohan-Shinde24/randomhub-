"use client";

import { useState } from "react";
import { ArrowDownUp, Clock3, Dices, ListPlus, Sparkles, Ticket } from "lucide-react";
import { BrandMark } from "@/components/brand-mark";
import { DiceTool } from "@/components/dice-tool";
import { LotteryTool } from "@/components/lottery-tool";
import { NameEntry } from "@/components/name-entry";
import { NameWheel } from "@/components/name-wheel";
import { ToolNavigation, type ToolMode } from "@/components/tool-navigation";

const modes: { id: ToolMode; label: string; icon: typeof Sparkles }[] = [
  { id: "wheel", label: "Spin wheel", icon: Sparkles },
  { id: "dice", label: "Name dice", icon: Dices },
  { id: "lottery", label: "Lottery draw", icon: Ticket },
];

export default function RandomizerWorkspace() {
  const [mode, setMode] = useState<ToolMode>("wheel");
  const [rawNames, setRawNames] = useState("");
  const [speed, setSpeed] = useState(5);
  const [reverse, setReverse] = useState(false);
  const names = rawNames
    .split(/\r?\n/)
    .map((name) => name.trim())
    .filter(Boolean);

  return (
    <main className="page-shell" id="home">
      <ToolNavigation mode={mode} onModeChange={setMode} />

      <div className="workspace-layout">
        <div className="workspace-main">
          <section className="tool-shell" aria-label="Random name picker tools">
            <div className="tool-toolbar">
              <div
                className="mode-tabs"
                role="tablist"
                aria-label="Randomizer tool"
              >
                {modes.map(({ id, label, icon: Icon }) => (
                  <button
                    aria-selected={mode === id}
                    className={`mode-tab${mode === id ? " active" : ""}`}
                    key={id}
                    onClick={() => setMode(id)}
                    role="tab"
                    type="button"
                  >
                    <Icon size={16} /> {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="workspace-grid">
              <div className="entry-column">
                <NameEntry
                  names={names}
                  onChange={setRawNames}
                  value={rawNames}
                />
                {mode === "wheel" && (
                  <div
                    className="entry-settings"
                    aria-label="Spin wheel settings"
                  >
                    <span className="settings-heading">WHEEL SETTINGS</span>
                    <label className="speed-control" htmlFor="spin-speed">
                      <Clock3 size={15} />
                      <span>Speed</span>
                      <input
                        id="spin-speed"
                        max="8"
                        min="2"
                        onChange={(event) =>
                          setSpeed(Number(event.target.value))
                        }
                        type="range"
                        value={speed}
                      />
                      <span className="speed-value">{speed}s</span>
                    </label>
                    <button
                      aria-pressed={reverse}
                      className={`reverse-control${reverse ? " selected" : ""}`}
                      onClick={() => setReverse(!reverse)}
                      type="button"
                    >
                      <ArrowDownUp size={15} /> Reverse
                    </button>
                  </div>
                )}
              </div>
              <div className="stage-column" role="tabpanel">
                {mode === "wheel" && (
                  <NameWheel names={names} reverse={reverse} speed={speed} />
                )}
                {mode === "dice" && <DiceTool names={names} />}
                {mode === "lottery" && <LotteryTool names={names} />}
              </div>
            </div>
          </section>
          
        </div>
      
      </div>
      <section aria-labelledby="how-title" className="how-it-works" id="how-it-works">
        <div className="how-copy">
          <span className="eyebrow">SIMPLE, FAIR, DONE</span>
          <h2 id="how-title">Random picks,<br />no fuss.</h2>
        </div>
        <ol className="how-steps">
          <li>
            <div className="step-topline"><span className="step-number">01</span><span className="step-icon"><ListPlus size={18} /></span></div>
            <h3>Add the options</h3>
            <p>Enter a name on each line. Your list stays right here in your browser.</p>
          </li>
          <li>
            <div className="step-topline"><span className="step-number">02</span><span className="step-icon"><Dices size={18} /></span></div>
            <h3>Pick a tool</h3>
            <p>Spin the wheel, roll for a player, or draw a lottery winner.</p>
          </li>
          <li>
            <div className="step-topline"><span className="step-number">03</span><span className="step-icon"><Sparkles size={18} /></span></div>
            <h3>Let chance decide</h3>
            <p>Every name gets an equal shot. No accounts, no setup, just a result.</p>
          </li>
        </ol>
      </section>
      <footer className="page-footer">
        <a className="brand footer-brand" href="#home" aria-label="RandomHub home">
          <BrandMark />
          <span>
            random<span className="brand-accent">hub</span>
          </span>
        </a>

        <nav aria-label="Footer navigation" className="footer-links  te">
          <a className="text-xl" href="/how-to-use">How to use</a>
          <a  className="text-xl" href="/about">About</a>
          <a className="text-xl" href="/privacy-policy">Privacy Policy</a>
          <a className="text-xl " href="/terms">Terms</a>
        </nav>

        <p className="footer-note text-black-50">
          Your names stay in your browser. RandomHub does not upload your wheel
          entries to its servers.
        </p>

      
      </footer>
    </main>
  );
}
