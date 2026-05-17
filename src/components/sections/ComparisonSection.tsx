import { Check, X, Minus } from 'lucide-react';
import { SplitReveal, Reveal } from '@/components/primitives/RevealText';

type Val = 'yes' | 'no' | 'maybe';

const rows: { label: string; arvex: Val; freelancer: Val; agencia: Val; template: Val }[] = [
  { label: 'Diseño exclusivo',         arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Código limpio y rápido',   arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Plazo garantizado',        arvex: 'yes', freelancer: 'no',    agencia: 'maybe', template: 'yes' },
  { label: 'Soporte post-entrega',     arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Precio accesible',         arvex: 'yes', freelancer: 'yes',   agencia: 'no',  template: 'yes'   },
  { label: 'SEO técnico incluido',     arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'no'    },
  { label: 'Mobile-first',             arvex: 'yes', freelancer: 'maybe', agencia: 'yes', template: 'maybe' },
  { label: 'Automatización integrada', arvex: 'yes', freelancer: 'no',    agencia: 'maybe', template: 'no'  },
];

function Icon({ val }: { val: Val }) {
  if (val === 'yes') return <Check size={16} className="text-red mx-auto" />;
  if (val === 'no')  return <X size={16} className="text-paper-soft/25 mx-auto" />;
  return <Minus size={16} className="text-paper-soft/40 mx-auto" />;
}

export function ComparisonSection() {
  return (
    <section className="section border-b border-white/[0.06]" aria-labelledby="comparison-title">
      <div className="container">
        <div className="mb-16" id="comparison-title">
          <Reveal>
            <p className="section-label mb-4">POR QUÉ ARVEX</p>
          </Reveal>
          <SplitReveal
            text="Arvex vs."
            as="h2"
            delay={0.08}
            stagger={0.07}
            className="font-display font-light text-paper leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
          <SplitReveal
            text="Alternativas"
            as="h2"
            delay={0.22}
            stagger={0.06}
            className="font-display font-light italic text-paper-dim leading-tight"
            style={{ fontSize: 'var(--fs-h2)' }}
          />
        </div>

        <Reveal delay={0.1}>
          <p className="font-mono text-[9px] uppercase tracking-widest text-paper-soft/30 mb-4 md:hidden flex items-center gap-2">
            <span>←</span> deslizá para ver todo <span>→</span>
          </p>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full min-w-[600px]" aria-label="Comparación entre Arvex y alternativas">
              {/* Header */}
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left pb-4 pr-8 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40 w-[40%]">
                    Criterio
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-red">
                    Arvex
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Freelancer
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Agencia trad.
                  </th>
                  <th className="text-center pb-4 px-4 font-mono text-[10px] uppercase tracking-widest text-paper-soft/40">
                    Wix / Template
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-4 pr-8 font-sans text-sm text-paper-dim">{row.label}</td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.arvex} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.freelancer} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.agencia} />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Icon val={row.template} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-paper-soft/25">
            <Minus size={10} className="inline mr-1" /> puede variar según el profesional o plataforma
          </p>
        </Reveal>
      </div>
    </section>
  );
}
