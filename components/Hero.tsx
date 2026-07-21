'use client';

import { ArrowDown, Download, Github, Mail, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile photo */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-xl opacity-50 animate-pulse-slow" />
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 glow-blue">
              <img
                src="/images/ChatGPT_Image_15_feb_2026,_06_32_30_p.m..png"
                alt="Luis Tomás"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-[#080d1a]" />
          </div>
        </div>

        {/* Name and title */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-blue-400 font-medium text-sm sm:text-base mb-3 tracking-wide uppercase">
            Disponible para proyectos remotos
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Luis Tomás</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 mb-6">
            Flutter Developer · Mobile Engineer · Clean Architecture
          </h2>
        </div>

        {/* Bio one-liner */}
        <p
          className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
        >
          4+ años construyendo aplicaciones móviles escalables para Android, iOS y Web.
          Especialista en Clean Architecture, Riverpod y CI/CD — de Cuba para el mundo.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://wa.me/+5355239838"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar por WhatsApp
          </a>
          <a
            href="/Luis_Tomás_CVi.pdf"
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-semibold hover:border-blue-500/50 hover:scale-105 transition-all duration-200"
          >
            <Download className="w-5 h-5 group-hover:text-blue-400 transition" />
            Descargar CV
          </a>
        </div>

        {/* Social icons */}
        <div
          className="flex justify-center gap-6 mt-10 animate-fade-in-up"
          style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <a
            href="https://github.com/ISTO21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:luistomaslezcano@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-blue-400 transition animate-float"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
