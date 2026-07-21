'use client';

import { ArrowUp, Github, Heart, Mail, MessageCircle } from 'lucide-react';

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'luistomaslezcano@gmail.com',
    href: 'mailto:luistomaslezcano@gmail.com',
    action: 'Enviar correo',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+52 55 2398 3838',
    href: 'https://wa.me/+5355239838',
    action: 'Abrir chat',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/ISTO21',
    href: 'https://github.com/ISTO21',
    action: 'Ver perfil',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 section-padding">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="opacity-0-init mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            ¿Construimos algo <span className="gradient-text">genial juntos?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Estoy disponible para proyectos freelance y posiciones remotas.
            Escríbeme y hablemos sobre tu próxima idea.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          {CONTACTS.map((contact, i) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="opacity-0-init glass-card-hover rounded-2xl p-6 flex flex-col items-center text-center group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 text-blue-400 mb-4 group-hover:scale-110 transition">
                <contact.icon className="w-6 h-6" />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                {contact.label}
              </p>
              <p className="text-sm font-medium text-slate-200 mb-3 break-all">
                {contact.value}
              </p>
              <span className="text-sm text-blue-400 font-medium flex items-center gap-1">
                {contact.action}
              </span>
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0-init" style={{ transitionDelay: '0.4s' }}>
          <a
            href="https://wa.me/+5355239838"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 transition"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
          <a
            href="mailto:luistomaslezcano@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold hover:border-blue-500/50 hover:scale-105 transition"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative max-w-5xl mx-auto mt-24 pt-8 border-t border-blue-500/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} Luis Tomás · Hecho con
            <Heart className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            y Flutter mindset
          </p>
          <a
            href="#hero"
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition"
          >
            Volver arriba
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </footer>
    </section>
  );
}
