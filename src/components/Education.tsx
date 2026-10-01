import React from 'react';
import { AwardIcon, GraduationCapIcon } from 'lucide-react';
import { certifications, education } from '../data/content';
import { SectionHeading } from './SectionHeading';

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading id="education-title" label="education" title="Foundations & credentials." />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <article data-reveal className="rounded-3xl border border-line bg-surface p-8 lg:col-span-5">
            <GraduationCapIcon className="h-6 w-6 text-signal" aria-hidden="true" />
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">{education.degree}</h3>
            <p className="mt-2 text-muted">
              <span className="text-ink/90">{education.school}</span> · {education.location}
            </p>
            <p className="mt-1 font-mono text-sm text-muted">
              {education.period} · {education.grade}
            </p>
            <p className="mt-8 text-sm font-medium text-ink">Relevant coursework</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((c) =>
              <li key={c} className="rounded-full border border-line bg-bg px-3 py-1 text-sm text-ink/85">
                  {c}
                </li>
              )}
            </ul>
          </article>

          <div className="lg:col-span-7">
            <h3 data-reveal className="flex items-center gap-2 text-sm font-medium text-ink">
              <AwardIcon className="h-4 w-4 text-signal" aria-hidden="true" />
              Certifications
            </h3>
            <ul data-stagger-group className="mt-4 divide-y divide-line border-y border-line">
              {certifications.map((cert) =>
              <li key={cert.name} data-stagger className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="font-medium text-ink">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                  </div>
                  <span className="shrink-0 font-mono text-sm text-muted">{cert.year}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>);

}