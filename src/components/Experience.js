import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const timelineData = [
  {
    title: 'SystemSage Solutions Sdn Bhd',
    subtitle: 'Software Developer Intern (Remote)',
    date: 'Jan 2024 - June 2024',
    description:
      'Developed an agriculture-based system using PHP, MySQL, and open-source libraries to monitor soil quality and manage farmer finances.',
    icon: FaBriefcase,
  },
  {
    title: 'Smart Banking',
    subtitle: 'Personal Project',
    date: 'Mar 2023 - June 2023',
    description:
      'Built a fully functional banking system using PHP and MySQL. Features include KYC form handling, account creation with nominees, and unique IDs.',
    icon: FaCode,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Experience = () => {
  return (
    <div id="experience" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Career
          </p>
          <h2 className="section-heading">Work Experience</h2>
          <p className="section-subtitle mx-auto">
            My professional journey and key projects.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="card p-8 flex flex-col sm:flex-row gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-accent-light flex items-center justify-center text-accent">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-primary-text">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full sm:ml-auto whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-secondary-text mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
