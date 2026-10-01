import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface RotatingRoleProps {
  roles: string[];
  interval?: number;
}

export function RotatingRole({ roles, interval = 2600 }: RotatingRoleProps) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce || roles.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => window.clearInterval(id);
  }, [reduce, roles.length, interval]);

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <span className="sr-only">{roles.join(', ')}</span>
      {/* Invisible copies reserve the widest role so the line never jumps */}
      {roles.map((r) =>
      <span key={r} aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
          {r}
        </span>
      )}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={roles[index]}
          aria-hidden="true"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="col-start-1 row-start-1 whitespace-nowrap text-signal">
          
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>);

}