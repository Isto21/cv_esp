'use client';

import { ExternalLink, Star, FolderGit2 } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Andrea',
    description:
      'App de mensajería en tiempo real con chat, notificaciones push y gestión de contactos. Publicada en Google Play Store.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Push Notifications'],
    link: 'https://play.google.com/store/apps/details?id=com.idoogroup.andrea',
    linkLabel: 'Ver en Play Store',
    featured: true,
  },
  {
    name: 'Mi Barbero',
    description:
      'Plataforma de gestión para barberías: reservas, catálogo de servicios y perfil de profesionales.',
    tags: ['Flutter', 'Supabase', 'Mapbox', 'Clean Architecture'],
    link: 'https://apklis.com/search?q=mi+barbero',
    linkLabel: 'Ver en APKLis',
    featured: false,
  },
  {
    name: 'Mi Manicura',
    description:
      'App de servicios de manicura con reservas, catálogo y pagos integrados para clientes y profesionales.',
    tags: ['Flutter', 'Firebase', 'Payments', 'BLoC'],
    link: 'https://apklis.com/search?q=mi+manicura',
    linkLabel: 'Ver en APKLis',
    featured: false,
  },
  {
    name: 'GiChat',
    description:
      'Cliente de mensajería ligero con encriptación, grupos y soporte multimedia. Enfoque en rendimiento y UX.',
    tags: ['Flutter', 'Realtime', 'WebRTC', 'Provider'],
    link: 'https://github.com/ISTO21',
    linkLabel: 'Ver en GitHub',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="opacity-0-init mb-16 text-center">
          <div className="flex items-center justify-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <FolderGit2 className="w-4 h-4" />
            <span className="uppercase tracking-wider">Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Trabajos <span className="gradient-text">destacados</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Una selección de proyectos que he construido y publicado. Cada uno representa
            un reto técnico diferente y una solución real para usuarios finales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="opacity-0-init glass-card-hover rounded-2xl p-6 flex flex-col group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20">
                  <FolderGit2 className="w-6 h-6 text-blue-400" />
                </div>
                {project.featured && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    Destacado
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-blue-400 transition">
                {project.name}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-cyan-400 transition mt-auto"
              >
                {project.linkLabel}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 mt-10 opacity-0-init" style={{ transitionDelay: '0.5s' }}>
          Estos son ejemplos basados en mi CV. Puedes editar los enlaces y descripciones en{' '}
          <code className="text-blue-400 text-xs">components/Projects.tsx</code>.
        </p>
      </div>
    </section>
  );
}
