import React, { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../utils/gsap';

interface RingGaugeProps {
  value: number;
  caption: string;
}

const R = 40;
const C = 2 * Math.PI * R;
const TICKS = 60;

export function RingGauge({ value, caption }: RingGaugeProps) {
  const ref = useRef<HTMLElement>(null);
  const target = C * (1 - value / 100);
  const lit = Math.round(TICKS * value / 100);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const st = { trigger: ref.current, start: 'top 92%', end: 'top 50%', scrub: 0.5 };
        gsap.fromTo('[data-ring]', { strokeDashoffset: C }, { strokeDashoffset: target, ease: 'none', scrollTrigger: st });
        gsap.fromTo(
          '[data-tick-lit]',
          { opacity: 0.1 },
          { opacity: 1, ease: 'none', stagger: 0.02, scrollTrigger: { ...st } }
        );
      });
    },
    { scope: ref }
  );

  return (
    <figure ref={ref} className="flex items-center gap-5">
      <svg viewBox="0 0 120 120" className="h-28 w-28 shrink-0 -rotate-90" aria-hidden="true">
        {Array.from({ length: TICKS }).map((_, i) => {
          const a = i / TICKS * Math.PI * 2;
          const isLit = i < lit;
          return (
            <line
              key={i}
              {...isLit ? { 'data-tick-lit': true } : {}}
              x1={60 + 50 * Math.cos(a)}
              y1={60 + 50 * Math.sin(a)}
              x2={60 + 56 * Math.cos(a)}
              y2={60 + 56 * Math.sin(a)}
              stroke={isLit ? 'rgba(52,211,153,0.55)' : '#27272A'}
              strokeWidth={1.5}
              strokeLinecap="round" />);


        })}
        <circle cx={60} cy={60} r={R} fill="none" stroke="#1C1C21" strokeWidth={7} />
        <circle
          data-ring
          cx={60}
          cy={60}
          r={R}
          fill="none"
          stroke="#34D399"
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={target} />
        
      </svg>
      <figcaption className="text-sm leading-snug text-muted">{caption}</figcaption>
    </figure>);

}