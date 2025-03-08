'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Mail, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { SectionHeader, ServiceCard, FeatureItem, CTAButton } from '@/components/SectionComponents';

// Utilities
import { servicesData, whyChooseUsData, backgrounds } from '@/utils/images';
import { fadeIn, staggerContainer, scrollToSection } from '@/utils/animations';
import Footer from '@/components/Footer';

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
      
      {/* Services Section */}
      <section id="services" className="section section-dark">
        <div className="container mx-auto">
          <SectionHeader 
            title="Our Services" 
            subtitle="We offer comprehensive IT solutions and project management services tailored specifically for the banking sector" 
            centered={false}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24 mb-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
        
        {/* Simple divider */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-white"></div>
      </section>
      
      {/* Why Choose Us Section */}
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
      
      {/* Contact Section */}
      <section id="contact" className="section section-accent">
        <div className="container mx-auto">
          <SectionHeader 
            title="Contact Us" 
            subtitle="Let's shape the future of banking technology together" 
            centered={false}
          />
          
          <div className="flex flex-col md:flex-row gap-12 mt-24">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn('right')}
            >
              <div className="bg-white p-10 rounded-xl shadow-xl">
                <h3 className="text-2xl font-semibold mb-8 text-blue-600">Send us a message</h3>
                <form className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-3 text-lg">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="form-input" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-3 text-lg">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-3 text-lg">Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="form-input" 
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="accent-button w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 mt-8 md:mt-0"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn('left')}
            >
              <div className="bg-white p-10 rounded-xl shadow-xl h-full">
                <h3 className="text-2xl font-semibold mb-10 text-blue-600">Get in Touch</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-4 rounded-full mr-6">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Office Address</h4>
                      <p className="text-gray-600 text-lg leading-relaxed">1 University Ave, 3rd Floor, Toronto, ON M5J 2P1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-4 rounded-full mr-6">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-900 mb-2">Email</h4>
                      <p className="text-gray-600 text-lg">Prashant@kvmpinfo.com</p>
                    </div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="text-xl font-medium text-gray-900 mb-6">Connect With Us</h4>
                    <div className="flex space-x-6">
                      {[
                        { name: 'facebook', icon: Facebook },
                        { name: 'twitter', icon: Twitter },
                        { name: 'linkedin', icon: Linkedin },
                        { name: 'instagram', icon: Instagram }
                      ].map((social) => (
                        <motion.a
                          key={social.name}
                          href="#"
                          className="bg-gray-100 p-4 rounded-full hover:bg-blue-50"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(14, 165, 233, 0.1)' }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {React.createElement(social.icon, { className: "h-6 w-6 text-blue-600" })}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer/>
    </main>
  );
}