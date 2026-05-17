import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/content/services';
import { Reveal } from '@/components/primitives/RevealText';
import { MagneticLink } from '@/components/primitives/MagneticLink';
import ServicosMenuClient from './ServicosMenuClient';

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Sitios en 1–5 días, sistemas web personalizados y automatización vía WhatsApp. Tres servicios, un estándar de ejecución.',
};

export default function ServicosPage() {
  const serviceImages: Record<string, string> = {
    sites: '/services/sites.png',
    sistemas: '/services/sistemas.png',
    automacao: '/services/automacao.png',
  };

  const menuItems = services.map((s) => ({
    link: `/servicos/${s.slug}`,
    text: s.title,
    image: serviceImages[s.slug] || `/services/sites.png`,
  }));

  return (
    <>
      {/* FlowingMenu — full viewport */}
      <div className="relative w-full" style={{ height: '100dvh', paddingTop: '80px' }}>
        <ServicosMenuClient items={menuItems} />
      </div>

      {/* Detalhe de cada serviço */}
      <div className="border-t border-white/[0.06]">
        {services.map((service, i) => (
          <section
            key={service.slug}
            className="section border-b border-white/[0.06]"
            aria-labelledby={`service-${service.slug}`}
          >
            <div className="container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Número */}
                <div className="lg:col-span-1">
                  <Reveal>
                    <span className="font-display font-light text-paper/[0.06] leading-none select-none hidden lg:block"
                      style={{ fontSize: 'clamp(4rem, 6vw, 6rem)' }}
                      aria-hidden="true"
                    >
                      {service.number}
                    </span>
                  </Reveal>
                </div>

                {/* Conteúdo */}
                <div className="lg:col-span-5">
                  <Reveal>
                    <h2
                      className="font-display font-light text-paper leading-tight mb-4"
                      id={`service-${service.slug}`}
                      style={{ fontSize: 'var(--fs-h3)' }}
                    >
                      {service.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <p className="font-sans text-paper-dim leading-relaxed mb-8 max-w-[48ch]">
                      {service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <MagneticLink>
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-red text-paper px-6 py-3 hover:bg-red-deep transition-colors duration-300"
                      >
                        Ver planes y precios →
                      </Link>
                    </MagneticLink>
                  </Reveal>
                </div>

                {/* Entregáveis */}
                <div className="lg:col-span-6">
                  <Reveal delay={0.1}>
                    <p className="section-label mb-6">QUÉ INCLUYE</p>
                    <ul className="flex flex-col gap-3">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 font-sans text-sm text-paper-dim">
                          <span className="w-4 h-px bg-red/50 shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display font-light text-paper mb-8" style={{ fontSize: 'var(--fs-h2)' }}>
              ¿No sabés por dónde empezar?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-sans text-paper-dim mb-10 max-w-[48ch] mx-auto">
              Agendá una llamada gratuita. En 30 minutos entendemos tu negocio e indicamos el mejor punto de partida.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <MagneticLink>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-8 py-4 hover:bg-red-deep transition-colors duration-300"
              >
                Agendar una llamada →
              </Link>
            </MagneticLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
