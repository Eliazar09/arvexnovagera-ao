import { Marquee } from '@/components/primitives/Marquee';
import { Reveal } from '@/components/primitives/RevealText';
import { testimonials } from '@/content/testimonials';

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] border border-white/[0.06] p-8 mx-4 flex flex-col gap-5 bg-ink-2/40">
      {/* Resultado em destaque */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 border self-start"
        style={{ borderColor: `${t.color}30`, background: `${t.color}0a` }}
      >
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: t.color }} />
        <span className="font-mono text-[9px] uppercase tracking-[0.16em]" style={{ color: t.color }}>
          {t.result}
        </span>
      </div>

      {/* Texto */}
      <p className="font-sans text-sm text-paper-dim leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Rating — 5 traços */}
      <div className="flex gap-1.5" aria-label={`Valoración: ${t.rating} de 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="block h-0.5 w-5 transition-colors"
            style={{ background: i < t.rating ? t.color : 'rgb(255 255 255 / 0.08)' }}
          />
        ))}
      </div>

      {/* Autor */}
      <div className="flex items-center gap-3 border-t border-white/[0.07] pt-5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-mono text-[11px] font-bold"
          style={{
            background: `${t.color}18`,
            border: `1px solid ${t.color}30`,
            color: t.color,
          }}
        >
          {t.initials}
        </div>
        <div>
          <p className="font-sans text-sm font-medium text-paper">{t.author}</p>
          <p className="font-mono text-[9px] text-paper-soft/50 uppercase tracking-wider">
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section className="section border-b border-white/[0.06] overflow-hidden" aria-labelledby="testimonials-title">
      <div className="container mb-12">
        <Reveal>
          <p className="section-label mb-4">06 / LO QUE DICEN</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display font-light text-paper leading-tight"
            id="testimonials-title"
            style={{ fontSize: 'var(--fs-h2)' }}
          >
            Quienes invirtieron,
            <br />
            <em className="italic text-paper-dim">vieron resultados.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="font-sans text-paper-dim mt-4 max-w-[48ch]" style={{ fontSize: 'var(--fs-lead)' }}>
            Resultados reales de clientes de toda América Latina.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee speed={120}>
          {row1.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>

        <Marquee speed={130} reverse>
          {row2.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
