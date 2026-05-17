import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/primitives/RevealText';
import { MagneticLink } from '@/components/primitives/MagneticLink';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conocé a Arvex — boutique de tecnología y creación para América Latina. Nuestra historia, principios y las personas detrás del trabajo.',
};

const principles = [
  {
    number: '01',
    title: 'Obsesión con la calidad',
    description: 'Cada detalle importa. Un píxel mal puesto, una línea de código innecesaria, un color fuera del sistema — todo eso importa. Nuestro estándar no tiene días malos.',
  },
  {
    number: '02',
    title: 'Transparencia total',
    description: 'Sabés qué se está haciendo, por qué y cuándo va a estar listo. Sin sorpresas de alcance, sin promesas que no cumplimos.',
  },
  {
    number: '03',
    title: 'Tecnología al servicio del negocio',
    description: 'No usamos tecnología porque es nueva o interesante. La usamos porque resuelve un problema real de tu negocio con la menor fricción posible.',
  },
  {
    number: '04',
    title: 'Relación a largo plazo',
    description: 'Preferimos menos clientes con más profundidad que muchos proyectos superficiales. Crecemos cuando nuestros clientes crecen.',
  },
];

const timeline = [
  { year: '2019', event: 'Primer proyecto — sitio web para clínica médica' },
  { year: '2020', event: 'Expansión hacia diseño de identidad visual y primeros e-commerces' },
  { year: '2021', event: 'Inicio de proyectos de automatización y sistemas con n8n' },
  { year: '2022', event: 'Primeros clientes de toda América Latina' },
  { year: '2023', event: 'Incorporación del servicio de edición de video y diseño para redes sociales' },
  { year: '2024', event: 'Rebranding de la agencia y lanzamiento de este nuevo sitio' },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[55vh] flex items-end border-b border-white/[0.06]">
        <div className="container pb-16 pt-[120px]">
          <Reveal>
            <p className="section-label mb-6">NOSOTROS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
              Una boutique.
              <br />
              <em className="italic text-paper-dim">Seis disciplinas.</em>

            </h1>
          </Reveal>
        </div>
      </section>

      {/* Manifesto longo */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="section-label mb-6">QUIÉNES SOMOS</p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="font-sans text-paper-dim leading-relaxed mb-6" style={{ fontSize: 'var(--fs-lead)' }}>
                  Arvex nació con una convicción: la calidad de ejecución no tiene dirección. Somos la prueba de que es posible entregar trabajo de referencia internacional desde cualquier punto de América Latina.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="font-sans text-paper-dim leading-relaxed mb-6" style={{ fontSize: 'var(--fs-lead)' }}>
                  No somos una agencia de 50 personas con cuentas gigantes y procesos rígidos. Somos una boutique — pequeña por elección, meticulosa por principio. Cada proyecto pasa por un equipo reducido que conoce profundamente tu negocio.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-sans text-paper-dim leading-relaxed" style={{ fontSize: 'var(--fs-lead)' }}>
                  Integramos las seis disciplinas — sitios, automatización, e-commerce, identidad, video y redes sociales — porque la mejor marca digital es la que se construye con consistencia en todos los puntos de contacto, sin tercerizar en pedazos a distintas agencias.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Princípios */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-12">NUESTROS PRINCIPIOS</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04]">
            {principles.map((p, i) => (
              <Reveal key={p.number} delay={i * 0.08}>
                <div className="bg-ink p-8">
                  <span className="font-mono text-xs text-paper-soft/30 block mb-4">{p.number}</span>
                  <h3 className="font-display text-2xl font-light text-paper mb-4">{p.title}</h3>
                  <p className="font-sans text-sm text-paper-dim leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="section border-b border-white/[0.06]">
        <div className="container">
          <Reveal>
            <p className="section-label mb-12">TRAYECTORIA</p>
          </Reveal>
          <div className="flex flex-col gap-0">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div className="grid grid-cols-12 gap-8 border-t border-white/[0.06] py-6">
                  <span className="col-span-3 md:col-span-2 font-mono text-sm text-red">{item.year}</span>
                  <p className="col-span-9 md:col-span-10 font-sans text-paper-dim">{item.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display font-light text-paper mb-6" style={{ fontSize: 'var(--fs-h2)' }}>
              ¿Trabajamos juntos?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <MagneticLink>
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest bg-red text-paper px-8 py-4 hover:bg-red-deep transition-colors"
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
