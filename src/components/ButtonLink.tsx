import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
  'text-white bg-[linear-gradient(135deg,#4F46E5,#7C3AED)] shadow-[0_8px_30px_-10px_rgba(99,102,241,0.7)] hover:shadow-[0_14px_40px_-10px_rgba(139,92,246,0.85)]',
  secondary:
  'border border-line bg-surface text-ink hover:border-signal/60 hover:text-signal',
  ghost: 'text-ink hover:text-signal'
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  icon,
  external = false,
  className = ''
}: ButtonLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition-[color,border-color,box-shadow] duration-200 ${variants[variant]} ${className}`}>
      
      {variant === 'ghost' ? <span className="link-draw">{children}</span> : children}
      {icon}
    </motion.a>);

}