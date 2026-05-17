'use client';

import Link from 'next/link';
import { MagneticLink } from '@/components/primitives/MagneticLink';
import { Reveal } from '@/components/primitives/RevealText';

export function CTAFinal() {
  return (
    <section
      className="section relative overflow-hidden bg-ink"
      aria-label="Llamada a la acción"
    >
      {/* Grain pesado */}
      <div aria-hidden="true" className="noise-heavy" />

      {/* Red glow aura atrás do botão */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, rgb(var(--red-glow) / 0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10 text-center">
        <Reveal>
          <h2
            className="font-display font-light text-paper leading-[0.88] tracking-tight mb-12"
            style={{ fontSize: 'var(--fs-mega)' }}
          >
            Vamos construir
            <br />
            algo{' '}
            <em
              className="not-italic italic text-red"
              style={{ fontVariationSettings: '"SOFT" 100' }}
            >
              memorable.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <MagneticLink strength={0.4}>
            <Link
              href="/contato"
              className="relative inline-flex items-center gap-4 font-mono text-base uppercase tracking-widest bg-red text-paper px-12 py-6 hover:bg-red-deep transition-colors duration-300 active:scale-[0.98]"
              data-cursor-label="agendar"
            >
              <span>Agendar una llamada →</span>
              {/* Red glow */}
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 blur-[80px] bg-red-glow/30"
              />
            </Link>
          </MagneticLink>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="font-mono text-xs text-paper-soft/40 uppercase tracking-widest">
              Llamada gratuita · Sin compromiso · Respuesta en hasta 24h
            </p>
            <span className="hidden sm:block text-paper-soft/20">·</span>
            <a
              href="https://wa.me/5595981075842?text=%C2%A1Hola!%20Quiero%20empezar%20un%20proyecto%20con%20Arvex."
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#25d366] hover:text-[#1fad55] transition-colors flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              O escribirnos por WhatsApp ahora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
