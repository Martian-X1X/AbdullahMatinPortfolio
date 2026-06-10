import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGraduationCap } from 'react-icons/fa';

const timelineItems = [
  {
    icon: FaUserTie,
    title: 'Islamia English School, Abu Dhabi, UAE',
    subtitle: 'O-Level - 2015',
    description: 'Mathematics, Physics, Chemistry, Biology, ICT, Islamiyat, English, Bangla',
  },
  {
    icon: FaUserTie,
    title: 'Islamia English School, Abu Dhabi, UAE',
    subtitle: 'A-Level - 2016-2019',
    description: 'Mathematics, Physics, Chemistry',
  },
  {
    icon: FaGraduationCap,
    title: 'Independent University, Bangladesh',
    subtitle: 'BSc in Computer Science Engineering - 2019-2024',
    description: 'Algorithms, Data Structures, OOP, Machine Learning, AI',
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

const AboutMe = () => {
  return (
    <div id="about" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Background
          </p>
          <h2 className="section-heading">About Me</h2>
          <p className="section-subtitle mx-auto">
            A brief look at my educational journey and what drives me.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {timelineItems.map((item, index) => {
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
                  <h3 className="text-lg font-semibold text-primary-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-accent mb-2">
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

        <motion.div
          className="max-w-3xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base text-secondary-text leading-relaxed text-center">
            Raised in the vibrant multicultural environment of the UAE and deeply rooted in my Bangladeshi heritage, 
            I'm driven by curiosity and a passion for problem-solving. I love building technology that makes a difference.
          </p>
          <p className="text-base text-secondary-text leading-relaxed text-center mt-4">
            When I'm not coding, you'll find me exploring video games, trying global cuisines, 
            or learning something new. I believe every experience contributes to growth.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
