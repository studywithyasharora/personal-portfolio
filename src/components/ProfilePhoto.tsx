import React from 'react';
import { experience, siteConfig } from '../data/content';

/**
 * Profile photo block.
 * TODO: Replace with actual profile photo — update `siteConfig.profilePhoto` in data/content.ts
 */
export function ProfilePhoto() {
  const current = experience.find((e) => e.current);

  return (
    <figure className="relative mx-auto w-full max-w-[400px]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-black shadow-[0_0_0_1px_rgba(99,102,241,0.18),0_40px_90px_-30px_rgba(99,102,241,0.45)]">
        {/* Profile photo: update siteConfig.profilePhoto in data/content.ts to change it */}
        <img
          src={siteConfig.profilePhoto}
          alt={`Portrait of ${siteConfig.name}`}
          className="h-full w-full scale-[1.12] object-cover object-[50%_18%] [filter:contrast(1.06)_saturate(1.08)_brightness(1.03)]"
          width={1118}
          height={1400} />
        
        {/* Cool indigo grade that ties the photo to the site palette */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-accent/10 mix-blend-soft-light" />
        {/* Hairline inner frame */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/5" />
      </div>
      {current &&
      <figcaption className="absolute -bottom-6 left-4 right-4 rounded-2xl border border-line bg-surface/90 px-4 py-3 backdrop-blur-md sm:-left-8 sm:right-auto">
          <p className="font-mono text-[11px] text-muted">Currently</p>
          <p className="mt-0.5 text-sm font-medium text-ink">
            {current.role} · <span className="text-signal">{current.company}</span>
          </p>
        </figcaption>
      }
    </figure>);

}