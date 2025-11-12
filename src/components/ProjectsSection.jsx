import React from "react";
import Project2 from "../ProjectImages/Project2.png";
import Project1 from "../ProjectImages/Project1.png";
import Project3 from "../ProjectImages/Project3.png";
const projects = [
  {
    id: 1,
    title: "ShutterBug - Camera Ecommerce App",
    description:
      "A modern eCommerce web application for discovering and purchasing cameras and accessories.",
    image: Project1,
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://shutterbug-muskan.netlify.app/",
    githubUrl: "https://github.com/muskanbatra-dev/shutter-bug",
  },
  {
    id: 2,
    title: "Lift Simulation",
    description:
      "is an interactive web dashboard built to model the operations of an elevator system within a multi-floor building",
    image: Project2,
    tags: ["React", "Redux", "Chart.js"],
    demoUrl: "https://lift-simulations-muskan.netlify.app/",
    githubUrl: "https://github.com/muskanbatra-dev/liftssimulation",
  },
  {
    id: 3,
    title: "JSON Tree Visualizer",
    description:
      "An interactive web app that validates, visualizes, and searches JSON data using a dynamic tree view. Built with React Flow for graph rendering and supports JSONPath-based search with real-time highlighting.",
    image: Project3,
    tags: ["React", "React Flow", "JSONPath", "TailwindCSS"],
    demoUrl: "https://json-visualiser.netlify.app/",
    githubUrl: "https://github.com/muskanbatra-dev/json-visualizer",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-glow text-3xl md:text-4xl font-bold mb-4 text-center">
          some things I’ve built
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden border border-[color:var(--color-border)] shadow-xs transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(167,139,250,0.2)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[rgba(167,139,250,0.1)] text-[var(--color-foreground)] border border-[rgba(167,139,250,0.3)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-sm font-medium">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
