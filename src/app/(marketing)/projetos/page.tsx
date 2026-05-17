'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Reveal } from '@/components/primitives/RevealText';
import { ProjectCard } from '@/components/primitives/ProjectCard';
import { projects, projectCategories } from '@/content/projects';
import type { ProjectCategory } from '@/content/projects';
import { cn } from '@/lib/utils';

type Filter = 'Todos' | ProjectCategory;

export default function ProjetosPage() {
  const [active, setActive] = useState<Filter>('Todos');

  const filtered = active === 'Todos'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[45vh] flex items-end border-b border-white/[0.06]">
        <div className="container pb-16 pt-[120px]">
          <Reveal>
            <p className="section-label mb-6">PROYECTOS</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-light leading-tight" style={{ fontSize: 'var(--fs-h1)' }}>
              Trabajo seleccionado.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Filtros */}
      <section className="section">
        <div className="container">
          {/* Pills de filtro */}
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat as Filter)}
                className={cn(
                  'font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300',
                  active === cat
                    ? 'bg-red border-red text-paper'
                    : 'border-white/20 text-paper-soft hover:border-paper/40 hover:text-paper'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid com layout animation */}
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-display text-2xl font-light text-paper-soft">
                Ningún proyecto en esa categoría aún.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
