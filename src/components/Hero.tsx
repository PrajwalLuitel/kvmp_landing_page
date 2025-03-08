import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { scrollToSection } from '@/utils/animations';
import FloatingCard from './FloatingCard';

const Hero = () => {
  // Controls for staggered animations
  const controls = useAnimation();
  
  useEffect(() => {
    // Start the animation sequence when component mounts
    const sequence = async () => {
      await controls.start("visible");
    };
    
    sequence();
  }, [controls]);
  
  // Our service items for floating cards
  const serviceItems = [
    { title: 'IT Consulting', icon: 'briefcase', color: 'bg-blue-600' },
    { title: 'Regulatory Compliance', icon: 'shield-check', color: 'bg-indigo-600' },
    { title: 'Digital Transformation', icon: 'refresh-cw', color: 'bg-violet-600' },
    { title: 'Data Analytics', icon: 'bar-chart', color: 'bg-accent' },
    { title: 'Project Management', icon: 'clipboard-list', color: 'bg-emerald-600' }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle overlay effect */}
      <div className="particles"></div>
      
      <div className="container relative z-10 py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="order-2 md:order-1 text-left mt-8 md:mt-0 pr-0 md:pr-12"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6"
            >
              Transforming <br />
              <span className="text-blue-200">Banking Technology</span><br />
              For The Future
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed"
            >
              Cutting-edge IT solutions & project management excellence for Canada's leading financial institutions.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-5"
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="hero-button-primary"
              >
                Explore Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hero-button-secondary"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right side - 3D visual */}
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero-3d-element">
              <div className="hero-circle">
                <div className="hero-inner-circle">
                  <Image
                    src="/images/logo-light.svg"
                    alt="KVMP Logo"
                    width={120}
                    height={120}
                    className="logo-pulse"
                  />
                </div>
              </div>
              
              {/* Floating service cards */}
              {serviceItems.map((item, index) => (
                <FloatingCard 
                  key={item.title}
                  title={item.title}
                  iconName={item.icon}
                  colorClass={item.color}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,197.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;