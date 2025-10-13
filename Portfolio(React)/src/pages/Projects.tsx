import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        link: 'https://github.com/user/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        link: 'https://github.com/user/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        link: 'https://github.com/user/project-three'
    }
];

const Projects = () => {
    
    document.title = 'projects';

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                    />
                ))}
            </div>
        </div>
    );
};


export default Projects;