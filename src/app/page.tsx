"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };
  


  return (
    <main className="flex flex-col w-full min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-purple-500/30">
      
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative z-20 bg-slate-950">
         <Services />
     </section>

      {/* PROCESS SECTION */}
      <Process />
      <Portfolio />
      <Contact />
      <Footer />

    </main>
  );
}