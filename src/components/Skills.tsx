import React from "react";
import { BrainCircuitIcon, CloudIcon, CodeIcon, ServerIcon, SparklesIcon, BoxIcon } from "lucide-react";
import { skills } from "../data/content";
import { SkillIcon } from "../types/content";
import { SectionHeading } from "./SectionHeading";
const icons: Record<SkillIcon, BoxIcon> = {
  brain: BrainCircuitIcon,
  sparkles: SparklesIcon,
  cloud: CloudIcon,
  server: ServerIcon,
  code: CodeIcon
};
export function Skills() {
  return <section id="skills" aria-labelledby="skills-title" className="border-t border-line bg-bg-raised py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading id="skills-title" label="skills" title="The toolkit." description="What I reach for from first experiment to production endpoint." />
        <div data-stagger-group className="mt-14 border-t border-line">
          {skills.map((cat) => {
          const Icon = icons[cat.icon];
          return <div key={cat.name} data-stagger className="grid gap-5 border-b border-line py-8 md:grid-cols-12 md:gap-10">
                <div className="flex items-start gap-4 md:col-span-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-signal">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{cat.name}</h3>
                    <p className="mt-1 text-sm text-muted">{cat.note}</p>
                  </div>
                </div>
                <ul className="flex flex-wrap content-start gap-2 md:col-span-8" aria-label={cat.name}>
                  {cat.items.map((item) => <li key={item} className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink/90">
                      {item}
                    </li>)}
                </ul>
              </div>;
        })}
        </div>
      </div>
    </section>;
}