import { RefObject } from 'react';
import { gsap, MOTION_OK, useGSAP } from '../utils/gsap';

/** Total stagger for any group stays under ~300ms so the last item never feels late */
const MAX_STAGGER_TOTAL = 0.3;

/**
 * Page-level scroll animations driven by data attributes:
 *  - [data-reveal]            fade + rise when entering the viewport
 *  - [data-stagger-group]     children with [data-stagger] reveal in sequence
 *  - [data-parallax="40"]     scrubbed vertical parallax (px range)
 */
export function useRevealAnimations(scope: RefObject<HTMLElement>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 18,
            duration: 0.3,
            ease: 'enter',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-stagger-group]').forEach((group) => {
          const items = group.querySelectorAll('[data-stagger]');
          if (!items.length) return;
          gsap.from(items, {
            opacity: 0,
            y: 18,
            duration: 0.3,
            ease: 'enter',
            stagger: Math.min(0.05, MAX_STAGGER_TOTAL / items.length),
            scrollTrigger: { trigger: group, start: 'top 85%', once: true }
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
          const range = Number(el.dataset.parallax) || 40;
          gsap.fromTo(
            el,
            { y: range },
            {
              y: -range,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
            }
          );
        });
      });
    },
    { scope }
  );
}