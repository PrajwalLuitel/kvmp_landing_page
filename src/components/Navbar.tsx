import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { logos } from '@/utils/images';
import { navbarVariants, scrollToSection } from '@/utils/animations';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'navbar-glass py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="relative h-10 w-32 md:h-12 md:w-40" 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src={scrolled ? logos.dark : logos.light}
              alt="KVMP Info Systems Inc. Logo"
              fill
              sizes="(max-width: 768px) 8rem, 10rem"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium text-base transition-colors duration-300 ${
                  scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-800 hover:text-blue-600 font-medium px-4 py-2 text-left"
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;