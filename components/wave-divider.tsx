'use client';

import { CSSProperties } from 'react';

type WaveLayer = {
  /** color for the layer (any CSS color) */
  color: string;
  /** opacity for the layer (0–1) */
  opacity?: number;
  /** animation duration in seconds (higher = slower) */
  speed?: number;
  /** drift direction: 'left' or 'right' */
  direction?: 'left' | 'right';
  /** vertical offset in px inside the SVG viewBox (0–80 works well) */
  offsetY?: number;
  /** curve variant for subtle variety (0,1,2 included by default) */
  variant?: 0 | 1 | 2;
};

type AnimatedWaveProps = {
  /** Height of the divider on the page (e.g., '80px', '12vh') */
  height?: string;
  /** Place the wave shape at the bottom (default) or top edge of a section */
  position?: 'bottom' | 'top';
  /** Flip vertically (useful when placing at the top of a section) */
  flipVertical?: boolean;
  /** Stretch behavior; keep 'none' for edge-to-edge adaptive waves */
  preserveAspectRatio?: 'none' | 'xMidYMid slice' | 'xMidYMid meet';
  /** Layers to render (3 good defaults provided) */
  layers?: WaveLayer[];
  /** Optional extra class */
  className?: string;
};

/**
 * Animated Wave Divider
 * - Full-width SVG (viewBox 1440×120).
 * - Each layer is 300% wide and translated for an infinite seamless drift.
 * - Respects prefers-reduced-motion.
 */
export default function AnimatedWave({
  height = '90px',
  position = 'bottom',
  flipVertical = false,
  preserveAspectRatio = 'none',
  className = '',
  layers = [
    { color: '#f8f9fa', opacity: 1.0, speed: 8, direction: 'right', offsetY: 0,  variant: 0 },
    { color: '#f1f3f4', opacity: 0.9, speed: 12, direction: 'right', offsetY: 3,  variant: 1 },
    { color: '#e8eaed', opacity: 0.8, speed: 16, direction: 'right', offsetY: 6,  variant: 2 },
    { color: '#f5f5f5', opacity: 0.7, speed: 20, direction: 'right', offsetY: 9,  variant: 0 },
  ],
}: AnimatedWaveProps) {
  const styleVars: CSSProperties = {
    '--wave-height': height,
  } as CSSProperties;

  // path variants (centerlines) — gentle differences for parallax depth
  const pathD = (variant: 0 | 1 | 2 = 0) => {
    switch (variant) {
      case 1:
        // flowing wave with gentle crests
        return 'M0,60 C200,40 400,80 600,50 C800,20 1000,70 1200,45 C1300,35 1400,55 1440,60';
      case 2:
        // deeper wave with more pronounced curves
        return 'M0,60 C150,30 350,90 550,40 C750,10 950,80 1150,35 C1250,25 1350,65 1440,60';
      default:
        // balanced flowing wave
        return 'M0,60 C250,35 450,85 650,45 C850,15 1050,75 1250,40 C1350,30 1400,60 1440,60';
    }
  };

  return (
    <div
      className={`wave-wrap ${position} ${flipVertical ? 'flip' : ''} ${className}`}
      style={styleVars}
      aria-hidden="true"
    >
      <svg
        className="wave-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio={preserveAspectRatio}
        focusable="false"
      >
        {/* Each layer is 300% width so we can drift without exposing edges */}
        {layers.map((l, i) => {
          const dur = (l.speed ?? 20);
          const dir = (l.direction ?? 'right') === 'right' ? 'drift-right' : 'drift-left';
          const oy  = l.offsetY ?? 0;
          const d   = pathD(l.variant ?? 0);

          return (
            <g
              key={i}
              className={`layer ${dir}`}
              style={{ animationDuration: `${dur}s` } as CSSProperties}
              transform={`translate(-480, ${oy})`} // center the 300% width inside viewBox (1440 * 0.333 = 480)
            >
              {/* We draw the *band* using a closed shape built from the path:
                  the same curve twice with slight vertical separation to make a ribbon. */}
              <path
                d={`${d} L1440,120 L0,120 Z`}
                fill={l.color}
                fillOpacity={l.opacity ?? 1}
              />
              {/* Optional: uncomment below to use stroke-band look instead of filled ribbon */}
              {/* <path d={d} fill="none" stroke={l.color} strokeOpacity={l.opacity ?? 1} strokeWidth={36} /> */}
            </g>
          );
        })}
      </svg>

      <style dangerouslySetInnerHTML={{
        __html: `
          .wave-wrap {
            position: relative;
            width: 100%;
            height: var(--wave-height);
            overflow: hidden;
            line-height: 0;
          }
          .wave-wrap.top { transform: translateY(-1px); }
          .wave-wrap.bottom { transform: translateY(1px); }
          .wave-wrap.flip { transform: scaleY(-1); }

          .wave-svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            display: block;
          }

          .layer {
            transform-box: fill-box;
            transform-origin: 0 60px;
            width: 300%;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-fill-mode: both;
            will-change: transform;
          }

          @keyframes drift-right {
            0% { transform: translate(-480px, var(--oy, 0)) translateY(0px); }
            25% { transform: translate(-360px, var(--oy, 0)) translateY(-2px); }
            50% { transform: translate(-240px, var(--oy, 0)) translateY(0px); }
            75% { transform: translate(-120px, var(--oy, 0)) translateY(2px); }
            100% { transform: translate(0px, var(--oy, 0)) translateY(0px); }
          }
          @keyframes drift-left {
            0% { transform: translate(0px, var(--oy, 0)) translateY(0px); }
            25% { transform: translate(-120px, var(--oy, 0)) translateY(2px); }
            50% { transform: translate(-240px, var(--oy, 0)) translateY(0px); }
            75% { transform: translate(-360px, var(--oy, 0)) translateY(-2px); }
            100% { transform: translate(-480px, var(--oy, 0)) translateY(0px); }
          }

          @media (prefers-reduced-motion: reduce) {
            .layer { animation: none !important; }
          }
        `
      }} />
    </div>
  );
}
