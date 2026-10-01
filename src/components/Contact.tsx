import React, { useState } from 'react';
import { CheckIcon, CopyIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { contact, siteConfig } from '../data/content';
import { GitHubMark, LinkedInMark } from './BrandIcons';
import { ContactForm } from './ContactForm';
import { SectionLabel } from './SectionLabel';

export function Contact() {
  const [copied, setCopied] = useState<'idle' | 'copied' | 'error'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied('copied');
    } catch {
      setCopied('error');
    }
    window.setTimeout(() => setCopied('idle'), 2000);
  };

  const links = [
  { label: 'LinkedIn', value: siteConfig.linkedinLabel, href: siteConfig.linkedinUrl, icon: <LinkedInMark /> },
  { label: 'GitHub', value: siteConfig.githubLabel, href: siteConfig.githubUrl, icon: <GitHubMark /> },
  {
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
    icon: <PhoneIcon className="h-4 w-4" aria-hidden="true" />
  }];


  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-6">
          <SectionLabel reveal>contact</SectionLabel>
          <h2
            id="contact-title"
            data-reveal
            className="mt-5 font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-7xl">
            
            {contact.heading}
          </h2>
          <p data-reveal className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {contact.body}
          </p>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bg transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(34,211,238,0.6)]">
              
              <MailIcon className="h-4 w-4" aria-hidden="true" />
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-medium text-ink transition-colors duration-150 hover:border-signal/60 hover:text-signal">
              
              {copied === 'copied' ?
              <CheckIcon className="h-4 w-4 text-positive" aria-hidden="true" /> :

              <CopyIcon className="h-4 w-4" aria-hidden="true" />
              }
              <span aria-live="polite">
                {copied === 'copied' ? 'Copied' : copied === 'error' ? 'Copy failed' : 'Copy email'}
              </span>
            </button>
          </div>

          <ul data-stagger-group className="mt-12 divide-y divide-line border-y border-line">
            {links.map((l) =>
            <li key={l.label} data-stagger>
                <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between gap-4 py-4 text-ink transition-colors duration-150 hover:text-signal">
                
                  <span className="flex items-center gap-3 text-sm font-medium">
                    {l.icon}
                    {l.label}
                  </span>
                  <span className="link-draw truncate text-sm text-muted group-hover:text-signal">{l.value}</span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div data-reveal className="lg:col-span-6 lg:pt-8">
          <ContactForm />
        </div>
      </div>
    </section>);

}