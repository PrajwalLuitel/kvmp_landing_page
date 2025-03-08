import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { whyChooseUsData } from '@/utils/images';
import { scrollToSection } from '@/utils/animations';

const WhyChooseUs = () => {
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
  
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4
      }
    }
  };
  
  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i:any) => ({ 
      x: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: i * 0.1
      }
    })
  };

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-50 opacity-50 -z-10"></div>
      <div className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-indigo-50 opacity-70 -z-10"></div>
      <div className="absolute top-40 left-1/3 w-16 h-16 rounded-full bg-blue-100 opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Why Choose KVMP</h2>
            <div className="h-1 w-24 bg-blue-600 rounded mb-8 mx-auto"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our commitment to excellence sets us apart in the banking technology sector. 
              We bring unparalleled expertise and innovation to every project.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 order-2 lg:order-1"
            >
              <motion.ul
                variants={listVariants}
                className="space-y-12"
              >
                {whyChooseUsData.map((item, index) => (
                  <motion.li
                    key={item.id}
                    custom={index}
                    variants={listItemVariants}
                    className="bg-white rounded-xl p-6 shadow-md border border-blue-50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 mr-5">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                          <Check className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <motion.div
                variants={itemVariants}
                className="mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all"
                  onClick={() => scrollToSection('contact')}
                >
                  Partner With Us
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0"
            >
              <div className="relative">
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500 opacity-10 rounded-lg -z-10"
                  animate={{ 
                    rotate: [0, 10, 0], 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut"
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500 opacity-10 rounded-lg -z-10"
                  animate={{ 
                    rotate: [0, -10, 0], 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    ease: "easeInOut",
                    delay: 1
                  }}
                ></motion.div>
                
                <div className="relative overflow-hidden w-full h-[32rem] rounded-xl shadow-2xl">
                  <Image
                    src="/images/why-us-image.jpg"
                    alt="KVMP Excellence"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  
                  {/* Stats overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">10+</h4>
                        <p className="text-gray-800">Years Experience</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">50+</h4>
                        <p className="text-gray-800">Projects Completed</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">20+</h4>
                        <p className="text-gray-800">Banking Clients</p>
                      </motion.div>
                      
                      <motion.div 
                        className="bg-white/90 backdrop-blur-sm p-4 rounded-lg"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                      >
                        <h4 className="text-2xl sm:text-3xl font-bold text-blue-600">99%</h4>
                        <p className="text-gray-800">Client Satisfaction</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Divider to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="rgba(240, 249, 255, 0.6)" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,213.3C384,235,480,245,576,234.7C672,224,768,192,864,186.7C960,181,1056,203,1152,192C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;