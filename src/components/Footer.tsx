import React from 'react';
import { ArrowUpIcon, MailIcon } from 'lucide-react';
import { siteConfig } from '../data/content';
import { GitHubMark, LinkedInMark } from './BrandIcons';

export function Footer() {
  const socials = [
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: <MailIcon className="h-4 w-4" aria-hidden="true" /> },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: <LinkedInMark /> },
  { label: 'GitHub', href: siteConfig.githubUrl, icon: <GitHubMark /> }];


  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. Built with React, GSAP &amp; Tailwind.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) =>
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith('http') ? '_blank' : undefined}
            rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={s.label}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors duration-150 hover:border-signal/60 hover:text-signal">
            
              {s.icon}
            </a>
          )}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full bg-surface text-ink transition-colors duration-150 hover:text-signal">
            
            <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>);

}