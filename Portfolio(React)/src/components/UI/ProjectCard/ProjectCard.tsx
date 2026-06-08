import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  gitlink?: string;
  tools?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, gitlink, tools }) => {
  return (
    <div className="project-card">
      {/* Preview */}
      <div className="project-picture">
        <iframe src={link} title={title} loading="lazy" scrolling="no" />
        <div className="project-picture-overlay" />
      </div>

      {/* Info */}
      <div className="project-info">
        {/* Tools Capsule (top-right) */}
        {tools && tools.length > 0 && (
          <div className="project-tools-capsule">
            {tools.map((tool) => (
              <span key={tool} className="tool-tag">{tool}</span>
            ))}
          </div>
        )}

        <p className="project-title">{title}</p>
        <p className="project-description">{description}</p>

        <div className="project-buttons">
          {gitlink && (
            <a
              href={gitlink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              <span>Source Code</span>
            </a>
          )}
          <a
            href={link}
            className="project-link project-link--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoOpenOutline />
            <span>View Live</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;