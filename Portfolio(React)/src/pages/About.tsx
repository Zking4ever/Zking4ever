import Footer from '../components/Footer';
import profile from "../assets/user.png";
import TimeLine from '../components/TitmeLine';

const About = () => {
    
    document.title = 'about';
    return (
        <>
            <div className='home'>
                <section className="welcome-section">
                    <h1>About</h1>
                    <p> A software developer with a passion for creating interactive and user-friendly applications. 
                         and get to know more about my work.
                    </p>
                    <h1>Education</h1>
                    <TimeLine />
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