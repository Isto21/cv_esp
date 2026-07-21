'use client';

import { Briefcase, MapPin, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    role: 'Semi-Senior Flutter Developer',
    company: 'Idoo Group',
    location: 'Remoto',
    period: 'Jul 2024 — Presente',
    current: true,
    achievements: [
      'Desarrollo y mantenimiento de aplicaciones Flutter con Clean Architecture y Riverpod.',
      'Implementación de CI/CD con GitHub Actions para despliegues automáticos a producción.',
      'Colaboración con equipos multidisciplinarios usando metodologías ágiles (Scrum).',
    ],
  },
  {
    role: 'Flutter Developer',
    company: 'AthenDat SRL',
    location: 'Remoto',
    period: 'Ene 2023 — Jul 2024',
    current: false,
    achievements: [
      'Desarrollo de apps móviles con Flutter para clientes internacionales.',
      'Integración de Firebase, mapas interactivos (Mapbox) y pasarelas de pago.',
      'Optimización del rendimiento y reducción de tiempos de carga en un 40%.',
    ],
  },
  {
    role: 'Flutter Developer Freelance',
    company: 'Freelance',
    location: 'Remoto',
    period: '2022 — Presente',
    current: false,
    achievements: [
      'Creación de apps a medida para clientes: mensajería, gestión y servicios.',
      'Publicación de 7+ apps en Google Play Store y APKLis.',
      'Mantenimiento continuo y soporte post-lanzamiento de productos.',
    ],
  },
  {
    role: 'Asistente de Investigación',
    company: 'CIGED',
    location: 'La Habana, Cuba',
    period: '2022 — Presente',
    current: false,
    achievements: [
      'Participación en proyectos de investigación aplicada en informática.',
      'Desarrollo de soluciones de software para la gestión institucional.',
      'Apoyo en la documentación técnica y publicación de resultados.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="opacity-0-init mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <Briefcase className="w-4 h-4" />
            <span className="uppercase tracking-wider">Experiencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Mi <span className="gradient-text">trayectoria profesional</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/30 to-transparent sm:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } opacity-0-init`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 mt-6">
                  <div
                    className={`w-4 h-4 rounded-full border-2 border-[#080d1a] ${
                      exp.current ? 'bg-green-500 glow-blue-sm' : 'bg-blue-500'
                    }`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block sm:w-1/2" />

                {/* Card */}
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className="glass-card-hover rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-100">
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 font-medium text-sm">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-medium whitespace-nowrap">
                          Actual
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((a, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-slate-300 leading-relaxed"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
