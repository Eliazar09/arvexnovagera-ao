'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';
import { services } from '@/content/services';

const sectionBg = ['#080809', '#0b0b0c', '#090810'];

function ServiceRow({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' });

  return (
    <div
      ref={ref}
      className="border-b border-white/[0.06] py-16 md:py-24"
      style={{ backgroundColor: sectionBg[index] }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Número */}
        <div className="md:col-span-1 pt-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            {service.number}
          </span>
        </div>

        {/* Título grande */}
        <div className="md:col-span-4">
          <motion.h3
            className="font-display font-light leading-[0.88] uppercase tracking-tight text-paper"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.title.split(' ').map((word, wi) => (
              <span key={wi} className="block">{word}</span>
            ))}
          </motion.h3>
        </div>

        {/* Conteúdo */}
        <div className="md:col-span-7 flex flex-col gap-8">
          <motion.p
            className="font-sans text-paper-dim leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {service.deliverables.slice(0, 4).map((d) => (
              <p key={d} className="font-sans text-xs text-paper-soft/45 flex items-start gap-2 py-1 border-b border-white/[0.04]">
                <span className="text-red/40 shrink-0 mt-px">—</span>
                {d}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <Link
              href={`/servicos/${service.slug}`}
              className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-red group"
            >
              Ver detalles
              <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <section aria-labelledby="services-title">
      {/* Heading */}
      <div className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-4">QUÉ HACEMOS</p>
          </Reveal>
          <div id="services-title">
            {['Tres', 'servicios.', 'Un', 'equipo.'].map((word, i) => (
              <SplitReveal
                key={word}
                text={word}
                as="h2"
                delay={0.08 + i * 0.12}
                stagger={0.05}
                className={`font-display font-light leading-[0.92] ${i % 2 === 1 ? 'italic text-paper-dim' : 'text-paper'}`}
                style={{ fontSize: 'var(--fs-h2)' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Serviços */}
      {services.map((service, i) => (
        <ServiceRow key={service.slug} service={service} index={i} />
      ))}
    </section>
  );
}
