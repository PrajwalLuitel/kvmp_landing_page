import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // For triggering animations when the section comes into view
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        staggerChildren: 0.1,
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
  
  const socialIcons = [
    { name: 'facebook', icon: Facebook, color: 'hover:bg-blue-600' },
    { name: 'twitter', icon: Twitter, color: 'hover:bg-blue-400' },
    { name: 'linkedin', icon: Linkedin, color: 'hover:bg-blue-700' },
    { name: 'instagram', icon: Instagram, color: 'hover:bg-pink-600' }
  ];
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-blue-50/60">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-blue-100/30"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-30" 
             style={{ 
               backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px)',
               backgroundSize: '30px 30px' 
             }}>
        </div>
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Contact Us</h2>
            <div className="h-1 w-24 bg-blue-600 rounded mb-8 mx-auto"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Let's shape the future of banking technology together. Reach out to discuss how we can help transform your financial institution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl border border-blue-100">
                <h3 className="text-2xl font-semibold mb-8 text-blue-600">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-gray-700 mb-3 text-lg">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-50/30 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="block text-gray-700 mb-3 text-lg">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-blue-50/30 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="block text-gray-700 mb-3 text-lg">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5} 
                      className="w-full px-4 py-3 bg-blue-50/30 border border-blue-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-xl shadow-xl text-white h-full">
                <h3 className="text-2xl font-semibold mb-10">Get in Touch</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="bg-blue-500/30 p-4 rounded-full mr-6">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-3">Office Address</h4>
                      <p className="text-blue-100 text-lg leading-relaxed">
                        1 University Ave, 3rd Floor<br />
                        Toronto, ON M5J 2P1<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/30 p-4 rounded-full mr-6">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-3">Email</h4>
                      <p className="text-blue-100 text-lg">
                        <a href="mailto:Prashant@kvmpinfo.com" className="hover:text-white transition-colors">
                          Prashant@kvmpinfo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-500/30 p-4 rounded-full mr-6">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium mb-3">Phone</h4>
                      <p className="text-blue-100 text-lg">
                        <a href="tel:+14161234567" className="hover:text-white transition-colors">
                          +1 (416) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-6">Connect With Us</h4>
                    <div className="flex space-x-6">
                      {socialIcons.map((social) => (
                        <motion.a
                          key={social.name}
                          href="#"
                          className="bg-blue-500/30 p-4 rounded-full hover:bg-blue-400/50"
                          whileHover={{ 
                            scale: 1.1,
                            y: -3
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {React.createElement(social.icon, { className: "h-6 w-6 text-white" })}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 border border-blue-100"
              >
                <div className="w-full h-full bg-blue-50 relative">
                  {/* This would be replaced with an actual Google Maps embed */}
                  <div className="w-full h-full flex items-center justify-center bg-blue-50 relative overflow-hidden">
                    <div className="z-10 text-center">
                      <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                      <p className="text-gray-700 font-medium">1 University Ave, Toronto</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Wave divider to footer */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#0f172a" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,64C960,53,1056,75,1152,90.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;