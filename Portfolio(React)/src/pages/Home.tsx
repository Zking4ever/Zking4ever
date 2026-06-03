import { Link } from "react-router-dom";
import profile from "../assets/user.png";
import Header from '../components/Header'
import '../assets/Styles/home.css'
// importing tools icon
import Tools from "../components/UI/ToolList/Tools";
//importing colorful icon


const Home = () => {
    
    return (
        <>
            <Header />
            <section className='home'>
                <div className="name">
                    <h4 className='greet'>Hey<div className="shakeHand">👋</div> I'm </h4>
                    <h2>Astawus Amsalu</h2>
                </div>
                <div className='profile'>
                    <img src={profile} alt="profile image" />
                </div>
                <div className="description">
                    <div className="intro"> A passionate 
                        <div className='jobTitle-container'>
                            <div className="jobTitles">
                                <span>Desktop App Developer</span>
                                <span>Full Stack Developer</span>
                                <span>Problem Solver</span>
                                <span>Mobile App Developer</span>
                                <span>Frontend Developer</span>
                            </div>
                        </div>
                        obssesed in creating interactive and user-friendly tech products. 
                    </div>
                    <div className="btns">
                        <Link to="/projects"><button>View My Work</button></Link>
                        <Link to="/contact"><button>Get In Touch</button></Link>
                    </div>
                </div>
                {/* Background texture svg */}
                <div className="background-svg"></div>
            </section>
            <section>
                    <div>
                        <span className="home-title">What I Do</span>
                        <p className="home-title-desc">Here are all the services that i provide to my clients. I hope I offer the service that you are looking for. If you do not find what you are looking for then please send me an email.</p>
                    </div>
                    <div className="work-container">
                        <div className="work">
                            <h3>Web Development</h3>
                            <p>I build responsive and dynamic websites that provide an engaging user experience. From landing pages to complex web applications, I create solutions that meet your business needs.</p>
                        </div>
                        <div className="work">
                            <h3>UI/UX Design</h3>
                            <p>I design intuitive and visually appealing user interfaces that enhance user experience. My designs are user-centered, ensuring that your audience can easily navigate and interact with your digital products.</p>
                        </div>
                        <div className="work">
                            <h3>Consulting</h3>
                            <p>I offer expert advice on web development and digital strategies. Whether you're looking to improve your existing website or plan a new project, I provide insights and recommendations to help you achieve your goals.</p>
                        </div>
                    </div>
            </section>
            <section>
                    <div>
                        <span className="home-title">What I Use to Build Stuff</span>
                        <p className="home-title-desc">Here are the powerful tools and technologies I use to bring your ideas to life. From front-end frameworks to back-end systems, I create seamless, scalable solutions tailored to your needs, delivering high-quality results with lasting impact.</p>
                    </div>
                    <Tools />
            </section>
            <section>
                    <div>
                        <span className="home-title">Have a Project in your mind ?Let's get to work ⚡</span>
                        <p>I am actively seeking new opportunities and my inbox is always open. Whether you have a question or simply want to say Hello , I will do my best to respond!</p>
                    </div>
                    <div>

                    </div>
            </section>
        </>
    );
};

export default Home;