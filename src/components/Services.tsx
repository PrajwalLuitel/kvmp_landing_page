import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SectionHeader, ServiceCard } from '@/components/SectionComponents';
import { servicesData } from '@/utils/images';
import { useInView } from 'react-intersection-observer';

const Services: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="relative py-16 bg-white overflow-hidden  -mt-14">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="absolute top-10 left-5 w-40 h-40 rounded-full bg-blue-100 opacity-40 blur-2xl"></div>
      <div className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10 pb-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeader 
            title="Our Services" 
            subtitle="We offer comprehensive IT solutions and project management services tailored specifically for the banking sector" 
            centered={true} 
          />
        </motion.div>

        {/* Services flexbox with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row md:flex-wrap gap-8 mt-16"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card-wrapper group w-full md:w-[calc(50%-1rem)]"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <div className="h-full p-8 bg-white rounded-xl transition-all duration-300 
                shadow-[0_10px_30px_rgba(0,0,0,0.03)] 
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] 
                border border-gray-100 
                hover:border-blue-100
                group-hover:translate-y-[-5px]">
                <ServiceCard service={service} index={index} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="w-full h-12 text-gray-50" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25" 
            className="fill-blue-100"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5" 
            className="fill-blue-50"
          ></path>
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
            className="fill-gray-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;