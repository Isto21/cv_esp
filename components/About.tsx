'use client';

import { GraduationCap, Sparkles } from 'lucide-react';

const STATS = [
  { value: '4+', label: 'Años de experiencia' },
  { value: '7+', label: 'Apps publicadas' },
  { value: '1,000+', label: 'Descargas totales' },
  { value: '3', label: 'Clientes activos' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="opacity-0-init mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-wider">Sobre mí</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Un desarrollador enfocado en <span className="gradient-text">calidad y escalabilidad</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-5 opacity-0-init" style={{ transitionDelay: '0.1s' }}>
            <p className="text-lg text-slate-300 leading-relaxed">
              Soy <span className="text-blue-400 font-medium">Luis Tomás</span>, ingeniero en
              ciencias informáticas y desarrollador Flutter con más de 4 años de experiencia
              creando aplicaciones móviles para Android, iOS y Web. Mi enfoque se centra en
              escribir código limpio, mantenible y escalable siguiendo principios SOLID y
              Clean Architecture.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              He trabajado en proyectos que van desde apps de mensajería en tiempo real con
              Firebase hasta plataformas de gestión empresarial con mapas interactivos y
              pagos integrados. Disfruto resolver problemas complejos y transformar ideas
              en productos digitales que las personas usan a diario.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Actualmente trabajo de forma remota desde Cuba, colaborando con equipos
              internacionales. Soy un aprendiz continuo, siempre explorando nuevas
              tecnologías y mejores prácticas para entregar productos de alto impacto.
            </p>
          </div>

          {/* Education card */}
          <div className="opacity-0-init" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-100">Educación</h3>
              </div>
              <p className="text-slate-200 font-medium">Ingeniero en Ciencias Informáticas</p>
              <p className="text-sm text-slate-400 mt-1">Universidad de Ciencias Informáticas</p>
              <p className="text-sm text-blue-400 mt-2">2021 — 2024</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="opacity-0-init glass-card-hover rounded-2xl p-6 text-center"
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
