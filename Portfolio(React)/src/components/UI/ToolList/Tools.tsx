import './Tools.css'
import ToolBox from './ToolBox';
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiNodedotjs,SiExpress,SiMongodb,SiGithub,SiFigma } from "react-icons/si";

export default function Tools() { 
    const toolsList = [
        { name: 'React',        logo: <SiReact className="logo" color="#61DAFB" /> },
        { name: 'HTML5',        logo: <SiHtml5 className="logo" color="#E34F26" /> },
        { name: 'CSS3',         logo: <SiCss3 className="logo" color="#1572B6" /> },
        { name: 'JavaScript',   logo: <SiJavascript className="logo" color="#F7DF1E" /> },
        { name: 'Figma',        logo: <SiFigma className="logo" color="#F24E1E" /> },
        { name: 'Node.js',      logo: <SiNodedotjs className="logo" color="#339933" /> },
        { name: 'Express.js',   logo: <SiExpress className="logo" color="#000000" /> },
        { name: 'MongoDB',      logo: <SiMongodb className="logo" color="#47A248" /> },
        { name: 'TypeScript',   logo: <SiTypescript className="logo" color="#3178C6" /> },
        { name: 'Git & GitHub', logo: <SiGithub className="logo" color="#F05032" /> },
    ];

  return (
    <div className="tools-container">
                        <div className="tools">
                            {toolsList.map((tool)=>(
                                <ToolBox key={tool.name} logo={tool.logo} toolName={tool.name} />
                            ))}
                        </div>
                        <div aria-hidden className="tools">
                             {toolsList.map((tool)=>(
                                <ToolBox key={tool.name} logo={tool.logo} toolName={tool.name} />
                            ))}
                        </div>
                    </div>
  )
}

