import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, ChevronRightIcon, LockIcon } from 'lucide-react';
import type { Project } from '../types/content';
import { GitHubMark } from './BrandIcons';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div data-stagger className={className}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,box-shadow] duration-200 hover:border-accent/50 hover:shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_30px_60px_-28px_rgba(99,102,241,0.6)]">
        
        <div className="relative h-56 overflow-hidden bg-surface-2 md:h-64">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]" />
          
          <div className="absolute bottom-4 left-4 rounded-xl border border-line bg-bg/85 px-3.5 py-2 backdrop-blur-md">
            <p className="font-display text-xl font-semibold leading-none text-positive">{project.metric.display}</p>
            <p className="mt-1 text-xs text-muted">{project.metric.label}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="flex flex-wrap items-center gap-x-2 font-mono text-xs text-muted">
            <span className="text-accent-soft">{project.category}</span>
            <span aria-hidden="true">·</span>
            {project.year}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-ink/90">{project.highlight}</p>

          {project.pipeline &&
          <ol className="mt-4 flex flex-wrap items-center gap-y-1 font-mono text-xs text-accent-soft" aria-label="Pipeline stages">
              {project.pipeline.map((step, i) =>
            <li key={step} className="flex items-center">
                  {step}
                  {i < project.pipeline!.length - 1 &&
              <ChevronRightIcon className="mx-1 h-3.5 w-3.5 text-muted" aria-hidden="true" />
              }
                </li>
            )}
            </ol>
          }

          <p className="mt-4 text-[15px] leading-relaxed text-muted">{project.summary}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tags.map((tag) =>
            <li key={tag} className="rounded-full border border-line bg-bg px-2.5 py-1 text-xs text-ink/85">
                {tag}
              </li>
            )}
          </ul>

          <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7 text-sm font-medium">
            {project.liveUrl &&
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open the live ${project.title} app on AWS`}
              className="inline-flex items-center gap-2 rounded-full bg-positive px-4 py-2 font-semibold text-bg transition-[transform,box-shadow] duration-150 hover:-translate-y-px hover:shadow-[0_10px_28px_-10px_rgba(52,211,153,0.7)] active:scale-[0.98]">
              
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bg opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-bg" />
                </span>
                Open live app
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            }
            {project.githubUrl ?
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink transition-colors duration-150 hover:text-signal"
              aria-label={`${project.title} on GitHub`}>
              
                <GitHubMark />
                <span className="link-draw">View on GitHub</span>
                <ArrowUpRightIcon
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true" />
              
              </a> :

            <span className="inline-flex items-center gap-2 text-muted">
                <LockIcon className="h-4 w-4" aria-hidden="true" />
                Code available on request
              </span>
            }
            {project.related &&
            <a
              href={project.related.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors duration-150 hover:text-signal"
              aria-label={`Related project: ${project.related.label} on GitHub`}>
              
                <span className="link-draw">Related: {project.related.label}</span>
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            }
          </div>
        </div>
      </motion.article>
    </div>);

}