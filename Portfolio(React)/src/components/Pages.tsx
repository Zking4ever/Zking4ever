import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";


function Pages(props){
        const currentPage = props.currentPage;
    
        switch (currentPage) {
            case "home": return(<Home />);
            case "projects": return(<Projects />);
            case "contact": return(<Contact />);
            default: return(<Home />);
        }
}
export default Pages