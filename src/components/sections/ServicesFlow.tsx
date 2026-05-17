'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { services } from '@/content/services';

/* ── Paleta ───────────────────────────────── */
const MATTE_BLACK   = '#0a0a0b';
const MATTE_BLACK_2 = '#0e0e10';
const DARK_RED      = '#7a1a1a';
const DARK_RED_2    = '#5c1212';
const WHITE         = '#f5f3ee';
const WHITE_DIM     = '#d7d5ce';
const WHITE_SOFT    = '#a8a59e';

export function ServicesFlow() {
  const sitesService      = services[0]; // 01 — Sites
  const sistemasService   = services[1]; // 02 — Sistemas Web
  const automacaoService  = services[2]; // 03 — Automação

  return (
    <FlowArt aria-label="Servicios Arvex">
      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 0 — HEADER: "O QUE FAZEMOS"
          Fundo: preto fosco
      ═══════════════════════════════════════════════════════ */}
      <FlowSection
        aria-label="Qué hacemos"
        style={{ backgroundColor: MATTE_BLACK, color: WHITE }}
      >
        <p
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: WHITE_SOFT }}
        >
          QUÉ HACEMOS
        </p>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        <div>
          <h2
            className="font-display font-light leading-[0.88] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)', color: WHITE }}
          >
            Tres
            <br />
            <span style={{ color: WHITE_DIM }} className="italic">servicios.</span>
            <br />
            Un
            <br />
            <span style={{ color: WHITE_DIM }} className="italic">equipo.</span>
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        <p
          className="mt-auto max-w-[50ch] font-sans leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)', color: WHITE_DIM }}
        >
          Sitios premium, sistemas a medida y automatización inteligente — todo con el mismo equipo, el mismo estándar.
        </p>
      </FlowSection>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 1 — SITES
          Fundo: vermelho escuro
      ═══════════════════════════════════════════════════════ */}
      <FlowSection
        aria-label="Sitios Web"
        style={{ backgroundColor: DARK_RED, color: WHITE }}
      >
        <p
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {sitesService.number} — {sitesService.title}
        </p>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <div>
          <h2
            className="font-display font-light leading-[0.85] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)', color: WHITE }}
          >
            Sitios
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <p
          className="max-w-[50ch] font-sans leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', color: WHITE_DIM }}
        >
          {sitesService.description}
        </p>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        {/* Deliverables */}
        <div className="flex flex-wrap gap-[3vw]">
          {sitesService.deliverables.slice(0, 4).map((d) => (
            <div key={d} className="min-w-[180px] flex-1">
              <p
                className="flex items-start gap-3 font-sans leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="shrink-0 mt-1" style={{ color: WHITE_SOFT }}>—</span>
                {d}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <div className="mt-auto">
          <Link
            href={`/servicos/${sitesService.slug}`}
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest group px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            style={{ color: WHITE }}
          >
            Ver detalles
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </FlowSection>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 2 — SISTEMAS WEB
          Fundo: preto fosco (variação)
      ═══════════════════════════════════════════════════════ */}
      <FlowSection
        aria-label="Sistemas Web"
        style={{ backgroundColor: MATTE_BLACK_2, color: WHITE }}
      >
        <p
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: WHITE_SOFT }}
        >
          {sistemasService.number} — {sistemasService.title}
        </p>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        <div>
          <h2
            className="font-display font-light leading-[0.85] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)', color: WHITE }}
          >
            Sistemas
            <br />
            <span style={{ color: WHITE_DIM }}>Web</span>
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        <p
          className="max-w-[50ch] font-sans leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', color: WHITE_DIM }}
        >
          {sistemasService.description}
        </p>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        {/* Deliverables — 2 rows */}
        <div className="flex flex-wrap gap-[3vw]">
          {sistemasService.deliverables.slice(0, 4).map((d) => (
            <div key={d} className="min-w-[180px] flex-1">
              <p
                className="flex items-start gap-3 font-sans leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', color: 'rgba(245,243,238,0.75)' }}
              >
                <span className="shrink-0 mt-1" style={{ color: WHITE_SOFT }}>—</span>
                {d}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-[2vw] border-t border-white/[0.08]" style={{ borderStyle: 'solid' }} />

        <div className="mt-auto">
          <Link
            href={`/servicos/${sistemasService.slug}`}
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest group px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            style={{ color: `rgb(230, 57, 70)` }}
          >
            Ver detalles
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </FlowSection>

      {/* ═══════════════════════════════════════════════════════
          SEÇÃO 3 — AUTOMAÇÃO
          Fundo: vermelho escuro (variação mais profunda)
      ═══════════════════════════════════════════════════════ */}
      <FlowSection
        aria-label="Automatización"
        style={{ backgroundColor: DARK_RED_2, color: WHITE }}
      >
        <p
          className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {automacaoService.number} — {automacaoService.title}
        </p>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <div>
          <h2
            className="font-display font-light leading-[0.85] uppercase tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 14rem)', color: WHITE }}
          >
            Auto
            <br />
            <span style={{ color: WHITE_DIM }}>matización</span>
          </h2>
        </div>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <p
          className="max-w-[50ch] font-sans leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.75rem)', color: WHITE_DIM }}
        >
          {automacaoService.description}
        </p>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        {/* Deliverables */}
        <div className="flex flex-wrap gap-[3vw]">
          {automacaoService.deliverables.slice(0, 4).map((d) => (
            <div key={d} className="min-w-[180px] flex-1">
              <p
                className="flex items-start gap-3 font-sans leading-relaxed"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)', color: 'rgba(255,255,255,0.75)' }}
              >
                <span className="shrink-0 mt-1" style={{ color: WHITE_SOFT }}>—</span>
                {d}
              </p>
            </div>
          ))}
        </div>

        <hr className="my-[2vw] border-t border-white/20" style={{ borderStyle: 'solid' }} />

        <div className="mt-auto">
          <Link
            href={`/servicos/${automacaoService.slug}`}
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest group px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            style={{ color: WHITE }}
          >
            Ver detalles
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
