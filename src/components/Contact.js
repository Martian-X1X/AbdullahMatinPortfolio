import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Martian-X1X', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abdullahmatin6920/', label: 'LinkedIn' },
    { icon: FaFacebook, href: 'https://www.facebook.com/abdullah.mateen.67/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/abd_mt3n/', label: 'Instagram' },
  ];

  return (
    <footer id="contact" className="bg-primary-text text-white dark:bg-card dark:text-primary-text">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-text max-w-xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="flex gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="w-14 h-14 rounded-xl bg-white/20 hover:bg-accent dark:bg-white/10 dark:hover:bg-accent flex items-center justify-center text-white hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

            <div className="space-y-3 text-left">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaMapMarkerAlt className="text-accent flex-shrink-0" size={14} />
              <span className="text-sm text-muted-text">Bangladesh, Dhaka, Bashundhara R/A</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FaPhoneAlt className="text-accent flex-shrink-0" size={14} />
              <span className="text-sm text-muted-text">(+880) 1704717819</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FaEnvelope className="text-accent flex-shrink-0" size={14} />
              <span className="text-sm text-muted-text">abdullah.matin6920@gmail.com</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-text">
            &copy; Abdullah Matin {new Date().getFullYear()}. Crafted with care.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;
