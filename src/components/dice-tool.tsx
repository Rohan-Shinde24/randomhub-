"use client";

import { useEffect, useRef, useState } from "react";
import { Dices, RotateCcw } from "lucide-react";

const pipPositions: Record<number, number[]> = {
  1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8],
};

export function DiceTool({ names }: { names: string[] }) {
  const players = names.slice(0, 6);
  const [face, setFace] = useState(1);
  const [rolling, setRolling] = useState(false);
  const [winner, setWinner] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function roll() {
    if (rolling || players.length < 2) return;
    setRolling(true);
    setWinner("");
    setFace(Math.ceil(Math.random() * 6));
    timer.current = setTimeout(() => {
      const result = Math.ceil(Math.random() * players.length);
      setFace(result);
      setWinner(players[result - 1]);
      setRolling(false);
    }, 700);
  }

  return (
    <section className="mode-stage dice-stage" aria-labelledby="dice-title">
      <div className="wheel-heading">
        <div><span className="eyebrow"><Dices size={14} /> NAME DICE</span><h2 id="dice-title">Give the dice a roll</h2></div>
        <span className="entry-total">Up to 6 players</span>
      </div>
      <div className="dice-layout">
        <div className={`die${rolling ? " is-rolling" : ""}`} aria-label={`Dice showing ${face}`} role="img">
          {Array.from({ length: 9 }, (_, index) => (
            <span className={pipPositions[face].includes(index) ? "pip visible" : "pip"} key={index} />
          ))}
        </div>
        <div className="player-list" aria-label="Players assigned to dice faces">
          {Array.from({ length: 6 }, (_, index) => (
            <div className={`player-row${index < players.length ? " assigned" : ""}${winner && index === face - 1 ? " picked" : ""}`} key={index}>
              <span className="player-face">{index + 1}</span>
              <span>{players[index] || "Add a player"}</span>
              {winner && index === face - 1 && <span className="picked-label">PICKED</span>}
            </div>
          ))}
        </div>
      </div>
      <div className="dice-result" aria-live="polite">
        <span className="result-caption">{rolling ? "ROLLING" : winner ? `DICE LANDED ON ${face}` : "THE DICE WILL PICK"}</span>
        <strong>{rolling ? "Rolling..." : winner || "A player"}</strong>
      </div>
      <button className="primary-button" disabled={players.length < 2 || rolling} onClick={roll} type="button">
        {rolling ? <Dices size={18} /> : <RotateCcw size={17} />}{rolling ? "Rolling..." : "Roll the dice"}
      </button>
      {names.length > 6 && <p className="inline-hint">Using the first 6 names in your list.</p>}
      {players.length < 2 && <p className="inline-hint">Add at least two players to roll.</p>}
    </section>
  );
}