'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const row1 = ['Sitios Web', 'Sistemas Web', 'Automatización', 'América Latina'];
const row2 = ['1–5 días hábiles', 'Diseño exclusivo', 'Mobile-first', 'SEO incluido', 'Soporte post-entrega'];

function Ticker({
  items,
  startDelay = 0,
  interval = 2600,
  className = '',
}: {
  items: string[];
  startDelay?: number;
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [startDelay, interval, items.length]);

  return (
    <div className={`overflow-hidden relative ${className}`} style={{ height: '1.3em' }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={index}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function ServicesRibbon() {
  return (
    <div className="border-y border-white/[0.06]" aria-hidden="true">
      {/* Faixa 1 */}
      <div className="bg-ink py-3 border-none flex items-center justify-between px-6 md:px-12 gap-4">
        <div className="flex items-center gap-3 shrink-0">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-px h-3 bg-white/[0.08]" />
          ))}
        </div>

        <Ticker
          items={row1}
          interval={2800}
          className="flex-1 font-mono text-[11px] uppercase tracking-widest text-paper/40 text-center"
        />

        <div className="flex items-center gap-3 shrink-0">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-px h-3 bg-white/[0.08]" />
          ))}
        </div>
      </div>

      {/* Faixa 2 */}
      <div className="bg-ink-2 py-3 border-t border-white/[0.04] flex items-center justify-between px-6 md:px-12 gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-red/30" />
        </div>

        <Ticker
          items={row2}
          startDelay={1400}
          interval={2600}
          className="flex-1 font-mono text-[11px] uppercase tracking-widest text-paper/25 text-center"
        />

        <div className="flex items-center gap-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-red/30" />
        </div>
      </div>
    </div>
  );
}
