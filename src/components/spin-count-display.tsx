"use client";

import { useEffect, useState } from "react";
import { getSpinCount, spinCountEvent } from "@/lib/spin-count";

export function SpinCountDisplay() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => setCount(getSpinCount());
    updateCount();
    window.addEventListener(spinCountEvent, updateCount);
    window.addEventListener("storage", updateCount);
    return () => {
      window.removeEventListener(spinCountEvent, updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return (
    <section aria-live="polite" className="spin-count-display">
      <span className="spin-count-label">TOTAL SPINS</span>
      <strong>{count.toLocaleString()}</strong>
      <span className="spin-count-caption">Spins recorded in this browser</span>
    </section>
  );
}