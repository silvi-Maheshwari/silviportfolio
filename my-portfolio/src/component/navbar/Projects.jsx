import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      title: "Quiz Application",
      description:
        "Interactive quiz application using React, Redux, and Chakra UI.",
      shortDescription: "An interactive quiz app with a modern UI.",
      liveDemo: "https://quiz-applications-react.netlify.app/",
      repo: "https://github.com/silvi-Maheshwari/Quiz-Application",
      image: "/quiz.png", // Image path relative to the public folder
    },
    {
      title: "Nordstrom Clone (MERN)",
      description:
        "Full-stack Groupon replica with MERN stack, JWT, and Chakra UI.",
      shortDescription: "A complete e-commerce solution with user authentication.",
      liveDemo: "https://nordstrom-website1.netlify.app/",
      repo: "https://github.com/silvi-Maheshwari/Nordstorm-website",
      image: "/nordstrom.png", // Image path relative to the public folder
    },
    

    {
      title: "Campaign Management System",
      shortDescription:
        "A tool for creating, managing, and tracking marketing campaigns, enabling businesses to reach their target audience effectively. Admins can design campaigns, set goals, and monitor performance in real-time.",

      liveDemo: "https://cheery-beijinho-513f06.netlify.app/",
      repo: "https://github.com/silvi-Maheshwari/Bulk-email-campagin",
      image: "/email.png", // Image path relative to the public folder
    },

  ];

  // Initialize AOS for animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="short-description">{project.shortDescription}</p>
              <p className="project-description">{project.description}</p>

              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
