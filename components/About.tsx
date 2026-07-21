'use client';

import { GraduationCap, Sparkles } from 'lucide-react';

const STATS = [
  { value: '4+', label: 'Years of experience' },
  { value: '7+', label: 'Apps published' },
  { value: '1,000+', label: 'Total downloads' },
  { value: '3', label: 'Active clients' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="opacity-0-init mb-16">
          <div className="flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-wider">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A developer focused on <span className="gradient-text">quality and scalability</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Bio */}
          <div className="lg:col-span-2 space-y-5 opacity-0-init" style={{ transitionDelay: '0.1s' }}>
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m <span className="text-blue-400 font-medium">Luis Tomás</span>, a computer science engineer and Flutter developer with over 4 years of experience building mobile applications for Android, iOS, and Web. My focus is on writing clean, maintainable, and scalable code following SOLID principles and Clean Architecture.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I’ve worked on projects ranging from real-time messaging apps with Firebase to business management platforms with interactive maps and integrated payments. I enjoy solving complex problems and turning ideas into digital products people use every day.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I currently work remotely from Cuba, collaborating with international teams. I’m a lifelong learner, always exploring new technologies and best practices to deliver high-impact products.
            </p>
          </div>

          {/* Education card */}
          <div className="opacity-0-init" style={{ transitionDelay: '0.2s' }}>
            <div className="glass-card-hover rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-100">Education</h3>
              </div>
              <p className="text-slate-200 font-medium">Computer Science Engineer</p>
              <p className="text-sm text-slate-400 mt-1">University of Computer Science</p>
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
