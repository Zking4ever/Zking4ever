import React from 'react';
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import './ProjectCard.css';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tools?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link,tools }) => {
    return (
        <div className="project-card">
            {/* first box for project logo or mockup */}
            <div className="project-picture">
                <iframe src={link} ></iframe>
            </div>
            {/* Connecting line between two boxes when hovered */}
            <div className="project-box-connect"></div>
            {/* Second box for important information */}
            <div className="project-info">
                <p className="project-title">{title}</p>
                <p className="project-description">{description}</p>
                {/* What tools used in the project */}
                <div className="project-tools">
                    {tools && tools.map((tool, index) => (
                        <span key={index} className="tool">{tool}</span>
                    ))}
                </div>
                {/* Call to Action Buttons */}
                <div className='project-buttons'>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FiGithub /> <span>Source Code</span>
                    </a>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <IoOpenOutline /><span>View Live</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;