import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { SectionHeader } from '@/components/SectionComponents';
import { fadeIn } from '@/utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ 
    type: '', // 'success' or 'error'
    message: '' 
  });

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Your message has been sent successfully!'
        });
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-3 text-lg">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-3 text-lg">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-3 text-lg">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="form-input w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="accent-button w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
  );
};

export default Contact;