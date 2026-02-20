//src/pages/ProjectsPage.tsx
import React from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string; // optional link to project details
}

const projects: Project[] = [
  {
    id: 1,
    title: "Starlink Internet Setup",
    description: "High-speed internet installation for Kigali Business Center.",
    imageUrl: "https://source.unsplash.com/800x600/?internet,technology",
    technologies: ["Starlink", "Networking", "Fiber Optic"],
    link: "#",
  },
  {
    id: 2,
    title: "Smart Camera Surveillance",
    description: "Installation of smart cameras with real-time notifications.",
    imageUrl: "https://source.unsplash.com/800x600/?camera,security",
    technologies: ["IoT", "AI", "React"],
    link: "#",
  },
  {
    id: 3,
    title: "Custom Software Development",
    description: "Web application to manage and track business operations.",
    imageUrl: "https://source.unsplash.com/800x600/?software,code",
    technologies: ["React", "TypeScript", "Node.js"],
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          See some of our latest work, demonstrating our expertise and
          innovative solutions for our clients.
        </p>
      </header>

      <section className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 pb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;