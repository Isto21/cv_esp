'use client';

import { ExternalLink, FolderGit2, Star } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Andrea',
    description:
      'Real-time messaging app with chat, push notifications, and contact management. Published on Google Play Store.',
    tags: ['Flutter', 'Firebase', 'Riverpod', 'Push Notifications'],
    link: 'https://play.google.com/store/apps/details?id=com.npcs.andrea',
    linkLabel: 'View on Play Store',
    featured: true,
  },
  {
    name: 'Mi Barbero',
    description:
      'Management platform for barbershops: bookings, service catalog, and professional profiles.',
    tags: ['Flutter', 'Supabase', 'Mapbox', 'Clean Architecture'],
    link: 'https://apklis.com/search?q=mi+barbero',
    linkLabel: 'Ver en APKLis',
    featured: false,
  },
  {
    name: 'Mi Manicura',
    description:
      'Manicure services app with bookings, catalog, and integrated payments for clients and professionals.',
    tags: ['Flutter', 'Firebase', 'Payments', 'BLoC'],
    link: 'https://apklis.com/search?q=mi+manicura',
    linkLabel: 'Ver en APKLis',
    featured: false,
  },
  {
    name: 'GiChat',
    description:
      'Lightweight messaging client with encryption, groups, and multimedia support. Focus on performance and UX.',
    tags: ['Flutter', 'Realtime', 'WebRTC', 'Provider'],
    link: 'https://github.com/ISTO21',
    linkLabel: 'View on GitHub',
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
            <span className="uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects I’ve built and published. Each one represents a different technical challenge and a real solution for end users.
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
                    Featured
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
          These are examples based on my CV. You can edit the links and descriptions in{' '}
          <code className="text-blue-400 text-xs">components/Projects.tsx</code>.
        </p>
      </div>
    </section>
  );
}
