import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/images/altham.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-500">
      {/* Top Bar */}
      <div className={`bg-dark text-white py-2 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0 hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-between items-center text-xs font-medium tracking-wider">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-accent-pale" />
              +44 1234 567 890
            </span>
            <span className="hidden sm:flex items-center gap-2 border-l border-white/20 pl-6">
              <Mail size={14} className="text-accent-pale" />
              hello@althamcare.org.uk
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Clock size={14} className="text-accent-pale" />
            <span>Mon - Fri: 09:00 - 20:00</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-500 ${scrolled ? 'bg-white shadow-premium py-4' : 'bg-white/80 backdrop-blur-md py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={Logo}
              alt="Altham Care Home"
              className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-primary relative group ${location.pathname === link.path ? 'text-primary' : 'text-dark/70'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
            <Link to="/contact" className="btn bg-dark text-white px-10 py-4 shadow-premium uppercase text-xs tracking-widest font-black">
              Book a Visit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-primary p-2 bg-secondary rounded-xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-full left-0 w-full bg-white shadow-premium border-t border-secondary overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xl font-bold tracking-tight ${location.pathname === link.path ? 'text-primary' : 'text-dark/80'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="btn btn-primary w-full py-5 text-lg font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Visit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
