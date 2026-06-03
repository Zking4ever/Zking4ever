import Header from '../components/Header';
import ProjectCard from '../components/UI/ProjectCard/ProjectCard';
import './project.css'

const projectsList = {
    "projectCatagory":"Web DEVELOPMENT",
    "projects":[
        {
            title: 'Easter Wish bord',
            description: 'An aesthetic chat bord where users can post their wishes and thoughts anonymously. It gave everyone chance to spit out what the have passed,what they felt and much more. It offers a seamless user experience with real-time updates.',
            link: 'https://easterchat.atwebpages.com',
            tools: ['HTML', 'Javascript', 'CSS','PHP']
        },
        {
            title: 'Tic-Tac-Toe Game',
            description: 'A simple intractive game to play the traditional tic-tac-toe game with support of two players and auto-detection of winner',
            link: 'https://zking4ever.github.io/Tic-Tac-Toe-Game/',
            gitlink:'https://github.com/Zking4ever/Tic-Tac-Toe-Game',
            tools: ['HTML', 'Javascript', 'CSS']
        },
        {
            title: 'ODA social media',
            description: 'A social media platform that allows users to connect, share content, and engage with others. It features user profiles, friend connections, content sharing, and real-time notifications to keep users informed about their network activities.',
            link: 'https://oda.social-networking.me',
            tools: ['HTML', 'Javascript', 'CSS','PHP','MySQL']
        },
        
        {
            title: 'Project Three',
            description: 'This is a brief description of Project Three. loremdfdjhvbjb j  This is a brief description of Project Three.This is a brief description of Project Three.',
            link: 'https://zking4ever.github.io/practice-javascript/',
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
            <div className="project-wrapper">
                <div className="left">
                        <div className="img left-img"></div>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="top-left">
                            <div className="img top-left-img"></div>
                        </div>
                        <div className="top-right">
                            <div className="img top-right-img"></div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="img bottom-img"></div>
                    </div>
                </div>
            </div>

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