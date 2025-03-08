import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
        delay,
        duration: 0.8,
      },
    },
  };
};

// Stagger children animation
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Logo animation
export const logoAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Button hover animation
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
};

// Navbar scroll animations
export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25
    }
  },
};

// Service card animations
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 20
    }
  }
};

// Smooth scroll function
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Offset for navbar height
      behavior: 'smooth',
    });
  }
};