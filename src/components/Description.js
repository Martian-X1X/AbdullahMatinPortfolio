import React from 'react';
import { motion } from 'framer-motion';
import myPicture from '../assets/Headshot.png';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Description = () => {
  return (
    <div id="home" className="min-h-screen flex items-center bg-surface pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
            <p className="text-accent font-medium text-sm tracking-wider uppercase mb-4">
              Software Engineer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-text leading-tight mb-4">
              Hi, I'm{' '}
              <span className="gradient-text">Abdullah Matin</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-xl mb-8">
              I build modern web applications with clean code and thoughtful design. 
              Passionate about creating seamless digital experiences.
            </p>
            <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
              <a
                href="#project"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-dark transition-all duration-200 shadow-sm hover:shadow-md"
              >
                View Projects
                <FaArrowRight size={14} />
              </a>
              <a
                href="https://github.com/Martian-X1X"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-secondary-text hover:text-accent border border-border rounded-xl hover:border-accent transition-all duration-200"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdullahmatin6920/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-secondary-text hover:text-accent border border-border rounded-xl hover:border-accent transition-all duration-200"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <img
                  src={myPicture}
                  alt="Abdullah Matin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-accent rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
