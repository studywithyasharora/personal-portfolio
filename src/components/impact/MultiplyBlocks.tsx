import React, { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../../utils/gsap';

interface MultiplyBlocksProps {
  factor: number;
  caption: string;
}

export function MultiplyBlocks({ factor, caption }: MultiplyBlocksProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-seg]',
          { scaleY: 0, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            ease: 'none',
            stagger: 0.4,
            scrollTrigger: { trigger: ref.current, start: 'top 92%', end: 'top 50%', scrub: 0.5 }
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <figure ref={ref}>
      <div aria-hidden="true" className="flex items-end gap-4">
        <div className="flex w-16 flex-col items-center gap-2">
          <div className="flex w-full flex-col-reverse gap-1">
            <span className="h-6 rounded-md bg-zinc-600" />
          </div>
          <span className="font-mono text-[11px] text-muted">1×</span>
        </div>
        <div className="flex w-16 flex-col items-center gap-2">
          <div className="flex w-full flex-col-reverse gap-1">
            {Array.from({ length: factor }).map((_, i) =>
            <span key={i} data-seg className="h-6 origin-bottom rounded-md bg-positive" />
            )}
          </div>
          <span className="font-mono text-[11px] text-positive">{factor}×</span>
        </div>
      </div>
      <figcaption className="mt-4 font-mono text-xs text-muted">{caption}</figcaption>
    </figure>);

}