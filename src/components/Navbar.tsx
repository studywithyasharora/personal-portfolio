import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRightIcon, MenuIcon, XIcon } from 'lucide-react';
import { navLinks, siteConfig } from '../data/content';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionIds = navLinks.map((l) => l.id);
const ease = [0.23, 1, 0.32, 1] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 sm:px-4">
      <nav
        aria-label="Primary"
        className={`mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between rounded-full border pl-3 pr-2 transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        solid ?
        'border-line bg-bg/75 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md' :
        'border-transparent'}`
        }>
        
        <a href="#top" className="flex items-center gap-3" aria-label={`${siteConfig.name}, back to top`}>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface font-mono text-[11px] font-medium text-ink">
            {siteConfig.initials}
          </span>
          <span className="hidden font-display text-sm font-semibold text-ink sm:inline">{siteConfig.name}</span>
        </a>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id} className="relative">
                {isActive &&
                <motion.span
                  layoutId="nav-active"
                  transition={{ duration: 0.25, ease }}
                  className="absolute inset-0 rounded-full bg-surface-2" />

                }
                <a
                  href={`#${link.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative block rounded-full px-3.5 py-2 text-sm transition-colors duration-150 ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'}`
                  }>
                  
                  {link.label}
                </a>
              </li>);

          })}
        </ul>

        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg transition-transform duration-150 hover:-translate-y-px md:inline-flex">
          
          Resume
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink md:hidden">
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.2, ease }}
          className="mx-auto mt-2 max-w-6xl origin-top rounded-3xl border border-line bg-bg/95 p-4 backdrop-blur-md md:hidden">
          
            <ul className="flex flex-col">
              {navLinks.map((link) =>
            <li key={link.id}>
                  <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base ${active === link.id ? 'bg-surface text-ink' : 'text-ink/90'}`}>
                
                    {link.label}
                  </a>
                </li>
            )}
            </ul>
            <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-bg">
            
              Download resume
              <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}