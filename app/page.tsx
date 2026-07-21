'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export default function Home() {
  useScrollAnimation();

  return (
    <main className="relative min-h-screen bg-[#080d1a] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
