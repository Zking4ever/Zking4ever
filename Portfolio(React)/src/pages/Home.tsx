import Footer from '../components/Footer';
import profile from "../assets/user.png";

const Home = ({clickHandler}: {clickHandler:(x:string)=>void}) => {
    
    document.title = 'home';
    return (
        <>
            <div className='home'>
                <section className="welcome-section">
                    <div className='greet'>
                        <h1>Hey World,</h1>
                        <h1>👋</h1>
                    </div>
                    <h3><a href='https://google.com/astawus amsalu'>I'm Astawus Amsalu</a></h3>
                    <p> A software developer with a passion for creating interactive and user-friendly applications. 
                         and get to know more about my work.
                    </p>
                    <button onClick={()=>clickHandler('projects')} id='projects'>View My Work</button>
                    <button onClick={()=>clickHandler('contact')} id='contact'>Get In Touch</button>
                </section>
                <section className='profile-section'>
                    <img src={profile} alt="profile" />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Home;