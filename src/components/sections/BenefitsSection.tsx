'use client';

import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';

/* ── Visual 1: Crescimento de visitantes ── */
function VisualGrowth() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const points = [
    [0, 120], [40, 110], [80, 100], [120, 85], [160, 70],
    [200, 55], [240, 38], [280, 22], [320, 10],
  ];
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const areaD = `${pathD} L 320 140 L 0 140 Z`;

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0b] flex flex-col justify-between p-5">
      {/* Stat top-left */}
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-1">Visitantes / mes</p>
          <motion.p
            className="font-display text-3xl font-light text-white leading-none"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            3×
          </motion.p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#e63946]/10 border border-[#e63946]/20 px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e63946]" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#e63946]">crecimiento</span>
        </div>
      </div>

      {/* Chart */}
      <svg ref={ref} viewBox="0 0 320 140" className="w-full" preserveAspectRatio="none" style={{ height: 100 }}>
        <defs>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {/* Grid lines */}
        {[35, 70, 105].map((y) => (
          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
        ))}
        {/* Area fill */}
        <motion.path
          d={areaD}
          fill="url(#growthFill)"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
        {/* Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#e63946"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Endpoint dot */}
        <motion.circle
          cx="320" cy="10" r="4"
          fill="#e63946"
          filter="url(#glow)"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
      </svg>
    </div>
  );
}

/* ── Visual 2: Chat automático WhatsApp ── */
function VisualChat() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const messages = [
    { from: 'client', text: '¡Hola! Quiero agendar.', delay: 0.2 },
    { from: 'bot',    text: '✓ ¿Qué servicio necesitás?', delay: 0.5 },
    { from: 'client', text: 'Un sitio profesional.', delay: 0.8 },
    { from: 'bot',    text: '✓ ¡Confirmado! Te contactamos pronto.', delay: 1.1 },
  ];

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden bg-[#0a0a0b] flex flex-col gap-0">
      {/* Header bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
        <div className="w-7 h-7 rounded-full bg-[#25d366]/20 border border-[#25d366]/30 flex items-center justify-center">
          <span className="text-[10px]">🤖</span>
        </div>
        <div>
          <p className="font-sans text-[11px] text-white font-medium leading-none">Arvex Bot</p>
          <p className="font-mono text-[9px] text-[#25d366] mt-0.5">● online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-2 px-4 py-3 flex-1">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex ${msg.from === 'bot' ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: msg.delay, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className={`px-3 py-1.5 rounded-2xl max-w-[80%] font-sans text-[11px] leading-snug ${
                msg.from === 'bot'
                  ? 'bg-[#25d366]/15 text-[#25d366] border border-[#25d366]/20 rounded-tr-sm'
                  : 'bg-white/[0.06] text-white/70 border border-white/[0.06] rounded-tl-sm'
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Visual 3: Browser mockup ── */
function VisualBrowser() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden bg-[#0a0a0b] flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-[280px] rounded-lg overflow-hidden border border-white/[0.08]"
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Browser top bar */}
        <div className="bg-white/[0.04] border-b border-white/[0.06] px-3 py-2 flex items-center gap-2">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
            <span className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <div className="flex-1 bg-white/[0.04] rounded-full px-2 py-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e63946]/60" />
            <span className="font-mono text-[8px] text-white/30">arvexagency.online</span>
          </div>
        </div>

        {/* Site content mockup */}
        <div className="bg-[#080809] px-4 py-4 flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <div className="h-1 bg-white/20 rounded-full w-3/4" />
            <div className="h-1 bg-white/10 rounded-full w-1/2" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="h-px bg-white/[0.05] rounded-full w-full" />
            <div className="h-px bg-white/[0.05] rounded-full w-5/6" />
            <div className="h-px bg-white/[0.05] rounded-full w-4/6" />
          </div>
          <div className="flex gap-2 mt-1">
            <div className="h-6 bg-[#e63946]/80 rounded px-3 flex items-center">
              <span className="font-mono text-[7px] text-white uppercase tracking-widest">Agendar →</span>
            </div>
            <div className="h-6 border border-white/[0.12] rounded px-3 flex items-center">
              <span className="font-mono text-[7px] text-white/40 uppercase tracking-widest">Proyectos</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Score badge */}
      <motion.div
        className="absolute bottom-3 right-3 bg-white/[0.04] border border-white/[0.08] rounded-lg px-2.5 py-1.5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">Performance</p>
        <p className="font-display text-xl text-[#10b981] font-light leading-none mt-0.5">100</p>
      </motion.div>
    </div>
  );
}

/* ── Card wrapper ── */
function BenefitCard({
  visual,
  accentColor,
  title,
  description,
  delay,
}: {
  visual: React.ReactNode;
  accentColor: string;
  title: string;
  description: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full max-w-full sm:w-[340px] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0b] hover:border-white/[0.16] transition-colors duration-500"
      style={{ boxShadow: `0 0 40px ${accentColor}08` }}
    >
      {/* Visual area */}
      <div className="h-[176px] overflow-hidden border-b border-white/[0.06]">
        {visual}
      </div>

      {/* Accent line */}
      <div className="h-px w-full" style={{ background: `linear-gradient(to right, ${accentColor}60, transparent)` }} />

      {/* Text */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-display font-light text-paper text-xl leading-tight">{title}</h3>
        <p className="font-sans text-sm text-paper-dim leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

/* ── Section ── */
export function BenefitsSection() {
  return (
    <section className="section border-b border-white/[0.06]" aria-labelledby="benefits-title">
      <div className="container">
        {/* Heading */}
        <div className="mb-16">
          <Reveal>
            <p className="section-label mb-4">POR QUÉ INVERTIR</p>
          </Reveal>
          <SplitReveal
            text="Un sitio o automatización"
            as="h2"
            delay={0.08}
            stagger={0.05}
            className="font-display font-light text-paper leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
          <SplitReveal
            text="multiplican tus clientes."
            as="h2"
            delay={0.22}
            stagger={0.04}
            className="font-display font-light italic text-paper-dim leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
          <Reveal delay={0.4}>
            <p className="font-sans text-paper-dim mt-6 max-w-[55ch]">
              Los negocios con presencia digital profesional atraen hasta 3× más clientes
              que sus competidores sin sitio — y las automatizaciones reducen hasta un 70% el tiempo
              dedicado a tareas repetitivas.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-6 justify-center">
          <BenefitCard
            visual={<VisualGrowth />}
            accentColor="#e63946"
            title="Más clientes, todos los días"
            description="Un sitio profesional aparece en Google las 24h y atrae clientes mientras trabajás — o dormís."
            delay={0}
          />
          <BenefitCard
            visual={<VisualChat />}
            accentColor="#25d366"
            title="Atención automática"
            description="Con automatización en WhatsApp, confirmás citas y respondés preguntas sin escribir una sola palabra."
            delay={0.1}
          />
          <BenefitCard
            visual={<VisualBrowser />}
            accentColor="#10b981"
            title="Primera impresión perfecta"
            description="Tu sitio es tu tarjeta de presentación digital. Un diseño profesional genera confianza antes del primer contacto."
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
