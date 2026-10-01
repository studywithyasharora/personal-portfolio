import React, { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckCircle2Icon, Loader2Icon, SendIcon } from 'lucide-react';
import { siteConfig } from '../data/content';

type Status = 'idle' | 'submitting' | 'sent' | 'mailto' | 'error';
type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

const inputClass =
'mt-2 w-full rounded-xl border bg-bg px-4 py-3 text-ink placeholder:text-zinc-500 transition-[border-color] duration-150 focus:border-signal focus:outline-none';

const empty = { name: '', email: '', message: '', botcheck: '' };

export function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): Errors => {
    const e: Errors = {};
    if (!values.name.trim()) e.name = 'Please add your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Please enter a valid email.';
    if (values.message.trim().length < 10) e.message = 'A sentence or two helps me reply well.';
    return e;
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus('mailto');
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    if (values.botcheck) return; // honeypot filled: silently drop spam

    if (!siteConfig.web3formsKey) {
      openMailto();
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `Portfolio enquiry from ${values.name}`,
          from_name: 'Portfolio contact form',
          name: values.name,
          email: values.email,
          message: values.message
        })
      });
      const data: {success?: boolean;} = await res.json();
      if (!res.ok || !data.success) throw new Error('Send failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle');
    setValues(empty);
  };

  const field = (key: 'name' | 'email' | 'message') => ({
    id: `contact-${key}`,
    name: key,
    value: values[key],
    'aria-invalid': Boolean(errors[key]),
    'aria-describedby': errors[key] ? `contact-${key}-error` : undefined,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value })),
    className: `${inputClass} ${errors[key] ? 'border-red-400' : 'border-line'}`
  });

  const done = status === 'sent' || status === 'mailto';

  return (
    <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
      <AnimatePresence mode="wait" initial={false}>
        {done ?
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          role="status"
          className="flex min-h-[380px] flex-col items-start justify-center">
          
            <CheckCircle2Icon className="h-8 w-8 text-positive" aria-hidden="true" />
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
              {status === 'sent' ? 'Message sent.' : 'Message ready to send.'}
            </h3>
            <p className="mt-2 max-w-sm text-muted">
              {status === 'sent' ?
            'Thanks for reaching out. I’ll reply within a day.' :

            <>
                  Your email app should open with everything filled in. If it didn’t, write to{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-signal underline underline-offset-4">
                    {siteConfig.email}
                  </a>
                  .
                </>
            }
            </p>
            <button
            type="button"
            onClick={reset}
            className="mt-6 text-sm font-medium text-ink underline underline-offset-4 hover:text-signal">
            
              Send another message
            </button>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onSubmit={onSubmit}
          noValidate
          aria-label="Contact form">
          
            {/* Honeypot: hidden from people, bots tend to fill it */}
            <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            value={values.botcheck}
            onChange={(e) => setValues((v) => ({ ...v, botcheck: e.target.value }))} />
          
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-ink">Name</label>
                <input type="text" autoComplete="name" placeholder="Jane Doe" {...field('name')} />
                {errors.name && <p id="contact-name-error" className="mt-1.5 text-sm text-red-300">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-ink">Email</label>
                <input type="email" autoComplete="email" placeholder="jane@company.com" {...field('email')} />
                {errors.email && <p id="contact-email-error" className="mt-1.5 text-sm text-red-300">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="text-sm font-medium text-ink">What are you working on?</label>
              <textarea rows={6} placeholder="Role, project or problem. A few lines is plenty." {...field('message')} />
              {errors.message && <p id="contact-message-error" className="mt-1.5 text-sm text-red-300">{errors.message}</p>}
            </div>

            {status === 'error' &&
          <p role="alert" className="mt-5 flex items-start gap-2 rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  Couldn’t send right now. Try again, or{' '}
                  <button type="button" onClick={openMailto} className="underline underline-offset-4">
                    send it from your email app
                  </button>
                  .
                </span>
              </p>
          }

            <button
            type="submit"
            disabled={status === 'submitting'}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4F46E5,#7C3AED)] px-5 py-3.5 text-sm font-semibold text-white transition-[box-shadow,opacity,transform] duration-150 hover:shadow-[0_14px_40px_-10px_rgba(139,92,246,0.85)] active:scale-[0.98] disabled:opacity-70 sm:w-auto">
            
              {status === 'submitting' ?
            <>
                  <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending…
                </> :

            <>
                  Send message
                  <SendIcon className="h-4 w-4" aria-hidden="true" />
                </>
            }
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}