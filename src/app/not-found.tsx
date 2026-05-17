import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-start justify-end pb-16 bg-ink">
      <div className="container">
        <div className="overflow-hidden mb-4">
          <p
            className="font-display font-light leading-none select-none"
            style={{
              fontSize: 'var(--fs-mega)',
              WebkitTextStroke: '1px rgb(var(--paper) / 0.08)',
              color: 'transparent',
            }}
            aria-hidden="true"
          >
            404
          </p>
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-light text-paper mb-4">
          Fuera del{' '}
          <em className="italic" style={{ fontVariationSettings: '"SOFT" 100' }}>
            mapa.
          </em>
        </h1>

        <p className="font-sans text-paper-dim mb-10 max-w-[40ch]">
          La página que buscas no existe o fue movida a otra dirección.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-8 py-4 hover:bg-red-deep transition-colors duration-300"
        >
          Volver al inicio →
        </Link>
      </div>
    </div>
  );
}
