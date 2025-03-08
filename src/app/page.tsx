'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Utilities
import { scrollToSection } from '@/utils/animations';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Check for hash in URL and scroll to appropriate section
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substring(1);
      if (hash) {
        scrollToSection(hash);
      }
    }
  }, []);

  return (
    <main className="relative">
      {/* Progress Bar - now above the navbar */}
      <motion.div 
        className="progress-bar"
        style={{ scaleX, transformOrigin: '0%' }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us Section */}
      <WhyChooseUs />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}