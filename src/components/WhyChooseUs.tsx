import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader, FeatureItem } from '@/components/SectionComponents';
import { whyChooseUsData } from '@/utils/images';
import { fadeIn, scrollToSection } from '@/utils/animations';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section section-light">
      <div className="container mx-auto">
        <SectionHeader 
          title="Why Choose KVMP" 
          subtitle="Our commitment to excellence sets us apart in the banking technology sector" 
          centered={false}
        />
        
        <div className="flex flex-col md:flex-row gap-16 mt-24">
          <motion.div 
            className="md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn('right')}
          >
            <div className="relative w-full h-96 md:h-[32rem] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/why-us-image.jpg"
                alt="KVMP Excellence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            {whyChooseUsData.map((item, index) => (
              <FeatureItem 
                key={item.id}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
            
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn('up', 0.8)}
              className="mt-12"
            >
              <motion.button
                className="accent-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
              >
                Partner With Us
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Simple divider */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
    </section>
  );
};

export default WhyChooseUs;