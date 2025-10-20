import { useState } from "react";

export const Projects = () => {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and TailwindCSS.",
      details: `This project includes smooth scrolling, responsive design, and component structure. It uses Vite for development and is deployed on Vercel.`,
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio-site.com"
    },
    {
      title: "Todo App",
      description: "A task manager with authentication and filters.",
      details: `Built with React, Express.js, MongoDB, and JWT. Users can create, update, and delete tasks after logging in. It has filtering by status and due date.`,
      github: "https://github.com/yourusername/todo-app",
      demo: "#"
    },
    {
      title: "API Backend",
      description: "RESTful API with Node and Express.",
      details: `Implements routes for users, authentication, and content. MongoDB stores data. Used in multiple frontend projects.`,
      github: "https://github.com/yourusername/api-backend",
      demo: "#"
    }
  ];

  const toggleProject = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-red-600">Projects</h2>
      <p className="text-gray-700 mb-10">Click a project to view more details below.</p>

      <div className="grid gap-6 md:grid-cols-2 grid-cols-1 text-left">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => toggleProject(idx)}
            className="border border-black rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>

      {/* Expanded Details Section */}
      {selected !== null && (
        <div className="mt-10 p-6 border-t border-black text-left bg-gray-50 rounded-xl">
          <h3 className="text-2xl font-bold mb-3 text-red-600">
            {projects[selected].title}
          </h3>
          <p className="text-gray-800 mb-4">{projects[selected].details}</p>
          <div className="flex gap-4">
            <a
              href={projects[selected].github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              GitHub
            </a>
            <a
              href={projects[selected].demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:underline"
            >
              Live Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
