import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import AMlogo from '../assets/AMlogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const menuItems = [
    { name: 'HOME', id: 'home' },
    { name: 'SKILLS', id: 'skill' },
    { name: 'PROJECTS', id: 'project' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'ABOUT ME', id: 'about' },
    { name: 'CONTACT', id: 'contact' }
  ];

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-deep-black shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img src={AMlogo} alt="Logo" className="w-16 h-auto sm:w-20" />
          </div>

          <div className="hidden md:flex space-x-2 lg:space-x-4">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className={`text-sm lg:text-base font-bold hover:text-red-600 transition-colors ${scrolled ? 'text-violet-600' : 'text-red-700'}`}
              >
                {`</${item.name}>`}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <a 
              href="https://www.fiverr.com/abdullah_matin1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-700 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors text-sm lg:text-base"
            >
              Hire now
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`text-2xl p-2 rounded-md ${scrolled ? 'text-gray-800' : 'text-red-700'} hover:bg-gray-100 transition-colors`}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <img src={AMlogo} alt="Logo" className="w-16 h-auto" />
            <button 
              onClick={toggleMenu}
              className="text-2xl p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            {menuItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-gray-800 text-xl font-bold my-4 hover:text-red-600 transition-colors"
                onClick={toggleMenu}
              >
                {`</${item.name}>`}
              </a>
            ))}
            <a 
              href="https://www.fiverr.com/abdullah_matin1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-6 bg-red-700 text-white px-6 py-3 rounded-md font-bold hover:bg-red-600 transition-colors"
              onClick={toggleMenu}
            >
              Hire now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;