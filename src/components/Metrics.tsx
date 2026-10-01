import React from 'react';
import { metrics } from '../data/content';
import { MetricCell } from './impact/MetricCell';
import { SectionHeading } from './SectionHeading';

// Bento spans by position: two headline metrics, then two rows of three.
const spans = [
'md:col-span-2 lg:col-span-7',
'md:col-span-2 lg:col-span-5',
'lg:col-span-4',
'lg:col-span-4',
'lg:col-span-4',
'lg:col-span-4',
'lg:col-span-4',
'lg:col-span-4'];


export function Metrics() {
  return (
    <section id="impact" aria-labelledby="impact-title" className="border-t border-line bg-bg-raised py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="impact-title"
          label="impact"
          title="Receipts, not adjectives."
          description="Every number here was measured on held-out test sets, in production or in programme records. Nothing is inflated for effect." />
        

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-2 lg:grid-cols-12">
          {metrics.map((m, i) =>
          <MetricCell key={m.label} metric={m} large={i < 2} className={spans[i] ?? 'lg:col-span-4'} />
          )}
        </div>
      </div>
    </section>);

}