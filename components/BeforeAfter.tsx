'use client';

import React, { useRef, useState, useEffect, CSSProperties } from 'react';
import Image from 'next/image';

type Orientation = 'horizontal' | 'vertical';

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  /** 0..1 initial position (0 = before fully shown for horizontal, top for vertical) */
  initialPosition?: number;
  /** If set, we keep a fixed aspect ratio (e.g. 16/9). Otherwise height flows. */
  aspectRatio?: number;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  height?: CSSProperties['height'];
  /** 'horizontal' (default) shows a vertical divider; 'vertical' shows a horizontal divider */
  orientation?: Orientation;
};

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  initialPosition = 0.5,
  aspectRatio,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  height,
  orientation = 'horizontal',
}: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const beforeLabelRef = useRef<HTMLSpanElement | null>(null);
  const afterLabelRef = useRef<HTMLSpanElement | null>(null);
  const [pos, setPos] = useState(clamp01(initialPosition)); // 0..1
  const [dragging, setDragging] = useState(false);

  // Pointer helpers
  function pointerToRatio(clientX: number, clientY: number) {
    const el = ref.current;
    if (!el) return pos;
    const r = el.getBoundingClientRect();
    if (orientation === 'horizontal') {
      return clamp01((clientX - r.left) / r.width);
    } else {
      return clamp01((clientY - r.top) / r.height);
    }
  }

  function onPointerDown(e: React.PointerEvent) {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setPos(pointerToRatio(e.clientX, e.clientY));
  }
  function onPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setPos(pointerToRatio(e.clientX, e.clientY));
  }
  function onPointerUp(e: React.PointerEvent) {
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    setDragging(false);
  }

  // Touch (older iOS) – Pointer usually covers this, but harmless to keep
  function onTouchStart(e: React.TouchEvent) {
    setDragging(true);
    const t = e.touches[0];
    setPos(pointerToRatio(t.clientX, t.clientY));
  }
  function onTouchMove(e: React.TouchEvent) {
    if (!dragging) return;
    const t = e.touches[0];
    setPos(pointerToRatio(t.clientX, t.clientY));
  }
  function onTouchEnd() { setDragging(false); }

  // Keyboard accessibility
  function onKeyDown(e: React.KeyboardEvent) {
    const small = 0.02, large = 0.1;
    const decKeys = orientation === 'horizontal' ? ['ArrowLeft'] : ['ArrowUp'];
    const incKeys = orientation === 'horizontal' ? ['ArrowRight'] : ['ArrowDown'];

    if (decKeys.includes(e.key)) { e.preventDefault(); setPos(p => clamp01(p - small)); }
    else if (incKeys.includes(e.key)) { e.preventDefault(); setPos(p => clamp01(p + small)); }
    else if (e.key === 'PageDown') { e.preventDefault(); setPos(p => clamp01(p - large)); }
    else if (e.key === 'PageUp')   { e.preventDefault(); setPos(p => clamp01(p + large)); }
    else if (e.key === 'Home')     { e.preventDefault(); setPos(0); }
    else if (e.key === 'End')      { e.preventDefault(); setPos(1); }
  }

  // CSS vars
  const styleVars: CSSProperties = {
    '--pos': `${pos * 100}%`,
    '--x': `${pos * 100}%`,
    '--y': `${pos * 100}%`,
    '--divider-color': 'rgba(255,255,255,.95)',
    '--handle-color': '#709392',
    '--divider-shadow': 'rgba(0,0,0,.45)',
    '--label-bg': 'rgba(0,0,0,.55)',
    '--label-fg': '#fff',
    height,
    aspectRatio: aspectRatio ? String(aspectRatio) : undefined,
  } as CSSProperties;

  const ariaValueText =
    orientation === 'horizontal'
      ? `${Math.round(pos * 100)}% before shown (left side)`
      : `${Math.round(pos * 100)}% before shown (top side)`;

  // Label visibility based on actual overlap with the divider.
  // As soon as the divider reaches a label's box, hide that label entirely.
  function getLabelVisibility() {
    const container = ref.current;
    if (!container) {
      return {
        showBefore: !!beforeLabel && pos > 0.05,
        showAfter: !!afterLabel && pos < 0.95,
      };
    }
    const cr = container.getBoundingClientRect();
    const epsilonPx = 4; // small cushion to prevent flicker while crossing

    let showBefore = false;
    let showAfter = false;

    if (orientation === 'horizontal') {
      const beforeEl = beforeLabelRef.current;
      const afterEl = afterLabelRef.current;
      const dividerX = cr.left + cr.width * pos;

      if (beforeEl && beforeLabel) {
        const br = beforeEl.getBoundingClientRect();
        const beforeRight = br.right;
        showBefore = dividerX > beforeRight + epsilonPx;
      }
      if (afterEl && afterLabel) {
        const ar = afterEl.getBoundingClientRect();
        const afterLeft = ar.left;
        showAfter = dividerX < afterLeft - epsilonPx;
      }
    } else {
      const beforeEl = beforeLabelRef.current;
      const afterEl = afterLabelRef.current;
      const dividerY = cr.top + cr.height * pos;

      if (beforeEl && beforeLabel) {
        const br = beforeEl.getBoundingClientRect();
        const beforeBottom = br.bottom;
        showBefore = dividerY > beforeBottom + epsilonPx;
      }
      if (afterEl && afterLabel) {
        const ar = afterEl.getBoundingClientRect();
        const afterTop = ar.top;
        showAfter = dividerY < afterTop - epsilonPx;
      }
    }

    return { showBefore, showAfter };
  }
  const { showBefore: showBeforeLabel, showAfter: showAfterLabel } = getLabelVisibility();

  return (
    <div
      ref={ref}
      className={`ba ${className} ${orientation}`}
      style={styleVars}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* AFTER base */}
      <div className="img after">
        <Image 
          src={afterSrc} 
          alt={afterAlt} 
          fill
          className="object-cover"
          draggable={false}
          quality={85}
          priority={false}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* BEFORE overlay (clip by width or height) */}
      <div className="before-clip">
        <div className="img before">
          <Image 
            src={beforeSrc} 
            alt={beforeAlt} 
            fill
            className="object-cover"
            draggable={false}
            quality={85}
            priority={false}
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      {/* Divider + Handle */}
      <div className="divider" aria-hidden="true" />
      <button
        className="handle"
        type="button"
        role="slider"
        aria-label="Comparison slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos * 100)}
        aria-valuetext={ariaValueText}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {/* arrows change based on orientation */}
        {orientation === 'horizontal' ? (
          <div className="flex items-center justify-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        )}
      </button>

      {/* Labels */}
      {beforeLabel && (
        <span ref={beforeLabelRef} className="label label-before" aria-hidden={!showBeforeLabel} style={{ visibility: showBeforeLabel ? 'visible' : 'hidden' }}>
          {beforeLabel}
        </span>
      )}
      {afterLabel && (
        <span ref={afterLabelRef} className="label label-after" aria-hidden={!showAfterLabel} style={{ visibility: showAfterLabel ? 'visible' : 'hidden' }}>
          {afterLabel}
        </span>
      )}

      <style jsx>{`
        .ba{
          position: relative;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
          user-select: none;
          touch-action: none;
          background: #000;
        }
        .img{ position: relative; display:block; width:100%; height:100%; pointer-events:none; }
        .after{ position: relative; z-index: 1; }

        /* Overlay clipping logic */
        .before-clip{
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
        }
        /* Horizontal: reveal by WIDTH from left */
        .horizontal .before-clip{ clip-path: inset(0 calc(100% - var(--pos)) 0 0); }
        /* Vertical: reveal by HEIGHT from top */
        .vertical .before-clip{ clip-path: inset(0 0 calc(100% - var(--pos)) 0); }

        /* Divider */
        .divider{
          position: absolute;
          z-index: 3;
          background: #ffffff;
          pointer-events: none;
        }
        /* Horizontal divider is vertical line */
        .horizontal .divider{
          top: 0; bottom: 0; left: var(--x); width: 1px; transform: translateX(-0.5px);
        }
        /* Vertical divider is horizontal line */
        .vertical .divider{
          left: 0; right: 0; top: var(--y); height: 1px; transform: translateY(-0.5px);
        }

        /* Handle */
        .handle{
          position: absolute;
          z-index: 4;
          background: #709392;
          color: #ffffff;
          border: 2px solid #ffffff;
          border-radius: 50%;
          width: 44px; height: 44px;
          display: flex; 
          align-items: center; 
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          cursor: ew-resize;
          transform: translate(-50%, -50%);
          top: 50%; left: var(--x);
        }
        .vertical .handle{
          cursor: ns-resize;
          left: 50%; top: var(--y);
          transform: translate(-50%, -50%);
        }
        .handle:focus-visible{
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Labels */
        .label{
          position: absolute;
          padding: 6px 10px;
          font-size: 12px;
          letter-spacing: .02em;
          border-radius: 8px;
          background: var(--label-bg);
          color: var(--label-fg);
          z-index: 5;
          pointer-events: none;
        }
        /* Horizontal placement */
        .horizontal .label-before{ top: 12px; left: 12px; }
        .horizontal .label-after{  top: 12px; right: 12px; }
        /* Vertical placement */
        .vertical .label-before{ top: 12px; left: 12px; }
        .vertical .label-after{  bottom: 12px; right: 12px; }
      `}</style>
    </div>
  );
}

function clamp01(n: number){ return Math.min(1, Math.max(0, n)); }
