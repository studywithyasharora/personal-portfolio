import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/content';
import { gsap, MOTION_OK, useGSAP } from '../utils/gsap';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '[data-timeline-progress]',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: listRef.current, start: 'top 70%', end: 'bottom 70%', scrub: true }
          }
        );
        gsap.utils.toArray<HTMLElement>('[data-timeline-item]').forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 24,
            duration: 0.3,
            ease: 'enter',
            scrollTrigger: { trigger: item, start: 'top 85%', once: true }
          });
        });
      });
    },
    { scope: listRef }
  );

  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              id="experience-title"
              label="experience"
              title="Where I’ve shipped."
              description="Six roles across engineering, evaluation and enablement. Each one taught me to build models people can actually use." />
            
            <p data-reveal className="mt-8 font-mono text-sm text-muted">
              {experience.length} roles · 2023 to present
            </p>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-8">
          <span aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-px bg-line" />
          <span
            aria-hidden="true"
            data-timeline-progress
            className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-signal" />
          
          {experience.map((job) =>
          <li key={job.id} data-timeline-item className="relative pb-6 pl-10 last:pb-0">
              <span
              aria-hidden="true"
              className={`absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2 ${
              job.current ? 'border-signal bg-signal' : 'border-line bg-bg'}`
              } />
            
              <motion.article
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="rounded-2xl border border-line bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_24px_48px_-24px_rgba(99,102,241,0.55)] md:p-7">
              
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      <span className="font-medium text-ink/90">{job.company}</span> · {job.location}
                    </p>
                  </div>
                  <p className="flex shrink-0 items-center gap-2 font-mono text-xs text-muted sm:pt-1.5">
                    {job.period}
                    {job.current &&
                  <span className="rounded-full border border-signal/40 px-2 py-0.5 text-[10px] text-signal">
                        Now
                      </span>
                  }
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) =>
                <li key={b.slice(0, 32)} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                      {b}
                    </li>
                )}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
                  {job.tags.map((t) =>
                <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                )}
                </ul>
              </motion.article>
            </li>
          )}
        </ol>
      </div>
    </section>);

}