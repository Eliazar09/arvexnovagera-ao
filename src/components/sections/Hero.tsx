'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MagneticLink } from '@/components/primitives/MagneticLink';

const LineWaves = dynamic(() => import('@/components/LineWaves'), {
  ssr: false,
  loading: () => null,
});

const ease = [0.16, 1, 0.3, 1] as const;

function HeroWord({
  word,
  delay,
  className = '',
  style,
}: {
  word: string;
  delay: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className="overflow-hidden inline-block">
      <motion.span
        className={`inline-block ${className}`}
        style={style}
        initial={{ y: '110%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 1.0, delay, ease }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-ink"
      aria-label="Sección principal"
    >
      {/* LineWaves — fondo WebGL */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <LineWaves
          speed={0.3}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={1}
          rotation={-45}
          edgeFadeWidth={0}
          colorCycleSpeed={1}
          brightness={0.18}
          color1="#ffffff"
          color2="#f70808"
          color3="#8f0505"
          enableMouseInteraction
          mouseInfluence={2}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgb(8 8 9 / 0.65) 0%, rgb(8 8 9 / 0.38) 50%, rgb(8 8 9 / 0.78) 100%)',
        }}
      />

      <div className="container relative z-10 py-28 flex flex-col items-center text-center">

        {/* ── Headline ── */}
        <h1 className="leading-[0.88] tracking-tight mb-4">
          {/* SITIOS */}
          <div
            className="flex flex-wrap gap-x-[0.15em] justify-center"
            style={{ fontSize: 'clamp(4.5rem, 14vw, 11rem)' }}
          >
            <HeroWord
              word="SITIOS"
              delay={0.2}
              className="font-display font-extrabold"
              style={{ color: '#e63946' }}
            />
          </div>

          {/* AUTOMATIZACIÓN */}
          <div
            className="flex flex-wrap gap-x-[0.15em] justify-center"
            style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.6rem)' }}
          >
            <HeroWord
              word="AUTOMATIZACIÓN"
              delay={0.3}
              className="font-display font-light"
              style={{ color: '#f5f3ee' }}
            />
          </div>

          {/* SISTEMAS */}
          <div
            className="flex flex-wrap gap-x-[0.15em] justify-center"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          >
            <HeroWord
              word="SISTEMAS"
              delay={0.4}
              className="font-mono font-medium"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px rgb(245 243 238 / 0.55)',
                letterSpacing: '0.04em',
              }}
            />
          </div>

          {/* que venden. */}
          <div
            className="flex flex-wrap gap-x-[0.22em] mt-2 justify-center"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)' }}
          >
            <HeroWord word="que" delay={0.5} className="font-display font-light text-paper" />
            <HeroWord
              word="venden."
              delay={0.58}
              className="font-display font-extrabold"
              style={{ color: '#e63946' }}
            />
          </div>
        </h1>

        {/* Línea de apoyo */}
        <motion.div
          className="flex flex-wrap gap-x-[0.22em] justify-center mb-8"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.8 }}
        >
          {['Construidos', 'con', 'obsesión', 'por', 'el', 'detalle.'].map((w, i) => (
            <HeroWord
              key={w}
              word={w}
              delay={0.88 + i * 0.07}
              className="font-display font-light text-paper-soft/50"
            />
          ))}
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-light text-paper-dim leading-relaxed mb-14 max-w-[44ch]"
          style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)' }}
        >
          Sitios web profesionales, automatización inteligente y sistemas web
          con estándar premium para toda América Latina.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.14, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticLink>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-12 py-5 hover:bg-red-deep transition-colors duration-300 active:scale-[0.98]"
              style={{ boxShadow: '0 0 48px rgb(230 57 70 / 0.35), 0 4px 24px rgb(0 0 0 / 0.4)' }}
              data-cursor-label="agendar"
            >
              Agendar una llamada
              <ArrowRight size={15} />
            </Link>
          </MagneticLink>

          <Link
            href="/projetos"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-paper-soft hover:text-paper transition-colors duration-300"
          >
            Ver proyectos
            <span className="block w-0 h-px bg-paper group-hover:w-8 transition-all duration-500" />
          </Link>
        </motion.div>

        {/* Prueba social — números */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10"
        >
          {[
            { num: '+30',   label: 'proyectos entregados' },
            { num: '100%',  label: 'aprobación en entrega' },
            { num: '1–5',   label: 'días para tu sitio' },
          ].map(({ num, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="font-display font-extrabold text-red text-xl leading-none">{num}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper-soft/40">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-paper-soft/40" style={{ animation: 'scroll-pulse 2s ease-in-out infinite' }} />
        <span className="section-label text-paper-soft/40 text-[9px]">SCROLL</span>
      </motion.div>
    </section>
  );
}
