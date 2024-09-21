import React from 'react';
import '../css/skill.css';  // Import the CSS file for carousel styles

const logos = [
  require('../assets/html-css.png'), 
  require('../assets/js.png'),
  require('../assets/Ts.png'),
  require('../assets/node.png'),
  require('../assets/react.png'),
  require('../assets/tailwind.png'),
  require('../assets/mongodb.png'),
  require('../assets/php.png'),
  require('../assets/sql.png'),
  // Add more logos as needed
];

const Skill = () => {
  return (
    <div id="skill" className="relative overflow-hidden w-full py-8 bg-black mt-10">
      <h2 className="text-2xl md:text-4xl font-bold text-left text-red-600 ml-32 mb-8">Expertise at:</h2> {/* Add title here */}
      <div className="carousel-wrapper">
        <div className="carousel">
          {logos.concat(logos).map((logo, index) => (  // Duplicate the logos for continuous loop
            <div key={index} className="carousel-item">
              <img src={logo} alt={`Logo ${index}`} className="carousel-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
