import React, { useRef } from 'react';
import { PlusIcon } from 'lucide-react';
import { gsap, MOTION_OK, useGSAP } from '../../utils/gsap';

interface DotFieldProps {
  count: number;
  columns: number;
  shape: 'dot' | 'square';
  caption: string;
  more?: boolean;
}

/** Unit chart that fills in cell-by-cell as it scrolls through the viewport */
export function DotField({ count, columns, shape, caption, more = false }: DotFieldProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-cell]',
          { opacity: 0.12, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            ease: 'none',
            stagger: { each: 0.02 },
            scrollTrigger: { trigger: ref.current, start: 'top 88%', end: 'bottom 50%', scrub: 0.5 }
          }
        );
      });
    },
    { scope: ref }
  );

  const cell = shape === 'dot' ? 'rounded-full bg-positive' : 'rounded-[5px] bg-positive/90';

  return (
    <figure ref={ref}>
      <div
        aria-hidden="true"
        className={`grid ${shape === 'dot' ? 'gap-1.5' : 'gap-2'}`}
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        
        {Array.from({ length: count }).map((_, i) =>
        <span key={i} data-cell className={`aspect-square ${cell}`} />
        )}
        {more &&
        <span className="grid aspect-square place-items-center rounded-[5px] border border-dashed border-positive/60 text-positive">
            <PlusIcon className="h-3 w-3" />
          </span>
        }
      </div>
      <figcaption className="mt-4 font-mono text-xs text-muted">{caption}</figcaption>
    </figure>);

}