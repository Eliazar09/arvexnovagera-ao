import { Reveal } from '@/components/primitives/RevealText';
import { Accordion } from '@/components/primitives/Accordion';
import { faq } from '@/content/faq';

export function FAQ() {
  return (
    <section className="section border-b border-white/[0.06]" aria-labelledby="faq-title">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Esquerda */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="section-label mb-4">07 / DUDAS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-display font-light text-paper leading-tight sticky top-24"
                id="faq-title"
                style={{ fontSize: 'var(--fs-h2)' }}
              >
                Preguntas
                <br />
                <em className="italic text-paper-dim">frecuentes.</em>
              </h2>
            </Reveal>
          </div>

          {/* Direita — accordion */}
          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <Accordion items={faq} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
