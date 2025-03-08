import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { scrollToSection } from '@/utils/animations';

const About = () => {
  // For triggering animations when the section comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '50+', label: 'Banking Clients' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-30 -z-10"></div>
      <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-blue-100 rounded-full opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-blue-100 rounded-full opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center justify-between gap-16"
        >
          <motion.div 
            className="md:w-1/2 order-2 md:order-1"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
              <div className="h-1 w-24 bg-blue-600 rounded mb-8"></div>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8 leading-relaxed">
              KVMP Info Systems Inc. is a premier IT consulting and project management outsourcing firm, specializing in delivering innovative technology solutions tailored for the banking sector in Canada.
            </motion.p>
            
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6 text-gray-800">
              Empowering Banks with <span className="text-blue-600">Cutting-Edge IT Solutions</span>
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8 leading-relaxed">
              With a deep understanding of financial institutions' needs, we help banks navigate the evolving digital landscape, enhance operational efficiency, and drive sustainable growth.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-10 leading-relaxed">
              KVMP provides niche project management resources and specializes in complex enterprise-wide regulatory programs and projects.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
              >
                Explore Our Services
              </motion.button>
              <motion.button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 opacity-10 rounded-xl -z-10"></div>
              
              {/* Main image with floating animation */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut" 
                }}
                className="relative w-full h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/about-image.jpg"
                  alt="KVMP Info Systems Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* Stats overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/80 to-transparent h-1/3"></div>
                
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="flex justify-between">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + (index * 0.2) }}
                        className="text-center"
                      >
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-blue-100">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Curved divider to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="rgba(240, 249, 255, 0.6)" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,160C672,160,768,192,864,197.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;