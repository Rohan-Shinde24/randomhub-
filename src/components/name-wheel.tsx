"use client";

import { useEffect, useRef, useState, type CSSProperties, type TransitionEvent } from "react";
import { RotateCcw, Sparkles } from "lucide-react";
import { recordSpin } from "@/lib/spin-count";

const palette = ["#ee714f", "#f1b646", "#66a687", "#7197c5", "#dc8ba0", "#a18bb9", "#ed9867", "#83a978"];
const wheelCenter = 175;
const minimumFontSize = 7;

type WheelLabel = { displayName: string; fontSize: number };

function baseFontSize(name: string, count: number) {
  const lengthSize = name.length <= 5 ? 18 : name.length <= 10 ? 15 : 12;
  if (count <= 6) return lengthSize;
  if (count <= 12) return Math.min(lengthSize, 15);
  if (count <= 24) return Math.min(lengthSize, 12);
  return Math.min(lengthSize, 10);
}

function labelRadius(count: number) {
  const radiusRatio = count <= 6 ? 0.59 : count <= 12 ? 0.68 : count <= 24 ? 0.75 : 0.8;
  return wheelCenter * radiusRatio;
}

function measureLabels(names: string[], fontFamily: string, context: CanvasRenderingContext2D): WheelLabel[] {
  const radius = labelRadius(names.length);
  const segmentWidth = 2 * radius * Math.sin(Math.PI / names.length);

  return names.map((name) => {
    let fontSize = baseFontSize(name, names.length);
    let availableWidth = Math.max(0, segmentWidth - fontSize * 1.8 - 4);
    context.font = `700 ${fontSize}px ${fontFamily}`;

    while (fontSize > minimumFontSize && context.measureText(name).width > availableWidth) {
      fontSize = Math.max(minimumFontSize, fontSize - 1);
      availableWidth = Math.max(0, segmentWidth - fontSize * 1.8 - 4);
      context.font = `700 ${fontSize}px ${fontFamily}`;
    }

    let displayName = name;
    if (context.measureText(displayName).width > availableWidth) {
      const ellipsis = "...";
      let end = name.length;
      while (end > 0 && context.measureText(`${name.slice(0, end)}${ellipsis}`).width > availableWidth) end -= 1;
      displayName = end > 0 ? `${name.slice(0, end)}${ellipsis}` : "...";
    }

    return { displayName, fontSize };
  });
}

export function NameWheel({
  names,
  speed,
  reverse,
}: {
  names: string[];
  speed: number;
  reverse: boolean;
}) {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState("");
  const [labelLayouts, setLabelLayouts] = useState<WheelLabel[]>([]);
  const labelsRef = useRef<SVGSVGElement>(null);
  const rotationRef = useRef(0);
  const pendingWinner = useRef("");
  const slices = names.map((name, index) =>
    `${palette[index % palette.length]} ${index * 360 / names.length}deg ${(index + 1) * 360 / names.length}deg`,
  );
  const wheelStyle = {
    "--wheel-turn": `${rotation}deg`,
    "--wheel-speed": `${speed}s`,
    background: `conic-gradient(${slices.join(",")})`,
  } as CSSProperties;

  useEffect(() => {
    const context = document.createElement("canvas").getContext("2d");
    const svg = labelsRef.current;
    if (!context || !svg || names.length === 0) {
      setLabelLayouts([]);
      return;
    }
    setLabelLayouts(measureLabels(names, getComputedStyle(svg).fontFamily, context));
  }, [names]);

  function spin() {
    if (spinning || names.length < 2) return;
    recordSpin();
    const index = Math.floor(Math.random() * names.length);
    const centerAngle = (index + 0.5) * 360 / names.length;
    const currentAngle = ((rotationRef.current % 360) + 360) % 360;
    const alignment = ((360 - centerAngle - currentAngle) % 360 + 360) % 360;
    const delta = reverse ? alignment - 360 : alignment;
    pendingWinner.current = names[index];
    setWinner("");
    setSpinning(true);
    rotationRef.current += (reverse ? -1 : 1) * 1800 + delta;
    setRotation(rotationRef.current);
  }

  function finishSpin(event: TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== "transform" || !spinning) return;
    setWinner(pendingWinner.current);
    setSpinning(false);
  }

  return (
    <section className="wheel-stage" aria-label="Random name spin wheel">
      <div className="wheel-heading">
        <div>
          <span className="eyebrow"><Sparkles size={10} /> SPIN THE WHEEL</span>
        </div>
        <span className="entry-total">{names.length} entries</span>
      </div>
      <div className="wheel-area">
        <span className="wheel-pin" aria-hidden="true" />
        <div
          className={`name-wheel${spinning ? " is-spinning" : ""}`}
          onTransitionEnd={finishSpin}
          style={wheelStyle}
        >
          <svg aria-hidden="true" className="wheel-labels" ref={labelsRef} viewBox="0 0 350 350">
            {labelLayouts.map(({ displayName, fontSize }, index) => {
              const segmentAngle = 360 / names.length;
              const middleAngle = (index + 0.5) * segmentAngle;
              const radius = labelRadius(names.length);
              const x = wheelCenter;
              const y = wheelCenter - radius;
              return (
                <text
                  className="wheel-label-text"
                  fontSize={fontSize}
                  key={`${index}-${names[index]}`}
                  transform={`rotate(${middleAngle}, ${wheelCenter}, ${wheelCenter})`}
                  x={x}
                  y={y}
                >
                  <title>{names[index]}</title>
                  {displayName}
                </text>
              );
            })}
          </svg>
          <button
            aria-label={spinning ? "Wheel is spinning" : "Spin the wheel"}
            className="wheel-hub"
            disabled={names.length < 2 || spinning}
            onClick={spin}
            type="button"
          >
            {spinning ? <span className="hub-dots">...</span> : <><RotateCcw size={21} /><span>SPIN</span></>}
          </button>
        </div>
      </div>
      <div className="result-bar" aria-live="polite" aria-atomic="true">
        <span className="result-caption">{spinning ? "THE WHEEL IS DECIDING" : winner ? "THE PICK IS IN" : "YOUR NEXT WINNER"}</span>
        <span className={`result-name${winner ? " has-winner" : ""}`}>{spinning ? "Spinning..." : winner || "Ready when you are"}</span>
      </div>
      <button className="primary-button spin-action" disabled={names.length < 2 || spinning} onClick={spin} type="button">
        <RotateCcw size={17} /> {spinning ? "Spinning..." : "Spin the wheel"}
      </button>
      {names.length < 2 && <p className="inline-hint">Add at least two names to spin.</p>}
    </section>
  );
}