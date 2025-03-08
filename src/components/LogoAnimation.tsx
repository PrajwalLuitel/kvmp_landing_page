import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { logos } from '@/utils/images';
import { logoAnimation } from '@/utils/animations';

const LogoAnimation = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const companyName = "KVMP Info Systems";
  const letters = Array.from(companyName);

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="relative w-36 h-36 md:w-44 md:h-44"
        initial="hidden"
        animate={loaded ? "show" : "hidden"}
        variants={logoAnimation}
      >
        <Image
          src={logos.dark}
          alt="KVMP Info Systems Inc. Logo"
          fill
          sizes="(max-width: 768px) 12rem, 14rem"
          className="object-contain logo-animation"
          priority
        />
      </motion.div>
      
      <motion.div 
        className="mt-4 flex justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.5
            }
          }
        }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterVariants}
            className="inline-block mx-px text-white text-3xl md:text-4xl font-bold"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="mt-4 text-base md:text-lg text-blue-100 text-center"
      >
        Empowering Banks with Cutting-Edge IT Solutions
      </motion.div>
    </div>
  );
};

export default LogoAnimation;