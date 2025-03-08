import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader, CTAButton } from '@/components/SectionComponents';
import { scrollToSection } from '@/utils/animations';

const About = () => {
  // Refs for animations
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const statsRef = React.useRef<HTMLDivElement>(null);
  
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth spring physics for scroll animations
  const smoothScrollYProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  // More intense image animations
  const imageScale = useTransform(smoothScrollYProgress, [0, 1], [1, 1.3]);
  const imageY = useTransform(smoothScrollYProgress, [0, 1], [0, -40]);
  const imageOpacity = useTransform(smoothScrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);
  
  // Stats counter animation
  const [isCounting, setIsCounting] = React.useState(false);
  
  useEffect(() => {
    if (isStatsInView && !isCounting) {
      setIsCounting(true);
    }
  }, [isStatsInView, isCounting]);
  
  return (
    <section 
      id="about" 
      className="section relative overflow-hidden py-20 md:py-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Consistently left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <SectionHeader 
            title="Who We Are" 
            subtitle="KVMP Info Systems Inc. is a premier IT consulting and project management outsourcing firm, specializing in delivering innovative technology solutions tailored for the banking sector in Canada." 
          />
        </motion.div>
        
        {/* Main Content Area - Flexbox with consistent alignment */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content Column - Left aligned consistently */}
          <motion.div 
            className="w-full lg:w-1/2"
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Empowering Banks with{' '}
              <motion.span 
                className="text-gradient inline-block"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 0%" }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  background: "linear-gradient(90deg, #0e286a, #112c71, #17337d)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Cutting-Edge IT Solutions
              </motion.span>
            </h3>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With a deep understanding of financial institutions' needs, we help banks navigate the evolving digital landscape, enhance operational efficiency, and drive sustainable growth.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              KVMP provides niche project management resources and specializes in complex enterprise-wide regulatory programs and projects.
            </motion.p>
            
            <motion.div 
              className="flex flex-row gap-5 mb-6"
              initial={{ opacity: 0, y: 15 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <CTAButton text="Learn More" onClick={() => scrollToSection('services')} />
              <motion.button
                className="accent-button group relative overflow-hidden py-3 px-6 rounded-xl bg-transparent text-primary-600 dark:text-primary-400 font-medium transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
              >
                <span className="relative z-10">Contact Us</span>
                <motion.div 
                  className="absolute inset-0 bg-primary-500/10 -translate-x-full"
                  whileHover={{ translateX: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Image Column - Improved aspect ratio */}
          <motion.div 
            className="w-full lg:w-1/2 md:-translate-y-[36%]"
            initial={{ opacity: 0, x: 30 }}
            animate={isContentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              {/* Image container with enhanced parallax effect */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  scale: imageScale,
                  y: imageY,
                  opacity: imageOpacity
                }}
              >
                <Image
                  src="/images/about-image.jpg"
                  alt="KVMP Info Systems Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Minimal clean overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
              
              {/* Subtle border for a refined touch */}
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
             {/* Modern wave divider */}
      
        
        {/* Stats Section */}
        <motion.div
          className="mt-20 pt-12"
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Consistent left-aligned stat items */}
            <StatCounter 
              value={15} 
              label="Years Experience"
              isActive={isCounting}
              delay={0}
            />
            <StatCounter 
              value={200} 
              label="Projects Completed"
              isActive={isCounting}
              delay={0.15}
              suffix="+"
            />
            <StatCounter 
              value={50} 
              label="Banking Clients"
              isActive={isCounting}
              delay={0.3}
              suffix="+"
            />
            <StatCounter 
              value={98} 
              label="Client Satisfaction"
              isActive={isCounting}
              delay={0.45}
              suffix="%"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Simplified, minimal stat counter component
const StatCounter = ({ 
  value, 
  label, 
  suffix = "", 
  isActive = false,
  delay = 0
}: { 
  value: number, 
  label: string, 
  suffix?: string,
  isActive: boolean,
  delay?: number
}) => {
  const [displayValue, setDisplayValue] = React.useState(0);
  
  // Counter animation
  React.useEffect(() => {
    if (!isActive) return;
    
    let start = 0;
    const end = value;
    const duration = 1500;
    const increment = end / (duration / 16);
    
    // Add delay before starting animation
    const timer = setTimeout(() => {
      const counter = setInterval(() => {
        start += increment;
        if (start > end) {
          setDisplayValue(end);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(counter);
    }, delay * 1000);
    
    return () => clearTimeout(timer);
  }, [value, isActive, delay]);
  
  return (
    <motion.div 
      className="flex flex-col text-left"
      initial={{ opacity: 0, y: 15 }}
      animate={isActive ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay + 0.1 }}
    >
      <div className="flex items-baseline mb-1">
        <span className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
          {displayValue}
        </span>
        <span className="text-xl font-medium text-primary-500 dark:text-primary-300 ml-1">
          {suffix}
        </span>
      </div>
      
      <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">
        {label}
      </span>
    </motion.div>
  );
};

export default About;