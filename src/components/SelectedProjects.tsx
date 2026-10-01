import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { selectedProjects } from '../data/content';
import { GitHubMark } from './BrandIcons';

export function SelectedProjects() {
  return (
    <div className="mt-20">
      <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          More projects
        </h3>
        <p className="text-sm text-muted">Agents, classical ML, reinforcement learning and embedded builds.</p>
      </div>

      <ul data-stagger-group className="mt-8 grid border-t border-line md:grid-cols-2 md:gap-x-10">
        {selectedProjects.map((p) =>
        <li key={p.id} data-stagger className="border-b border-line">
            <a
            href={p.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${p.title} on GitHub`}
            className="group flex h-full gap-5 py-6 transition-colors duration-150">
            
              <div className="min-w-0 flex-1">
                <p className="font-mono text-xs text-accent-soft">{p.category}</p>
                <h4 className="mt-1.5 font-display text-lg font-semibold text-ink transition-colors duration-150 group-hover:text-signal">
                  {p.title}
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.description}</p>
                <p className="mt-3 font-mono text-xs text-muted">{p.tech.join(' · ')}</p>
              </div>
              <span className="mt-1 flex h-9 shrink-0 items-center gap-1 rounded-full border border-line px-3 text-ink transition-colors duration-150 group-hover:border-signal/60 group-hover:text-signal">
                <GitHubMark className="h-3.5 w-3.5" />
                <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true" />
              
              </span>
            </a>
          </li>
        )}
      </ul>
    </div>);

}