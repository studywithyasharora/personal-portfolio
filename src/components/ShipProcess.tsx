import React, { useRef } from "react";
import { BoxIcon, CheckIcon, CpuIcon, GaugeIcon, RocketIcon } from "lucide-react";
import { processSteps } from "../data/content";
import { ProcessIcon } from "../types/content";
import { gsap, MOTION_OK, useGSAP } from "../utils/gsap";
import { SectionHeading } from "./SectionHeading";
const icons: Record<ProcessIcon, BoxIcon> = {
  train: CpuIcon,
  evaluate: GaugeIcon,
  container: BoxIcon,
  deploy: RocketIcon
};
export function ShipProcess() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(MOTION_OK, () => {
      // Scroll-scrubbed: the rail draws and each stage lights up in order
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-process-track]',
          start: 'top 78%',
          end: 'bottom 55%',
          scrub: 0.6
        }
      });
      tl.fromTo('[data-process-line-x]', {
        scaleX: 0
      }, {
        scaleX: 1,
        ease: 'none',
        duration: 4
      }, 0).fromTo('[data-process-line-y]', {
        scaleY: 0
      }, {
        scaleY: 1,
        ease: 'none',
        duration: 4
      }, 0);
      gsap.utils.toArray<HTMLElement>('[data-process-step]').forEach((step, i) => {
        tl.from(step.querySelector('[data-process-node]'), {
          scale: 0.6,
          opacity: 0,
          duration: 0.5
        }, i).from(step.querySelectorAll('[data-process-copy]'), {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.1
        }, i + 0.1);
      });
    });
  }, {
    scope: ref
  });
  return <section id="process" ref={ref} aria-labelledby="process-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading id="process-title" label="process" title="Notebooks don’t ship. Pipelines do." description="Train, evaluate, containerize, deploy. The same loop runs through every project I build, and each stage below is backed by something already live." />

        <ol data-process-track className="relative mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Desktop rail */}
          <span aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-line lg:block" />
          <span aria-hidden="true" data-process-line-x className="absolute left-6 right-6 top-6 hidden h-px origin-left bg-signal lg:block" />
          <span aria-hidden="true" className="absolute left-6 right-6 top-[21px] hidden h-[7px] overflow-hidden lg:block">
            <span className="process-packet relative block h-full w-full">
              <span className="absolute left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-white" />
            </span>
          </span>

          {/* Mobile rail */}
          <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-line lg:hidden" />
          <span aria-hidden="true" data-process-line-y className="absolute bottom-6 left-6 top-6 w-px origin-top bg-signal lg:hidden" />

          {processSteps.map((step) => {
          const Icon = icons[step.icon];
          return <li key={step.id} data-process-step className="relative pl-20 lg:pl-0">
                <span data-process-node className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl border border-signal/50 bg-bg text-signal lg:relative">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 data-process-copy className="font-display text-2xl font-semibold tracking-tight text-ink lg:mt-7">
                  {step.title}
                </h3>
                <p data-process-copy className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.body}
                </p>
                <p data-process-copy className="mt-5 inline-flex items-start gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs leading-snug text-positive">
                  <CheckIcon className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {step.proof}
                </p>
              </li>;
        })}
        </ol>
      </div>
    </section>;
}