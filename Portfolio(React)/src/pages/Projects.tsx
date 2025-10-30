import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        link: 'https://github.com/user/project-one',
        tools: ['React', 'TypeScript', 'CSS']
    },
    {
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        link: 'https://github.com/user/project-two',
        tools: ['React', 'TypeScript', 'CSS']
    },
    {
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        link: 'https://github.com/user/project-three',
        tools: ['React', 'TypeScript', 'CSS']
    }
];

const Projects = () => {
    
    document.title = 'projects';

    return (
        <div className="projects-container">
            <h1>Featured Projects</h1>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        description={project.description} 
                        link={project.link} 
                        tools={project.tools}
                    />
                ))}
            </div>
        </div>
    );
};


export default Projects;