import React from "react";
import {
  ExternalLink,
  ShoppingCart,
  CloudSun,
  CheckSquare,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Todo Task Manager",
      description:
        "A clean and intuitive task management app to organize daily activities. Features include adding, editing, deleting, and filtering tasks.",
      imageIcon: <CheckSquare size={48} className="text-emerald-400" />,
      tags: ["React", "LocalStorage", "Bootstrap"],
      githubLink: "https://github.com/ShreyanshVala/todo",
      liveLink:
        "https://6a3cfe920157b21efde57d68--imaginative-torte-00d03d.netlify.app/",
      color: "emerald",
    },
    {
      title: "Image Gallary",
      description:
        "A React-based image gallery that fetches and displays images from an external API with search, filtering, and responsive layout features.",
      imageIcon: <CloudSun size={48} className="text-cyan-400" />,
      tags: ["React", "API Integration", "Tailwind"],
      githubLink: "https://github.com/ShreyanshVala/reactwebsite",
      liveLink: "https://regal-sundae-931be0.netlify.app/",
      color: "cyan",
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`project-image bg-${project.color}`}>
                {project.imageIcon}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.githubLink}
                    className="project-link"
                    aria-label="GitHub Repository"
                    target="_blank"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    className="project-link"
                    aria-label="Live Demo"
                    target="_blank"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
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

export default Projects;
