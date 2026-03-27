import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex  justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-bold text-center  text-white tracking-widest"
        >
         {/* <span className="text-neonPurple text-center">  TANVI.</span> */}
         <div className='text-center '>Tanvi Shreya</div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex gap-3 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-10 py-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mx-4 text-sm font-medium text-gray-300 hover:text-neonPurple transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neonPurple transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-neonPurple to-neonBlue text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white">
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-neonPurple transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-neonPurple to-neonBlue text-white font-semibold text-center mt-4"
              >
                Hire Me
              </a>
            </div>
          </motion.div> 
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
