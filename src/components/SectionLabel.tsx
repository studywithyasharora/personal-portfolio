import React from 'react';

interface SectionLabelProps {
  children: string;
  reveal?: boolean;
}

/** "/ label ——" marker used at the top of every section for a consistent rhythm */
export function SectionLabel({ children, reveal = false }: SectionLabelProps) {
  return (
    <div {...reveal ? { 'data-reveal': true } : {}} className="flex items-center gap-3">
      <span className="font-mono text-sm text-accent-soft">/ {children}</span>
      <span aria-hidden="true" className="h-px w-16 bg-accent-soft/40" />
    </div>);

}