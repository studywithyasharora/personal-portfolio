import React from 'react';
import { projects } from '../data/content';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';
import { SelectedProjects } from './SelectedProjects';

// Bento spans by position: wide lead card, then a balanced second row.
const spans = [
'md:col-span-2 lg:col-span-4',
'lg:col-span-2',
'lg:col-span-3',
'lg:col-span-3'];


export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          id="projects-title"
          label="projects"
          title="Built. Measured. Shipped."
          description="Every project comes with an evaluation method and a way to run it. No orphaned notebooks." />
        
        <div data-stagger-group className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) =>
          <ProjectCard key={project.id} project={project} className={spans[i] ?? 'lg:col-span-3'} />
          )}
        </div>
        <SelectedProjects />
      </div>
    </section>);

}