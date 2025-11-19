import Header from '../components/Header';
import ProjectCard from '../components/UI/ProjectCard/ProjectCard';

const projectsList = {
    "projectCatagory":"Web DEVELOPMENT",
    "projects":[
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
            description: 'This is a brief description of Project Three. loremdfdjhvbjb j  This is a brief description of Project Three.This is a brief description of Project Three.',
            link: 'https://github.com/user/project-three',
            tools: ['React', 'TypeScript', 'CSS']
        }
    ]
};

const Projects = () => {
    
    return (
        <>
        <Header />
        <div className="projects-container">
            <h1>Featured Projects</h1>
            <div className="projects-list">
                {   <h2 className='project-catagory-title'>{projectsList.projectCatagory}</h2>}
                {projectsList.projects.map((project, index) => (
                    <>
                    <div className="connect-line"></div>
                    <ProjectCard 
                            key={index} 
                            title={project.title} 
                            description={project.description} 
                            link={project.link} 
                            tools={project.tools}
                        /> 
                    </>
                ))}
            </div>
        </div>
        </>
    );
};


export default Projects;