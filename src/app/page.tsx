
import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {

  return (
    <main className="flex flex-col w-full min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-purple-500/30">
      
      <Navbar />
      <Hero />

      <section className="relative z-20 bg-slate-950">
         <Services />
     </section>

      <Process />
      <Portfolio />
      <Contact />
      <Footer />

    </main>
  );
}