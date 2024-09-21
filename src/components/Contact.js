import React from 'react';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import AMlogo from '../assets/AMlogo.png'

const Contact = () => {
  return (
    <footer id="contact" className="bg-indigo-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Get in Touch with Me</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Martian-X1X" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl lg:text-5xl hover:text-gray-400 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/abdullah.mateen.67/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl lg:text-5xl hover:text-gray-400 transition-colors">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/abd_mt3n/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl lg:text-5xl hover:text-gray-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/abdullahmatin6920/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl lg:text-5xl hover:text-gray-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <img src={AMlogo} alt="Logo" className="w-20 h-20 sm:w-24 sm:h-24 object-contain" />
        </div>

        {/* Contact Information */}
        <div className="text-center lg:text-right">
          <p className="mb-2">Address: Bangladesh, Dhaka, Bashundhar R/A</p>
          <p className="mb-2">Phone: (+880) 1704717819</p>
          <p>Email: abdullah.matin6920@gmail.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm">
        © MartianX1X 2024
      </div>
    </footer>
  );
};

export default Contact;