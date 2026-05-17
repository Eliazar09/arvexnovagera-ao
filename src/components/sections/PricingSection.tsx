'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import NumberFlow from '@number-flow/react';
import { CheckCheck, Wrench, Zap, LayoutDashboard } from 'lucide-react';

const plans = [
  {
    id: 'manutencao',
    name: 'Mantenimiento de Sitio',
    tagline: '¿Ya tenés sitio y necesitás corregir, actualizar o mejorar algo? Nosotros lo resolvemos.',
    price: 99,
    period: '/mes',
    cta: 'Contratar mantenimiento',
    popular: false,
    Icon: Wrench,
    features: [
      'Correcciones y ajustes en el sitio existente',
      'Backup semanal automático',
      'Actualizaciones de seguridad',
      'Monitoreo de uptime 24/7',
      '1 cambio de contenido por mes',
      'Soporte vía WhatsApp',
    ],
  },
  {
    id: 'automacao',
    name: 'Automatización',
    tagline: 'WhatsApp y flujos inteligentes que trabajan mientras dormís.',
    price: 199,
    period: '/mes',
    cta: 'Automatizar ahora',
    popular: true,
    Icon: Zap,
    features: [
      'Atención automática en WhatsApp',
      'Flujos de mensajes personalizados',
      'Confirmación de citas',
      'Notificaciones automáticas',
      'Integración con tu sistema actual',
      'Reporte mensual de resultados',
    ],
  },
  {
    id: 'automacao-crm',
    name: 'Automatización + CRM',
    tagline: 'Automatización completa con panel de control y gestión de clientes integrados.',
    price: 299,
    period: '/mes',
    cta: 'Quiero el completo',
    popular: false,
    Icon: LayoutDashboard,
    features: [
      'Todo del plan Automatización',
      'CRM integrado a WhatsApp',
      'Dashboard de métricas en tiempo real',
      'Gestión de leads y embudo de ventas',
      'Reportes avanzados mensuales',
      'Onboarding y capacitación incluidos',
    ],
  },
];

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-6% 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col ${
        plan.popular
          ? 'bg-ink-2 border border-red/35'
          : 'bg-ink-2/50 border border-white/[0.07]'
      }`}
    >
      {/* Top accent line for popular */}
      {plan.popular && (
        <div className="absolute inset-x-0 -top-px h-px bg-red" />
      )}

      {/* Popular badge */}
      {plan.popular && (
        <span className="absolute -top-[13px] left-6 font-mono text-[9px] uppercase tracking-[0.18em] bg-red text-paper px-3 py-1">
          Más popular
        </span>
      )}

      <div className="p-8 flex flex-col flex-1">

        {/* Icon + name */}
        <div className="flex items-center gap-2.5 mb-6">
          <plan.Icon
            size={16}
            className={plan.popular ? 'text-red' : 'text-paper-soft/50'}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper-soft/55">
            {plan.name}
          </span>
        </div>

        {/* Price */}
        <div className="mb-1">
          <div className="flex items-baseline gap-1">
            <span className="font-mono text-sm text-paper-soft/45 leading-none">USD</span>
            <span
              className="font-display font-extrabold text-paper leading-none"
              style={{ fontSize: 'clamp(3rem, 5vw, 4rem)' }}
            >
              <NumberFlow
                value={plan.price}
                locales="es-419"
                format={{ useGrouping: true }}
              />
            </span>
          </div>
          <span className="font-mono text-xs text-paper-soft/40 tracking-widest">
            {plan.period}
          </span>
        </div>

        <p className="font-sans text-sm text-paper-dim leading-relaxed mt-4 mb-8">
          {plan.tagline}
        </p>

        {/* CTA */}
        <Link
          href="/contato"
          className={`w-full flex items-center justify-center font-mono text-[11px] uppercase tracking-widest py-4 mb-8 transition-colors duration-250 ${
            plan.popular
              ? 'bg-red text-paper hover:bg-red-deep'
              : 'border border-white/[0.10] text-paper-soft hover:text-paper hover:border-white/[0.20] bg-white/[0.03]'
          }`}
          style={
            plan.popular
              ? { boxShadow: '0 0 40px rgb(230 57 70 / 0.22)' }
              : undefined
          }
        >
          {plan.cta}
        </Link>

        {/* Feature list */}
        <div className="border-t border-white/[0.06] pt-7">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper-soft/35 mb-5">
            Qué incluye
          </p>
          <ul className="flex flex-col gap-3.5">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCheck
                  size={13}
                  className={`mt-[3px] shrink-0 ${
                    plan.popular ? 'text-red' : 'text-paper-soft/40'
                  }`}
                />
                <span className="font-sans text-sm text-paper-dim leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-10% 0px' });

  return (
    <section className="section border-b border-white/[0.06]" aria-label="Precios">
      <div className="container">

        {/* Header */}
        <div
          ref={headRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end mb-16"
        >
          <div className="md:col-span-3">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              05 / PRECIOS
            </motion.p>
          </div>
          <div className="md:col-span-9">
            <motion.h2
              className="font-display font-light text-paper leading-tight"
              style={{ fontSize: 'var(--fs-h2)' }}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Inversión clara,<br />
              <span style={{ color: 'rgb(var(--red))' }}>resultado medible.</span>
            </motion.h2>
            <motion.p
              className="font-sans text-paper-dim mt-5 max-w-[50ch]"
              style={{ fontSize: 'var(--fs-lead)' }}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              Sin sorpresas. Precios fijos, alcance claro y entrega garantizada.
            </motion.p>
          </div>
        </div>

        {/* Cards — separados por linha fina */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.05]">
          {plans.map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} />
          ))}
        </div>

        {/* Garantia */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5"
        >
          <div className="w-10 h-10 border border-red/30 flex items-center justify-center shrink-0">
            <CheckCheck size={18} className="text-red" />
          </div>
          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-widest text-paper mb-1">
              Garantía de satisfacción
            </p>
            <p className="font-sans text-sm text-paper-dim leading-relaxed">
              Si no te gusta el diseño en las primeras 48h, devolvemos el 100% del anticipo — sin burocracia.
              Trabajamos hasta que estés satisfecho.
            </p>
          </div>
          <div className="shrink-0 text-right hidden sm:block">
            <span className="font-display font-extrabold text-3xl text-red leading-none">100%</span>
            <p className="font-mono text-[9px] uppercase tracking-widest text-paper-soft/40 mt-1">reembolso</p>

          </div>
        </motion.div>

        {/* Urgência + rodapé */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
          </div>
          <p className="font-mono text-[10px] text-paper-soft/25 tracking-wide text-center sm:text-right">
            Sistemas a consultar · Pago en cuotas disponible · 50% anticipo + 50% entrega
          </p>
        </motion.div>

      </div>
    </section>
  );
}
