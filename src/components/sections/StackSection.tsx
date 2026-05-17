'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';
import { gsap } from 'gsap';
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiSupabase, SiPostgresql, SiVercel, SiNetlify,
  SiN8N, SiMake, SiZapier, SiFigma,
} from 'react-icons/si';
import { MessageSquare, Webhook } from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const allTech: TechItem[] = [
  { name: 'HTML5',       icon: <SiHtml5 />,        color: '#e34f26' },
  { name: 'CSS3',        icon: <SiCss />,           color: '#1572b6' },
  { name: 'JavaScript',  icon: <SiJavascript />,    color: '#f7df1e' },
  { name: 'TypeScript',  icon: <SiTypescript />,     color: '#3178c6' },
  { name: 'React',       icon: <SiReact />,          color: '#61dafb' },
  { name: 'Next.js',     icon: <SiNextdotjs />,      color: '#ffffff' },
  { name: 'Tailwind',    icon: <SiTailwindcss />,    color: '#06b6d4' },
  { name: 'Node.js',     icon: <SiNodedotjs />,      color: '#339933' },
  { name: 'Supabase',    icon: <SiSupabase />,       color: '#3ecf8e' },
  { name: 'PostgreSQL',  icon: <SiPostgresql />,     color: '#4169e1' },
  { name: 'Vercel',      icon: <SiVercel />,          color: '#ffffff' },
  { name: 'Netlify',     icon: <SiNetlify />,        color: '#00c7b7' },
  { name: 'n8n',         icon: <SiN8N />,             color: '#ea4b71' },
  { name: 'Make',        icon: <SiMake />,            color: '#6d4aff' },
  { name: 'WhatsApp',    icon: <MessageSquare size={20} />, color: '#25d366' },
  { name: 'Zapier',      icon: <SiZapier />,          color: '#ff4a00' },
  { name: 'Webhooks',    icon: <Webhook size={20} />, color: '#a0aec0' },
  { name: 'Figma',       icon: <SiFigma />,           color: '#f24e1e' },
];

/* ── Rotating Ring — uses GSAP for reliable rotation ── */
function RotatingRing({
  items,
  radius,
  duration,
  reverse,
}: {
  items: TechItem[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  const ringRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!ringRef.current) return;

    // Rotate the entire ring
    const ringTween = gsap.to(ringRef.current, {
      rotation: reverse ? -360 : 360,
      duration,
      ease: 'none',
      repeat: -1,
    });

    // Counter-rotate each card to keep them upright
    const cardTweens = cardRefs.current
      .filter(Boolean)
      .map((card) =>
        gsap.to(card!, {
          rotation: reverse ? 360 : -360,
          duration,
          ease: 'none',
          repeat: -1,
        })
      );

    return () => {
      ringTween.kill();
      cardTweens.forEach((t) => t.kill());
    };
  }, [duration, reverse]);

  return (
    <div
      ref={ringRef}
      className="absolute"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: '50%',
        left: '50%',
        marginTop: -radius,
        marginLeft: -radius,
      }}
    >
      {items.map((item, i) => {
        const angle = ((360 / items.length) * i - 90) * (Math.PI / 180);
        const cardSize = 56; // w-14 = 56px
        const halfCard = cardSize / 2;
        const x = Math.cos(angle) * radius + radius - halfCard;
        const y = Math.sin(angle) * radius + radius - halfCard;

        return (
          <div
            key={item.name}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="absolute"
            style={{ left: x, top: y }}
          >
            <motion.div
              whileHover={{ scale: 1.25, zIndex: 50 }}
              className="group relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border border-white/[0.08] bg-white/[0.03] cursor-pointer transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              style={{ boxShadow: `0 0 20px ${item.color}10` }}
            >
              <span className="text-xl transition-colors duration-300" style={{ color: item.color }}>
                {item.icon}
              </span>
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-widest text-white/0 group-hover:text-white/80 transition-all duration-300 whitespace-nowrap">
                {item.name}
              </span>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${item.color}20 0%, transparent 70%)` }}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Orbit Ring (decorative circle) ── */
function OrbitRing({ radius, delay }: { radius: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  return (
    <motion.div
      ref={ref}
      className="absolute rounded-full border border-white/[0.04]"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: '50%',
        left: '50%',
        marginTop: -radius,
        marginLeft: -radius,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

/* ── Center Pulse ── */
function CenterCore() {
  const coreRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!coreRef.current || !letterRef.current) return;
    const t1 = gsap.to(coreRef.current, { rotation: 360, duration: 20, ease: 'none', repeat: -1 });
    const t2 = gsap.to(letterRef.current, { rotation: -360, duration: 20, ease: 'none', repeat: -1 });
    return () => { t1.kill(); t2.kill(); };
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div
        className="absolute -inset-8 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgb(var(--red) / 0.15) 0%, transparent 70%)',
          animation: 'core-pulse 3s ease-in-out infinite',
        }}
      />
      <div
        ref={coreRef}
        className="relative w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/10 flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgb(var(--red) / 0.3), rgb(var(--ink-2) / 0.8))',
          boxShadow: '0 0 60px rgb(var(--red) / 0.2), inset 0 0 30px rgb(var(--red) / 0.1)',
        }}
      >
        <span ref={letterRef} className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
          A
        </span>
      </div>
    </div>
  );
}

/* Partículas */
const PARTICLES = [
  { x: 12, y: 18, s: 1.5, d: 4.0, dl: 0.0 },
  { x: 75, y:  8, s: 1.0, d: 5.2, dl: 0.9 },
  { x: 42, y: 68, s: 2.0, d: 3.6, dl: 1.5 },
  { x: 88, y: 38, s: 1.2, d: 6.0, dl: 0.3 },
  { x: 28, y: 82, s: 1.8, d: 4.4, dl: 1.8 },
  { x: 60, y: 14, s: 1.0, d: 5.6, dl: 0.6 },
  { x:  8, y: 52, s: 1.5, d: 4.0, dl: 1.2 },
  { x: 82, y: 78, s: 1.2, d: 3.8, dl: 0.4 },
];

function Particles() {
  return (
    <>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: p.s,
            height: p.s,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `particle-float ${p.d}s ease-in-out ${p.dl}s infinite`,
          }}
        />
      ))}
    </>
  );
}

/* ── Bottom Stats ── */
function TechCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest: number) => Math.round(latest));
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, 18, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      const unsub = rounded.on('change', (v: number) => setDisplayCount(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [isInView, count, rounded]);

  const stats = [
    { value: displayCount.toString() + '+', label: 'Tecnologías' },
    { value: '4', label: 'Categorías' },
    { value: '100%', label: 'Modernas' },
  ];

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-white/[0.06]"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="font-display text-3xl md:text-4xl font-light text-paper mb-1">{stat.value}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-paper-soft/50">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

/* ── Category Labels ── */
function CategoryLabels() {
  const categories = [
    { name: 'Frontend', position: 'top-4 left-4 md:top-8 md:left-8' },
    { name: 'Backend', position: 'top-4 right-4 md:top-8 md:right-8' },
    { name: 'Automatización', position: 'bottom-4 left-4 md:bottom-8 md:left-8' },
    { name: 'Design', position: 'bottom-4 right-4 md:bottom-8 md:right-8' },
  ];

  return (
    <>
      {categories.map((cat, i) => (
        <motion.span
          key={cat.name}
          className={`absolute ${cat.position} font-mono text-[9px] uppercase tracking-[0.2em] text-white/20`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.8 }}
        >
          {cat.name}
        </motion.span>
      ))}
    </>
  );
}

/* ── Main Component ── */
export function StackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10% 0px' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const ring0 = allTech.slice(0, 6);
  const ring1 = allTech.slice(6, 13);
  const ring2 = allTech.slice(13);

  return (
    <section
      ref={sectionRef}
      className="section border-b border-white/[0.06] overflow-hidden"
      aria-labelledby="stack-title"
    >
      <div className="container">
        <div className="mb-10 md:mb-16 text-center">
          <Reveal>
            <p className="section-label mb-4">NUESTRA STACK</p>
          </Reveal>
          <SplitReveal
            text="Tecnología de punta"
            as="h2"
            delay={0.08}
            stagger={0.04}
            className="font-display font-light text-paper leading-tight justify-center"
            style={{ fontSize: 'var(--fs-h2)' } as React.CSSProperties}
          />
          <SplitReveal
            text="para proyectos escalables."
            as="h2"
            delay={0.2}
            stagger={0.04}
            className="font-display font-light italic text-paper-dim leading-tight justify-center"
            style={{ fontSize: 'var(--fs-h2)' } as React.CSSProperties}
          />
          <Reveal delay={0.35}>
            <p className="font-sans text-paper-dim mt-6 max-w-[52ch] mx-auto">
              Las herramientas más modernas del mercado para garantizar alta performance, seguridad y automatización.
            </p>
          </Reveal>
        </div>

        {/* Orbital Visualization */}
        <motion.div
          className="relative mx-auto overflow-hidden"
          style={{ width: '100%', maxWidth: isMobile ? 340 : 700, aspectRatio: '1 / 1' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle at center, rgb(var(--red) / 0.08) 0%, transparent 60%)' }}
          />

          <OrbitRing radius={isMobile ? 70 : 140} delay={0.2} />
          <OrbitRing radius={isMobile ? 120 : 240} delay={0.4} />
          <OrbitRing radius={isMobile ? 160 : 320} delay={0.6} />

          <CategoryLabels />
          <Particles />
          <CenterCore />

          {/* GSAP-powered rotating rings */}
          <RotatingRing items={ring0} radius={isMobile ? 70 : 140} duration={25} />
          <RotatingRing items={ring1} radius={isMobile ? 120 : 240} duration={35} reverse />
          <RotatingRing items={ring2} radius={isMobile ? 160 : 320} duration={45} />
        </motion.div>

        <TechCounter />
      </div>
    </section>
  );
}
