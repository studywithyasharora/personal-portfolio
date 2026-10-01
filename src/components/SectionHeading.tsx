import React from 'react';
import { SectionLabel } from './SectionLabel';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeading({ label, title, description, id }: SectionHeadingProps) {
  return (
    <div data-reveal className="max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h2
        id={id}
        className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl">
        
        {title}
      </h2>
      {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>}
    </div>);

}