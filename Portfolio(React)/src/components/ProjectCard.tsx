import React from 'react';
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    tools?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link,tools }) => {
    return (
        <div className="project-card">
            <div className="project-picture">
                <img src={`https://avatar.iran.liara.run/username?username=`+title} alt="project-pic" />
            </div>
            <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tools">
                    {tools && tools.map((tool, index) => (
                        <span key={index} className="tool">{tool}</span>
                    ))}
                </div>
                <div className='project-buttons'>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <FiGithub /> <span>Code</span>
                    </a>
                    <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
                        <IoOpenOutline /><span>Demo</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;