import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


function Pages({currentPage,clickHandler}: {currentPage:string,clickHandler: (x:string)=>void}) {
      
        switch (currentPage) {
            case "home": return(<Home clickHandler={clickHandler}/>);
            case "about": return(<About />);
            case "projects": return(<Projects />);
            case "contact": return(<Contact />);
            default: return(<Home clickHandler={clickHandler}/>);
        }
}
export default Pages