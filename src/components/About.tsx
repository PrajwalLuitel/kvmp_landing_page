import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader, CTAButton } from '@/components/SectionComponents';
import { fadeIn, staggerContainer, scrollToSection } from '@/utils/animations';

const About = () => {
  return (
    <section id="about" className="section section-light">
      <div className="container mx-auto">
        <SectionHeader 
          title="Who We Are" 
          subtitle="KVMP Info Systems Inc. is a premier IT consulting and project management outsourcing firm, specializing in delivering innovative technology solutions tailored for the banking sector in Canada." 
        />
        
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-16 mt-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="md:w-1/2"
            variants={fadeIn('right')}
          >
            <h3 className="text-2xl font-semibold mb-8">Empowering Banks with <span className="text-blue-600">Cutting-Edge IT Solutions</span></h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              With a deep understanding of financial institutions' needs, we help banks navigate the evolving digital landscape, enhance operational efficiency, and drive sustainable growth.
            </p>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              KVMP provides niche project management resources and specializes in complex enterprise-wide regulatory programs and projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <CTAButton text="Learn More" onClick={() => scrollToSection('services')} />
              <motion.button
                className="accent-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            variants={fadeIn('left')}
          >
            <div className="relative w-full h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image.jpg"
                alt="KVMP Info Systems Team"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;