import Link from 'next/link';
import { LocalClock } from '@/components/primitives/LocalClock';

const serviceLinks = [
  { href: '/servicos/sites', label: 'Sitios Web' },
  { href: '/servicos/sistemas', label: 'Sistemas Web' },
  { href: '/servicos/automacao', label: 'Automatización' },
];

const agencyLinks = [
  { href: '/projetos', label: 'Proyectos' },
  { href: '/contato', label: 'Contacto' },
  { href: '/contato#orcamento', label: 'Solicitar presupuesto' },
];

const WA_URL = 'https://wa.me/5595981075842';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] pt-16 pb-8">
      <div className="container">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Marca */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-3xl font-light text-paper block mb-4">
              Arvex<span className="text-red">.</span>
            </Link>
            <p className="font-sans text-sm text-paper-soft leading-relaxed max-w-[28ch]">
              Boutique de tecnología y creación. Sitios web, sistemas y automatización que generan resultados.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <p className="section-label mb-6">Servicios</p>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-paper-soft hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agencia */}
          <div>
            <p className="section-label mb-6">Agencia</p>
            <ul className="flex flex-col gap-3">
              {agencyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-paper-soft hover:text-paper transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="section-label mb-6">Contacto</p>
            <div className="flex flex-col gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-paper-soft hover:text-red transition-colors"
              >
                +55 95 98107-5842
              </a>
              <div className="mt-4 flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/arvexagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-paper-soft hover:text-paper transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="3.5"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61577662511296"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-paper-soft hover:text-paper transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-paper-soft hover:text-[#25D366] transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.773L2 30l7.418-1.808A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.898-1.612l-.424-.25-4.4 1.072 1.1-4.28-.278-.44A11.558 11.558 0 014.4 16c0-6.396 5.204-11.6 11.6-11.6S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.354-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.102 1.364-.202.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.934-2.41-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.888-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.086-.928.434-.32.348-1.218 1.19-1.218 2.9s1.246 3.364 1.42 3.596c.174.232 2.452 3.744 5.942 5.252.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.654.29-.812.29-1.508.204-1.654-.086-.146-.32-.232-.668-.406z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="font-mono text-xs text-paper-soft/50 uppercase tracking-wider">
              © {year} Arvex Agency
            </span>
            <LocalClock className="font-mono text-xs text-paper-soft/40 uppercase tracking-wider" />
          </div>
          <span className="font-mono text-xs text-paper-soft/30 uppercase tracking-wider">
            América Latina
          </span>
        </div>

        {/* Wordmark grande */}
        <div className="mt-8 overflow-hidden select-none">
          <p
            className="font-display font-light leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(3rem, 22vw, 18rem)',
              WebkitTextStroke: '1px rgb(var(--paper) / 0.06)',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            Arvex Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
