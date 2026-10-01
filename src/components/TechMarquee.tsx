import React from 'react';
import { marqueeTech } from '../data/content';

export function TechMarquee() {
  const items = [...marqueeTech, ...marqueeTech];

  return (
    <section aria-label="Technologies I work with" className="marquee-mask overflow-hidden border-t border-line py-6">
      <ul className="marquee-track flex w-max items-center">
        {items.map((tech, i) =>
        <li
          key={`${tech}-${i}`}
          aria-hidden={i >= marqueeTech.length ? 'true' : undefined}
          className="flex items-center gap-8 whitespace-nowrap pr-8 font-mono text-sm text-muted">
          
            <span>{tech}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-accent-soft/70" />
          </li>
        )}
      </ul>
    </section>);

}