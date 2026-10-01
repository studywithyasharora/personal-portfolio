import React, { useRef } from 'react';
import { ArrowDownRightIcon, DownloadIcon } from 'lucide-react';
import { heroRoles, heroStats, siteConfig } from '../data/content';
import { gsap, MOTION_OK, useGSAP } from '../utils/gsap';
import { ButtonLink } from './ButtonLink';
import { CountUp } from './CountUp';
import { NeuralField } from './NeuralField';
import { ProfilePhoto } from './ProfilePhoto';
import { RotatingRole } from './RotatingRole';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const words = siteConfig.name.split(' ');

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        const tl = gsap.timeline({ defaults: { ease: 'enter' } });
        tl.from('[data-letter]', { yPercent: 110, duration: 0.3, stagger: 0.035 }).
        from('[data-hero-photo]', { opacity: 0, scale: 0.96, duration: 0.3 }, 0.15).
        from('[data-hero-fade]', { opacity: 0, y: 14, duration: 0.3, stagger: 0.06 }, '-=0.15');

        gsap.to('[data-hero-float]', {
          y: -10,
          duration: 3.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });

        const scrub = {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        };
        gsap.to('[data-hero-grid]', { yPercent: 18, ease: 'none', scrollTrigger: scrub });
        gsap.to('[data-hero-photo-parallax]', { y: -70, ease: 'none', scrollTrigger: scrub });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="top"
      ref={sectionRef}
      aria-labelledby="hero-name"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28">
      
      <div data-hero-grid aria-hidden="true" className="hero-grid absolute inset-x-0 -top-24 bottom-0" />
      <NeuralField />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-7">
          <p data-hero-fade className="flex items-center gap-2.5 text-sm text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
            </span>
            Open to ML Engineer &amp; AI Consultant roles · {siteConfig.location}
          </p>

          <h1
            id="hero-name"
            aria-label={siteConfig.name}
            className="mt-6 font-display text-[clamp(3.75rem,10vw,8rem)] font-bold leading-[0.88] tracking-[-0.045em] text-ink">
            
            {words.map((word, wi) =>
            <span key={word} aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
                {word.split('').map((letter, li) =>
              <span key={`${letter}-${li}`} data-letter className="inline-block">
                    {letter}
                  </span>
              )}
                {wi === words.length - 1 &&
              <span data-letter className="inline-block text-signal">
                    .
                  </span>
              }
              </span>
            )}
          </h1>

          <p data-hero-fade className="mt-7 font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
            <RotatingRole roles={heroRoles} />
          </p>
          <p data-hero-fade className="mt-3 max-w-xl text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>

          <dl data-hero-fade className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-4">
            {heroStats.map((stat) =>
            <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-muted">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {stat.text ??
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  rangeStart={stat.rangeStart}
                  trigger="load"
                  delay={0.5} />

                }
                </dd>
              </div>
            )}
          </dl>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" icon={<ArrowDownRightIcon className="h-4 w-4" aria-hidden="true" />}>
              View Projects
            </ButtonLink>
            <ButtonLink
              href={siteConfig.resumeUrl}
              external
              variant="secondary"
              icon={<DownloadIcon className="h-4 w-4" aria-hidden="true" />}>
              
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div data-hero-photo-parallax>
            <div data-hero-photo>
              <div data-hero-float>
                <ProfilePhoto />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}