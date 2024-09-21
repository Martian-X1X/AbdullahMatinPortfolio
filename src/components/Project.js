import React from 'react';
import '../css/card.css';  // Import the CSS file for 3D transforms
import cardImage1 from '../assets/landingpage.png'; 
import cardImage2 from '../assets/system.png'; 
import cardImage3 from '../assets/food.png'; 

const Project = () => {
  const projects = [
    {
      title: "Landing Page Design (e-commerce)",
      image: cardImage1,
      description: "A creative, unique landing page built with React and Tailwind CSS. It's mobile-responsive and perfect for e-commerce businesses, showcasing products with a modern design and offering a seamless shopping experience."
    },
    {
      title: "Full-Stack Smart Agricultural System",
      image: cardImage2,
      description: "A full-stack agricultural technology software designed to monitor essential farm metrics such as nutrients, pH, and moisture levels. It includes farmer financial management and is built with PHP, JavaScript, Bootstrap, and MySQL. Special features include PWA functionality, enhanced security, user control, real-time monitoring, and responsiveness for various devices."
    },
    {
      title: "Business Website Food Delivery System",
      image: cardImage3,
      description: "A visually appealing React-based food delivery platform designed with Tailwind CSS and React Router DOM. It features a creative design for ordering food with a functional Add to Cart option, allowing users to explore and order their favorite cuisine efficiently."
    }
  ];

  return (
    <div id="project" className="min-h-full bg-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-left text-red-600 ml-32 mb-8 sm:ml-4 md:ml-8 lg:ml-16">Projects:</h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group perspective-1000 w-full max-w-xs mx-auto"
            >
              <div className="relative w-full h-full card-container transform-style transition-transform duration-500">
                {/* Front Side */}
                <div className="card-front bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between h-full">
                  <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg" />
                  <h2 className="text-lg sm:text-xl font-bold mt-4 text-center">{project.title}</h2>
                </div>

                {/* Back Side */}
                <div className="card-back bg-white rounded-lg shadow-lg p-4 flex justify-center items-center h-full">
                  <p className="text-sm sm:text-base text-gray-900 text-center">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;