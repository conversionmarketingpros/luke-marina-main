import React from "react";

type WaveDividerProps = {
  className?: string;
  /** Back, Middle, Front, Bottom wave colors (8-digit hex supported). */
  colors?: [string, string, string, string];
  /** Viewbox height in vh; also constrained by min/max px. */
  heightVh?: number;
  minHeightPx?: number;
  maxHeightPx?: number;
  /** Animation durations (seconds) for back, middle, front, bottom. */
  durations?: [number, number, number, number];
  /** Animation delays (seconds) for back, middle, front, bottom. Use negatives to start offset. */
  delays?: [number, number, number, number];
  /** Mobile height override (px) when <= 768px. */
  mobileHeightPx?: number;
};

export default function WaveDivider({
  className,
  colors = ["#5D5D5D", "#FFFFFF80", "#FFFFFF4D", "#FFFFFF"],
  heightVh = 15,
  minHeightPx = 100,
  maxHeightPx = 150,
  durations = [7, 10, 13, 15],
  delays = [-2, -3, -4, -5],
  mobileHeightPx = 40,
}: WaveDividerProps) {
  const [back, middle, front, bottom] = colors;
  const [dBack, dMid, dFront, dBottom] = durations;
  const [delayBack, delayMid, delayFront, delayBottom] = delays;

  return (
    <div className={`ondebox ${className ?? ""}`}>
      <svg
        className="onde"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        aria-hidden="true"
      >
        <defs>
          <path
            id="onda"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z"
          />
        </defs>

        <g className="parallaxonde">
          {/* 1st wave (back) */}
          <use href="#onda" x="48" y="0" style={{ fill: back }} className="w1" />
          {/* 2nd wave (middle) */}
          <use href="#onda" x="48" y="3" style={{ fill: middle }} className="w2" />
          {/* 3rd wave (front) */}
          <use href="#onda" x="48" y="5" style={{ fill: front }} className="w3" />
          {/* 4th wave (bottom) */}
          <use href="#onda" x="48" y="7" style={{ fill: bottom }} className="w4" />
        </g>
      </svg>

      <style dangerouslySetInnerHTML={{
        __html: `
          .onde {
            position: relative;
            width: 100%;
            height: ${heightVh}vh;
            margin-bottom: -7px;
            min-height: ${minHeightPx}px;
            max-height: ${maxHeightPx}px;
            display: block;
          }

          .parallaxonde > use {
            animation-name: move-forever;
            animation-timing-function: cubic-bezier(.55,.5,.45,.5);
            animation-iteration-count: infinite;
            will-change: transform;
          }
          .parallaxonde > use.w1 {
            animation-delay: ${delayBack}s;
            animation-duration: ${dBack}s;
          }
          .parallaxonde > use.w2 {
            animation-delay: ${delayMid}s;
            animation-duration: ${dMid}s;
          }
          .parallaxonde > use.w3 {
            animation-delay: ${delayFront}s;
            animation-duration: ${dFront}s;
          }
          .parallaxonde > use.w4 {
            animation-delay: ${delayBottom}s;
            animation-duration: ${dBottom}s;
          }

          @keyframes move-forever {
            0% {
              transform: translate3d(-90px, 0, 0);
            }
            100% {
              transform: translate3d(85px, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .parallaxonde > use {
              animation: none !important;
            }
          }

          @media (max-width: 768px) {
            .onde {
              height: ${mobileHeightPx}px;
              min-height: ${mobileHeightPx}px;
            }
          }
        `
      }} />
    </div>
  );
}
