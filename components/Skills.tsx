'use client';

import {
  Code2,
  Layers,
  GitBranch,
  Smartphone,
  Database,
  Cloud,
  Languages,
  Boxes,
  Cpu,
  MapPin,
} from 'lucide-react';

const TECH_SKILLS = [
  { name: 'Dart', level: 90 },
  { name: 'Flutter', level: 92 },
  { name: 'Kotlin', level: 70 },
  { name: 'Java', level: 65 },
  { name: 'SQL', level: 75 },
  { name: 'C++', level: 60 },
];

const FRAMEWORKS = [
  { name: 'Riverpod', icon: Boxes },
  { name: 'BLoC', icon: Layers },
  { name: 'Provider', icon: Cpu },
  { name: 'Clean Architecture', icon: GitBranch },
];

const TOOLS = [
  { name: 'Firebase', icon: Cloud },
  { name: 'Supabase', icon: Database },
  { name: 'GitHub Actions', icon: GitBranch },
  { name: 'Mapbox', icon: MapPin },
  { name: 'Figma', icon: Layers },
  { name: 'Jira', icon: Code2 },
];

const METHODOLOGIES = ['SOLID', 'Clean Architecture', 'Scrum', 'CI/CD', 'TDD', 'Git Flow'];

const LANGUAGES = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio' },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 section-padding">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="opacity-0-init mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <Smartphone className="w-4 h-4" />
            <span className="uppercase tracking-wider">Habilidades</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Mi <span className="gradient-text">stack tecnológico</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Tecnologías, frameworks y herramientas que uso a diario para construir
            productos digitales de alto rendimiento.
          </p>
        </div>

        {/* Tech skills with bars */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {TECH_SKILLS.map((skill, i) => (
            <div
              key={skill.name}
              className="opacity-0-init glass-card-hover rounded-xl p-5"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="text-sm text-blue-400 font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Frameworks */}
        <div className="opacity-0-init mb-12" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Frameworks & Arquitectura
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FRAMEWORKS.map((fw) => (
              <div
                key={fw.name}
                className="glass-card-hover rounded-xl p-4 flex flex-col items-center gap-2 text-center"
              >
                <fw.icon className="w-6 h-6 text-blue-400" />
                <span className="text-sm font-medium text-slate-200">{fw.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="opacity-0-init mb-12" style={{ transitionDelay: '0.3s' }}>
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Herramientas
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="glass-card-hover rounded-xl p-4 flex items-center gap-3"
              >
                <tool.icon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-200">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies + Languages */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Methodologies */}
          <div className="opacity-0-init" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Metodologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {METHODOLOGIES.map((m) => (
                <span
                  key={m}
                  className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="opacity-0-init" style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Languages className="w-4 h-4" />
              Idiomas
            </h3>
            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card-hover rounded-xl p-4 flex items-center justify-between"
                >
                  <span className="font-medium text-slate-200">{lang.name}</span>
                  <span className="text-sm text-blue-400">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
