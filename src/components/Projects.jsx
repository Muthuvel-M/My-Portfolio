import React from 'react';
// import FreelanceWebImage from '/assets/images/Freelance-web.png';
// import SnakeGame from '/assets/images/snake-game.png';
// import WeatherApp from '/assets/images/weather-web.png';

const projects = [
  {
    name: "Freelancer's Portfolio",
    image: "",
    liveLink: "https://freelance-webpage.netlify.app/",
    codeLink: "https://github.com/Muthuvel-M/Freelance-Website",
    description: "A sleek and modern portfolio website showcasing my expertise in web design, and front-end development. Built with React, Tailwind CSS, and smooth animations, this responsive site highlights my skills, work, and contact details in an elegant and interactive way."
  },
  {
    name: "Current Weather",
    image: "",
    liveLink: "https://weaterapp-fapi.netlify.app/",
    codeLink: "https://github.com/Muthuvel-M/weatherapp",
    description: "Get real-time weather updates for any city in the world. Displays temperature in Celsius or Fahrenheit. Provides additional weather details like humidity and wind speed. Search functionality to quickly find weather information for a city. User-Friendly Interface: Clean and responsive design that works seamlessly across devices."
  },
  {
    name: "Snake Game",
    image: "",
    liveLink: "https://snake-game-html-js-css.netlify.app/",
    codeLink: "https://github.com/Muthuvel-M/snake-game",
    description: "This game is created using HTML, CSS, and JavaScript."
  }
];

const Project = () => {
  return (
    <section className="w-full bg-gray-900 text-white py-20 flex flex-col items-center">
      {projects.map((project, index) => (
        <div key={index} className="w-5/5 h-screen flex flex-col md:flex-row items-center justify-center px-10">
          {/* Left Side - Project Image & Live Link */}
          <div className="relative w-full md:w-1/2 h-80 md:h-full bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url('${project.image}')` }}>
            <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-4xl font-semibold mb-4">{project.name}</h2>
              <a href={project.liveLink} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-all">
                Live Link
              </a>
            </div>
          </div>
          
          {/* Right Side - Project Details & Code Link */}
          <div className="w-full md:w-1/2 h-full bg-gray-800 p-10 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-semibold mb-4">About The Project</h2>
            <p className="text-gray-400 mb-6 max-w-lg">
              {project.description}
            </p>
            <a href={project.codeLink} className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md transition-all">
              Code Link
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;
