import { Link } from "react-router-dom";
import "./App.css";
import "./Projects.css";

const projects = [
     {
          title: "EventPop",
          description: "A full-stack event discovery platform with personalized notifications. Browse upcoming events, view details, and track what's happening across SF + LA.",
          tags: ["React", "Node", "MongoDb", "Vercel"],
          url: "https://event-pop-app.vercel.app/",
          github: "https://github.com/ash-kick/event-pop-app",
     },
];

export default function Projects() {
     return (
          <div className="projects-wrapper">
               <div className="projects-content">
                    <Link
                         to="/"
                         className="back-link">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <line
                                   x1="19"
                                   y1="12"
                                   x2="5"
                                   y2="12"
                              />
                              <polyline points="12 19 5 12 12 5" />
                         </svg>
                         Back
                    </Link>

                    <div className="projects-header">
                         <h1>
                              <span className="name-gradient">My Projects</span>
                         </h1>
                         <p className="description">A collection of things I've built.</p>
                    </div>

                    <div className="projects-grid">
                         {projects.map((project) => (
                              <div
                                   key={project.title}
                                   className="project-card">
                                   <div className="project-card-body">
                                        <h2 className="project-title">{project.title}</h2>
                                        <p className="project-description">{project.description}</p>
                                        <div className="project-tags">
                                             {project.tags.map((tag) => (
                                                  <span
                                                       key={tag}
                                                       className="tag">
                                                       {tag}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>
                                   <div className="project-card-actions">
                                        <a
                                             href={project.url}
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="btn btn-primary project-btn">
                                             Visit Project <span className="btn-arrow">→</span>
                                        </a>
                                        {project.github && (
                                             <a
                                                  href={project.github}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="btn btn-secondary project-btn">
                                                  <svg
                                                       xmlns="http://www.w3.org/2000/svg"
                                                       width="15"
                                                       height="15"
                                                       viewBox="0 0 24 24"
                                                       fill="currentColor">
                                                       <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                                  </svg>
                                                  View GitHub
                                             </a>
                                        )}
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
}
