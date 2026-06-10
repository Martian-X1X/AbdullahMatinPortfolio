import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import AMlogo from '../assets/AMlogo.png';

const Navbar = ({ isDark, toggleDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skill' },
    { name: 'Projects', id: 'project' },
    { name: 'Experience', id: 'experience' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-card/80 backdrop-blur-lg shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img src={AMlogo} alt="AM" className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-105" />
            <span className="text-lg font-semibold text-primary-text hidden sm:block">
              Abdullah Matin
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 text-sm font-medium text-secondary-text hover:text-accent transition-colors duration-200 rounded-lg hover:bg-accent-light/50"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleDark}
              className="ml-2 p-2.5 rounded-xl text-secondary-text hover:text-accent hover:bg-accent-light/50 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <a
              href="https://www.fiverr.com/abdullah_matin1"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Hire Me
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDark}
              className="p-2.5 rounded-xl text-secondary-text hover:text-accent hover:bg-accent-light/50 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-secondary-text hover:bg-accent-light/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-card/95 backdrop-blur-lg z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-2xl font-medium text-primary-text hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://www.fiverr.com/abdullah_matin1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-3 text-base font-semibold text-white bg-accent hover:bg-accent-dark rounded-xl transition-all duration-200 shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
