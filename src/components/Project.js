import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import cardImage1 from '../assets/landingpage.png';
import cardImage2 from '../assets/system.png';
import cardImage3 from '../assets/food.png';

const projects = [
  {
    title: 'Landing Page Design (e-commerce)',
    image: cardImage1,
    tags: ['React', 'Tailwind CSS'],
    description:
      'A creative, unique landing page built with React and Tailwind CSS. Mobile-responsive with a modern design showcasing products seamlessly.',
  },
  {
    title: 'Full-Stack Smart Agricultural System',
    image: cardImage2,
    tags: ['PHP', 'JavaScript', 'MySQL'],
    description:
      'A full-stack agricultural system monitoring nutrients, pH, and moisture. Features PWA support, real-time monitoring, and farmer financial management.',
  },
  {
    title: 'Business Website Food Delivery',
    image: cardImage3,
    tags: ['React', 'Tailwind CSS', 'React Router'],
    description:
      'A visually appealing food delivery platform with Add to Cart functionality. Modern design for exploring and ordering cuisine.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Project = () => {
  return (
    <div id="project" className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent font-medium text-sm tracking-wider uppercase mb-3">
            Portfolio
          </p>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of projects that showcase my skills and experience.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group card overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium text-accent bg-accent-light px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-primary-text mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed mb-4">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all cursor-default">
                  View Details
                  <FaArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
