import React, { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../utils/gsap';

interface BarComparisonProps {
  baselineLabel: string;
  resultLabel: string;
  resultValue: number;
  /** grow: both bars fill from zero. shrink: result bar starts full and contracts. */
  mode: 'grow' | 'shrink';
  caption: string;
}

/**
 * Bars are full-width pills translated inside a clipped track, so motion is
 * transform-only and the rounded ends never distort.
 */
export function BarComparison({ baselineLabel, resultLabel, resultValue, mode, caption }: BarComparisonProps) {
  const ref = useRef<HTMLElement>(null);
  const delta = 100 - resultValue;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ref.current, start: 'top 90%', end: 'top 45%', scrub: 0.5 }
        });
        tl.fromTo('[data-bar-base]', { x: 0, xPercent: -100 }, { xPercent: 0, ease: 'none', duration: 1 });
        tl.fromTo(
          '[data-bar-result]',
          { x: 0, xPercent: mode === 'grow' ? -100 : 0 },
          { xPercent: -delta, ease: 'none', duration: 1 },
          mode === 'grow' ? 0.3 : 1
        );
        tl.fromTo('[data-bar-gap]', { opacity: 0 }, { opacity: 1, duration: 0.3 });
        tl.fromTo('[data-bar-delta]', { opacity: 0, x: -6 }, { opacity: 1, x: 0, duration: 0.3 }, '<');
      });
    },
    { scope: ref }
  );

  return (
    <figure ref={ref}>
      <div className="space-y-5">
        <div>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="text-muted">{baselineLabel}</span>
            <span className="font-mono text-xs text-muted">100</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2">
            <div data-bar-base className="h-full w-full rounded-full bg-zinc-500" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-ink">{resultLabel}</span>
            <span className="flex items-center gap-2">
              <span data-bar-delta className="rounded-full bg-positive/10 px-2 py-0.5 font-mono text-[11px] text-positive">
                -{delta}%
              </span>
              <span className="font-mono text-xs text-positive">{resultValue}</span>
            </span>
          </div>
          <div className="relative mt-2 h-2.5 overflow-hidden rounded-full bg-surface-2">
            <div
              data-bar-gap
              aria-hidden="true"
              className="absolute inset-y-0 right-0 rounded-r-full border border-dashed border-positive/50"
              style={{ width: `${delta}%` }} />
            
            <div
              data-bar-result
              className="relative h-full w-full rounded-full bg-positive"
              style={{ transform: `translateX(-${delta}%)` }} />
            
          </div>
        </div>
      </div>
      <figcaption className="mt-4 font-mono text-xs text-muted">{caption}</figcaption>
    </figure>);

}