"use client";

import { useEffect, useRef, useState } from "react";
import { PartyPopper, Ticket, TicketCheck } from "lucide-react";

export function LotteryTool({ names }: { names: string[] }) {
  const [winner, setWinner] = useState("");
  const [preview, setPreview] = useState("");
  const [drawing, setDrawing] = useState(false);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (interval.current) clearInterval(interval.current);
    if (timeout.current) clearTimeout(timeout.current);
  }, []);

  function drawWinner() {
    if (drawing || names.length < 2) return;
    setWinner("");
    setDrawing(true);
    interval.current = setInterval(() => {
      setPreview(names[Math.floor(Math.random() * names.length)]);
    }, 90);
    timeout.current = setTimeout(() => {
      if (interval.current) clearInterval(interval.current);
      const picked = names[Math.floor(Math.random() * names.length)];
      setPreview(picked);
      setWinner(picked);
      setDrawing(false);
    }, 1300);
  }

  return (
    <section className="mode-stage lottery-stage" aria-labelledby="lottery-title">
      <div className="wheel-heading">
        <div><span className="eyebrow"><Ticket size={14} /> LOTTERY DRAW</span><h2 id="lottery-title">And the winner is...</h2></div>
        <span className="entry-total">{names.length} entries</span>
      </div>
     
      <div className={`ticket-display${drawing ? " is-drawing" : ""}${winner ? " has-result" : ""}`} aria-live="polite" aria-atomic="true">
        <span className="ticket-icon">{winner ? <TicketCheck size={32} /> : <Ticket size={32} />}</span>
        <span className="ticket-caption">{drawing ? "DRAWING A NAME" : winner ? "CONGRATULATIONS TO" : "THE LUCKY NAME"}</span>
        <strong>{drawing ? preview || "Drawing..." : winner || "?"}</strong>
        {winner && <span className="winner-confetti"><PartyPopper size={17} /> Winner picked</span>}
      </div>
      <button className="primary-button" disabled={names.length < 2 || drawing} onClick={drawWinner} type="button">
        <Ticket size={18} /> {drawing ? "Drawing..." : winner ? "Draw another winner" : "Draw a winner"}
      </button>
      {names.length < 2 && <p className="inline-hint">Add at least two names to draw a winner.</p>}
    </section>
  );
}