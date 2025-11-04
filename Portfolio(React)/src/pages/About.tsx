import profile from "../assets/user.png";
import TimeLine from '../components/TitmeLine/TitmeLine';

const About = () => {
    
    const Education = [
        {
            'time': '2016-present',
            'content': 'Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem necessitatibus, esse mollitia non repellendus nulla deleniti expedita repudiandae minima illum, fugiat nam tempora at ipsa vero facilis doloremque eaque. dolor sit amet consectetur adipisicing elit. Architecto ex, itaque tempora illo in veniam quibusdam qui maiores optio mollitia inventore veritatis, voluptatem ipsa soluta debitis voluptatibus a fuga perspiciatis.'
        },
        {
            'time': '2010-2015',
            'content': 'Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem necessitatibus, esse mollitia non repellendus nulla deleniti expedita repudiandae minima illum, fugiat nam tempora at ipsa vero facilis doloremque eaque. dolor sit amet consectetur adipisicing elit. Architecto ex, itaque tempora illo in veniam quibusdam qui maiores optio mollitia inventore veritatis, voluptatem ipsa soluta debitis voluptatibus a fuga perspiciatis.'
        },
        {
            'time': '2003-2009',
            'content': 'Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem necessitatibus, esse mollitia non repellendus nulla deleniti expedita repudiandae minima illum, fugiat nam tempora at ipsa vero facilis doloremque eaque. dolor sit amet consectetur adipisicing elit. Architecto ex, itaque tempora illo in veniam quibusdam qui maiores optio mollitia inventore veritatis, voluptatem ipsa soluta debitis voluptatibus a fuga perspiciatis.'
        },
        {
            'time': '2011-2015',
            'content': ''
        }
    ]

    return (
        <>
            <div className='home'>
                <section className="welcome-section">
                    <h1>About</h1>
                    <p> A software developer with a passion for creating interactive and user-friendly applications. 
                         and get to know more about my work.
                    </p>
                </section>
                <section className='profile-section'>
                    <img src={profile} alt="profile" />
                </section>
            </div>
            <h1 style={{textAlign:'left'}}>Education</h1>
            {
                Education.map((educationData)=>(
                    <TimeLine time={educationData.time} content={educationData.content}/>
                ))
            }
        </>
    );
};

export default About;