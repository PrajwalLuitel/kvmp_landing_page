import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { servicesData } from '@/utils/images';
import { scrollToSection } from '@/utils/animations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Footer links
  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' }
  ];
  
  const serviceLinks = [
    'IT Consulting',
    'Regulatory Compliance',
    'Digital Transformation',
    'Cybersecurity & Risk'
  ];
  
  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy'
  ];

  return (
    <footer className="bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-3/4 bg-blue-500 opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-300 opacity-5 rounded-tr-full"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" 
           style={{ 
             backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
             backgroundSize: '30px 30px' 
           }}>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Company Info Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-16"
          >
            <div className="flex items-center mb-8">
              <div className="mr-3 relative w-14 h-14 flex items-center justify-center p-2 rounded-md bg-white">
                <Image
                  src="/images/logo.svg"
                  alt="KVMP Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold">KVMP Info Systems</h2>
            </div>
            
            <p className="text-gray-300 mb-10 leading-relaxed text-lg">
              Empowering Banks with Cutting-Edge IT Solutions & Project Management Excellence
            </p>
            
            <div className="flex gap-4 mb-10">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full bg-blue-900/30 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} className="text-white" />
                </motion.a>
              ))}
            </div>
            
            <div className="space-y-5 text-gray-300 text-lg">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1 text-blue-400 flex-shrink-0" />
                <span>1 University Ave, 3rd Floor<br />Toronto, ON M5J 2P1</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:Prashant@kvmpinfo.com" className="hover:text-blue-300 transition-colors">
                  Prashant@kvmpinfo.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+14161234567" className="hover:text-blue-300 transition-colors">
                  +1 (416) 123-4567
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Links Section */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row sm:justify-between lg:w-full gap-10 sm:gap-8"
          >
            {/* Quick Links */}
            <div className="sm:w-1/4">
              <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-800">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.id} className="transition-transform">
                    <button 
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white flex items-center group text-lg"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div className="sm:w-1/4">
              <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-800">Services</h3>
              <ul className="space-y-4">
                {serviceLinks.map((service, index) => (
                  <li key={index} className="transition-transform">
                    <a 
                      href="#services" 
                      className="text-gray-300 hover:text-white flex items-center group text-lg"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter and Legal */}
            <div className="sm:w-1/3">
              <h3 className="text-xl font-bold mb-8 pb-3 border-b border-blue-800">Stay Connected</h3>
              <p className="text-gray-300 text-lg mb-4">Subscribe to our newsletter</p>
              
              <div className="relative mb-10">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-blue-900/20 border border-blue-900/50 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-blue-600 hover:bg-blue-700 rounded-r-md transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
              </div>
                    <div className='sm:w-1/4'>      
              <h3 className="text-xl font-bold mb-6 pb-3 border-b border-blue-800">Legal</h3>
              <ul className="space-y-4">
                {legalLinks.map((link, index) => (
                  <li key={index} className="transition-transform">
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-white flex items-center group text-lg"
                    >
                      <span className="w-0 group-hover:w-3 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Copyright bar with gradient */}
      <div className="relative bg-gradient-to-r from-blue-900/40 to-blue-800/40 backdrop-blur-sm py-5">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base"
          >
            &copy; {currentYear} KVMP Info Systems Inc. All rights reserved.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 text-base mt-3 sm:mt-0"
          >
            Designed for excellence in banking technology
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;