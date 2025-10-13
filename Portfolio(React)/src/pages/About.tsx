import Footer from '../components/Footer';
import profile from "../assets/user.png";

const About = () => {
    
    document.title = 'about';
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
                    <button>Explore projects</button>
                    <button>Get in touch</button>
                </section>
                <section className='profile-section'>
                    <img src={profile} alt="profile" />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;