import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


function Pages(props){
        const currentPage = props.currentPage;
        const handleNavigatorClick = props.clickHandler;
    
        switch (currentPage) {
            case "home": return(<Home clickHandler={handleNavigatorClick}/>);
            case "about": return(<About />);
            case "projects": return(<Projects />);
            case "contact": return(<Contact />);
            default: return(<Home />);
        }
}
export default Pages