import profile from "../assets/user.png";
import Header from "../components/Header";
import TimeLine from '../components/UI/TitmeLine/TitmeLine';

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
            <Header />
            <div>
                <section style={{textAlign:'left',padding:20}}>
                    <h1>About</h1>
                    <p> 
                        Do you remember the day you said "Ohh..I'm born for this" for the first time? you might have said it a lot:)
                         but let me tell my story. My name is Astawus which means 'remeber!' and I do remember:). My tech journey was 
                         stated with my poor old lovely desktop(lets call her PLO).Everything was normal until PLO goes down 
                         almost to death which was when i was G-9 student.I reached every possible solution in the internet,wathed a ton 
                         of videos to figure out PLO's problem. I spoted every components inside PLO and it took me a week to bring her back.
                         I was so proud of myself and told the crowd what i did. Since then I was the one who fix electronic devices in the neghbourhood.
                         My curiousity didn't stop with hardware that i stared learning what is really behind the scene. I stared to explore the software world and got introduce
                         to operating systems and programming languages. This was the moment i got obssesd with programming. I learnt C++,Java, HTML,CSS and Javascript.
                         As a boy, loved the frontend because of the canva to do on visible things than working on terminals. It was so cool learning web development that i tried 
                         to build a lot of staffs on PLO. My obssesion with programming kept growing up that I learned different languages expanding the skillkit.
                         I started working on backend logics mastering writing efficient algorithms. Fast forward... Even though I had the chance and everyone wanted me to join Medicine, I chose Computer Science.
                         And currently I'm a fullstack developer working on different fields building ground breaking products. There is a lot to come so stay tuned.

                    </p>
                </section>
                <section className='profile'>
                    <img src={profile} alt="profile" />
                </section>
            </div>
            <h1 style={{textAlign:'left'}}>Education</h1>
            {
                Education.map((educationData)=>(
                    <TimeLine time={educationData.time} content={educationData.content} key={educationData.time}/>
                ))
            }
        </>
    );
};

export default About;