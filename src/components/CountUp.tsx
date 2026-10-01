import React, { useRef } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../utils/gsap';

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  rangeStart?: number;
  trigger?: 'scroll' | 'load';
  delay?: number;
  className?: string;
}

export function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  rangeStart,
  trigger = 'scroll',
  delay = 0,
  className = ''
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const format = (v: number) => {
    const main = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString('en-US');
    const range = rangeStart !== undefined ? `${Math.round(v / value * rangeStart)}-` : '';
    return `${prefix}${range}${main}${suffix}`;
  };

  const finalText = format(value);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const counter = { v: 0 };
        el.textContent = format(0);
        gsap.to(counter, {
          v: value,
          duration: 1.6,
          delay,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = format(counter.v);
          },
          scrollTrigger:
          trigger === 'scroll' ? { trigger: el, start: 'top 92%', once: true } : undefined
        });
        return () => {
          el.textContent = format(value);
        };
      });
    },
    { dependencies: [value], scope: ref }
  );

  return (
    <span className={`tabular-nums ${className}`}>
      <span className="sr-only">{finalText}</span>
      <span aria-hidden="true" ref={ref}>
        {finalText}
      </span>
    </span>);

}