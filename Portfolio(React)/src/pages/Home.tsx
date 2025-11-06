import profile from "../assets/user.png";

const Home = ({clickHandler}: {clickHandler:(x:string)=>void}) => {
    
    return (
        <>
            <div className='home'>
                <section className="welcome-section">
                    <div className='greet'>
                        <h1>Hey World,</h1>
                        <h1>👋</h1>
                    </div>
                    <h3><a href='https://google.com/astawus amsalu'>I'm Astawus Amsalu</a></h3>
                    <p className="intro"> A passionate 
                        <div aria-hidden className='jobTitle-container'>
                            <div className="jobTitles">
                              <span>Full Stack Developer</span>
                              <span>Mobile App Developer</span>
                              <span>Frontend Developer</span>
                            </div>
                            <div className="jobTitles">
                              <span>Full Stack Developer</span>
                              <span>Mobile App Developer</span>
                              <span>Frontend Developer</span>
                            </div>
                        </div>
                        obssesed in creating interactive and user-friendly websites/applications. 
                    </p>
                    <button onClick={()=>clickHandler('projects')} id='projects'>View My Work</button>
                    <button onClick={()=>clickHandler('contact')} id='contact'>Get In Touch</button>
                </section>
                <section className='profile-section'>
                    <img src={profile} alt="profile" />
                </section>
            </div>
            <section>
                    <div>
                        <span className="home-title">What I Do</span>
                        <p className="home-title-desc">Here are all the services that i provide to my clients. I Hope I offer the service that you are looking for. If you do not find something that you are looking for than please send me an email.</p>
                    </div>
                    <div className="work-container">
                        <div className="work" data-aos="fade-up"
     data-aos-duration="3000">
                            <h3>Web Development</h3>
                            <p>I build responsive and dynamic websites that provide an engaging user experience. From landing pages to complex web applications, I create solutions that meet your business needs.</p>
                        </div>
                        <div className="work" data-aos="fade-up"
     data-aos-duration="3000">
                            <h3>UI/UX Design</h3>
                            <p>I design intuitive and visually appealing user interfaces that enhance user experience. My designs are user-centered, ensuring that your audience can easily navigate and interact with your digital products.</p>
                        </div>
                        <div className="work" data-aos="fade-up"
     data-aos-duration="3000">
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
                    <div>
                        <div className="tools-container">
                            <div className="tool">HTML5</div>
                            <div className="tool">CSS3</div>
                            <div className="tool">JavaScript</div>
                            <div className="tool">TypeScript</div>
                            <div className="tool">React</div>
                            <div className="tool">Node.js</div>
                            <div className="tool">Express.js</div>
                            <div className="tool">MongoDB</div>
                            <div className="tool">Git & GitHub</div>
                            <div className="tool">Figma</div>
                        </div>
                    </div>
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