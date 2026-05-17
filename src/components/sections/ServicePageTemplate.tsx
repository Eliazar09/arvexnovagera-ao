import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Reveal } from '@/components/primitives/RevealText';
import { Accordion } from '@/components/primitives/Accordion';
import { MagneticLink } from '@/components/primitives/MagneticLink';
import { ProjectCard } from '@/components/primitives/ProjectCard';
import { projects } from '@/content/projects';
import type { Service } from '@/content/services';

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = projects
    .filter((p) => p.category === 'Sitios')
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[55vh] flex items-end border-b border-white/[0.06]">
        <div className="container pb-16 pt-[120px]">
          <Reveal>
            <p className="section-label mb-6">{service.number} / SERVICIOS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light leading-tight mb-6" style={{ fontSize: 'var(--fs-h1)' }}>
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-sans text-paper-dim text-lg max-w-[52ch]">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      {/* Descrição + entregáveis */}
      <section className="section border-b border-white/[0.06]">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="section-label mb-6">QUÉ ENTREGAMOS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-sans text-paper-dim leading-relaxed mb-10" style={{ fontSize: 'var(--fs-lead)' }}>
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((h) => {
                  const IconComp = ((Icons as unknown) as Record<string, Icons.LucideIcon>)[h.icon] ?? Icons.Circle;
                  return (
                    <div key={h.label} className="flex items-center gap-3 border border-white/[0.06] p-4">
                      <IconComp size={16} className="text-red shrink-0" />
                      <span className="font-mono text-xs uppercase tracking-wider text-paper-dim">{h.label}</span>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="section-label mb-6">ENTREGABLES</p>
              <ul className="flex flex-col gap-3">
                {service.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-white/[0.06] pb-3">
                    <span className="font-mono text-xs text-paper-soft/30 pt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-sm text-paper-dim">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-8">STACK & HERRAMIENTAS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {service.stack.map((s) => (
                <span key={s} className="font-mono text-xs uppercase tracking-widest border border-white/[0.1] px-4 py-2 text-paper-dim hover:border-red/40 hover:text-paper transition-colors duration-300">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pacotes */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-4">PAQUETES</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-light text-paper mb-12" style={{ fontSize: 'var(--fs-h2)' }}>
              Elegí tu punto de partida.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04]">
            {service.packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col p-8 h-full transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-ink-2 border-t-2 border-t-red'
                      : 'bg-ink hover:bg-ink-2'
                  }`}
                >
                  {pkg.highlighted && (
                    <span className="section-label text-red mb-4">MÁS POPULAR</span>
                  )}
                  <h3 className="font-display text-2xl font-light text-paper mb-2">{pkg.name}</h3>
                  <p className="section-label text-paper-soft/50 mb-8">{pkg.deadline}</p>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-sans text-sm text-paper-dim">
                        <span className="w-3 h-px bg-red/50 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contato"
                    className={`font-mono text-xs uppercase tracking-widest px-6 py-3 text-center transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-red text-paper hover:bg-red-deep'
                        : 'border border-white/20 text-paper-soft hover:border-paper/40 hover:text-paper'
                    }`}
                  >
                    Solicitar →

                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cases relacionados — apenas em Sites */}
      {service.slug === 'sites' && related.length > 0 && (
        <section className="section border-b border-white/[0.06]">
          <div className="container">
            <Reveal>
              <p className="section-label mb-4">PROYECTOS RELACIONADOS</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ específico */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-4">PREGUNTAS FRECUENTES</p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={service.faq.map((f) => ({ question: f.q, answer: f.a }))} className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display font-light text-paper mb-6" style={{ fontSize: 'var(--fs-h2)' }}>
              ¿Listo para comenzar?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticLink>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-8 py-4 hover:bg-red-deep transition-colors"
              >
                Agendar una llamada <ArrowRight size={14} />
              </Link>
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
