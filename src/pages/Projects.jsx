import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React and Tailwind CSS featuring dark/light mode and smooth animations.",
    image: "https://res.cloudinary.com/deudmtuoy/image/upload/v1760691146/Screenshot_2025-10-17_082706_y48c2x.png",
    github: "https://github.com/animeshkhanra2022/Portfolio",
    demo: "https://portfolio-indol-gamma-77.vercel.app/",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "NewsLite",
    description:
      "A simple News application which is use on News API, and it gives us news of various categories like - 'Health', 'Sports', 'Science', 'Technology' and etc.",
    image: "https://res.cloudinary.com/deudmtuoy/image/upload/v1760691145/Screenshot_2025-10-17_093015_xersza.png",
    github: "https://github.com/animeshkhanra2022/NewsLite",
    demo: "https://yourweatherapp.netlify.app",
    tech: ["REACT", "API", "BOOTSTRAP"],
  },
  {
    title: "Twixy",
    description:
      "A responsive blog with local storage support and a clean user interface. It uses Authentication of 'Appwrite' for store images. ",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    github: "https://github.com/animeshkhanra2022/Twixy",
    demo: "https://twixy-one.vercel.app/",
    tech: ["React", "LocalStorage", "Tailwind", "Appwrite"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0B061A] dark:to-[#120C24] py-20 px-6 transition-colors duration-300"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-gray-500 dark:text-gray-400 mb-1">
          Some of my recent work
        </p>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Projects
        </h2>
      </div>

      {/* Project Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-100/50 dark:bg-gray-900/70 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300 transition-colors"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-purple-500 transition-colors"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-pink-500 transition-colors"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
