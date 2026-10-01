import React from 'react';
import { MapPinIcon } from 'lucide-react';
import { about, siteConfig } from '../data/content';
import { SectionLabel } from './SectionLabel';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-7">
          <SectionLabel reveal>about</SectionLabel>
          <div data-parallax="24">
            <h2
              id="about-title"
              data-reveal
              className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl">
              
              {about.heading}
            </h2>
          </div>
          <div className="mt-10 max-w-2xl space-y-6">
            {about.paragraphs.map((p) =>
            <p key={p.slice(0, 24)} data-reveal className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            )}
          </div>
          <p data-reveal className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
            <MapPinIcon className="h-4 w-4 text-signal" aria-hidden="true" />
            <span className="text-ink">{siteConfig.location}</span>
            <span aria-hidden="true">·</span>
            Open to {siteConfig.openTo.join(', ')}
          </p>
        </div>

        <div className="lg:col-span-5 lg:pt-12">
          <ul data-stagger-group className="divide-y divide-line border-y border-line">
            {about.traits.map((trait, i) =>
            <li key={trait.title} data-stagger className="grid grid-cols-[2.5rem_1fr] py-7">
                <span className="font-mono text-sm text-accent-soft" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{trait.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{trait.body}</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}