import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', icon: require('../assets/html-css.png') },
  { name: 'JavaScript', icon: require('../assets/js.png') },
  { name: 'TypeScript', icon: require('../assets/Ts.png') },
  { name: 'Node.js', icon: require('../assets/node.png') },
  { name: 'React', icon: require('../assets/react.png') },
  { name: 'Tailwind', icon: require('../assets/tailwind.png') },
  { name: 'MongoDB', icon: require('../assets/mongodb.png') },
  { name: 'PHP', icon: require('../assets/php.png') },
  { name: 'SQL', icon: require('../assets/sql.png') },
  { name: '.NET', icon: require('../assets/.NET.png') },
  { name: 'PostgreSQL', icon: require('../assets/postgresql.png') },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Skill = () => {
  return (
    <div id="skill" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Expertise
          </p>
          <h2 className="section-heading">Technologies I Work With</h2>
          <p className="section-subtitle mx-auto">
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group card p-5 flex flex-col items-center gap-3 cursor-pointer"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent-light/50 flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-110">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-medium text-secondary-text text-center leading-tight">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
