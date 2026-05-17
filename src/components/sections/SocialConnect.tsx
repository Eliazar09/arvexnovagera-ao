'use client';

import { Reveal } from '@/components/primitives/RevealText';

const WA_URL = 'https://wa.me/5595981075842';

export function SocialConnect() {
  return (
    <section className="section border-b border-white/[0.06] overflow-hidden" aria-label="Redes sociales">
      {/* Faint red glow background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgb(var(--red-glow) / 0.07) 0%, transparent 70%)' }}
      />

      <div className="container relative z-10 text-center">
        <Reveal>
          <p className="section-label mb-6">SEGUINOS</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="font-display font-light leading-tight mb-4"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Conectate con{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e83946 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Arvex
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="font-sans text-paper-dim max-w-[40ch] mx-auto mb-12">
            Seguí nuestro trabajo, detrás de cámaras y novedades en redes sociales.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="inline-flex items-center gap-2 bg-ink-2 border border-white/[0.08] rounded-full p-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/arvexagency/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Arvex Agency"
              className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/[0.06] transition-colors duration-200 group"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-paper-soft group-hover:text-paper transition-colors" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="3.5"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61577662511296"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Arvex Agency"
              className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-white/[0.06] transition-colors duration-200 group"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-paper-soft group-hover:text-paper transition-colors" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Arvex Agency"
              className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#25D366]/10 transition-colors duration-200 group"
            >
              <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className="text-paper-soft group-hover:text-[#25D366] transition-colors" aria-hidden="true">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.773L2 30l7.418-1.808A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.898-1.612l-.424-.25-4.4 1.072 1.1-4.28-.278-.44A11.558 11.558 0 014.4 16c0-6.396 5.204-11.6 11.6-11.6S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.354-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.934-2.41-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.744 5.942 5.252.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.654.29-.812.29-1.508.204-1.654-.086-.146-.32-.232-.668-.406z"/>
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
