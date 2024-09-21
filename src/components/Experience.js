import React from 'react';

const timelineData = [
  {
    title: "SystemSage Solutions Sdn Bhd",
    subtitle: "Software Developer Intern (Remote)",
    date: "Jan-2024 - June-2024",
    description: "Worked on developing an agriculture-based system using PHP, MySQL, and open-source libraries to monitor soil quality and manage farmer finances.",
    icon: "💻",
    bgColor: "bg-purple-500"
  },
  {
    title: "Smart Banking",
    subtitle: "Personal Project",
    date: "Mar-2023 - June-2023",
    description: "Built a fully functional banking system using PHP and MySQL. Features include KYC form handling, account creation with nominees, and unique IDs for accounts.",
    icon: "🏦",
    bgColor: "bg-green-500"
  }
];

const Experience = () => {
  return (
    <div id="experience" className="py-2 sm:py-6 bg-black">
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-red-600 sm:ml-4 md:ml-8 lg:ml-16 xl:ml-36 mb-6 sm:mb-8">Work Experience:</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col sm:flex-row items-center sm:items-start"
          >
            {/* Icon section */}
            <div className={`flex-shrink-0 w-12 h-12 rounded-full text-white text-2xl flex items-center justify-center ${item.bgColor} mb-4 sm:mb-0`}>
              {item.icon}
            </div>
            
            {/* Content section */}
            <div className="w-full sm:w-4/5 sm:ml-6 md:ml-8 bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8 relative">
              {/* Vertical timeline indicator */}
              <div className="absolute top-0 left-0 -ml-2 sm:-ml-5 mt-2 h-full">
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="hidden sm:block h-full w-0.5 bg-gray-300 ml-0.5" />
              </div>

              {/* Title, Subtitle, and Content */}
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <h4 className="text-md sm:text-lg text-gray-600">{item.subtitle}</h4>
              <span className="text-sm sm:text-base text-gray-500 block">{item.date}</span>
              <p className="mt-2 text-sm sm:text-base text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;