import React, { useEffect, useRef } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { ShipProcess } from './components/ShipProcess';
import { Skills } from './components/Skills';
import { TechMarquee } from './components/TechMarquee';
import { useRevealAnimations } from './hooks/useRevealAnimations';
import { ScrollTrigger } from './utils/gsap';
import { applySeo } from './utils/seo';

export function App() {
  const mainRef = useRef<HTMLElement>(null);
  useRevealAnimations(mainRef);

  useEffect(() => {
    applySeo();
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => window.removeEventListener('load', refresh);
  }, []);

  return (
    <div className="min-h-screen w-full bg-bg font-sans text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
        
        Skip to content
      </a>
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.035]" />
      <ScrollProgress />
      <Navbar />
      <main id="main" ref={mainRef}>
        <Hero />
        <TechMarquee />
        <About />
        <ShipProcess />
        <Metrics />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>);

}