import profile from "../assets/user.png";

const Home = ({clickHandler}: {clickHandler:(x:string)=>void}) => {
    
    return (
        <>
            <section className='home'>
                <div className="name">
                    <h4 className='greet'>Hey<div className="shakeHand">👋</div> I'm </h4>
                    <h2><a href='https://google.com/astawus amsalu'>Astawus Amsalu</a></h2>
                </div>
                <div className='profile'>
                    <img src={profile} alt="profile image" />
                </div>
                <div className="description">
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
                    <div className="btns">
                        <button onClick={()=>clickHandler('projects')} id='projects'>View My Work</button>
                        <button onClick={()=>clickHandler('contact')} id='contact'>Get In Touch</button>
                    </div>
                </div>
            </section>
            <section>
                    <div>
                        <span className="home-title">What I Do</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path fill="var(--color1)" d="M450 65H130l-10-10h320l10 10zM870 65H550l10-10h320l-10 10zM500 15l35 35-35 35-35-35zM440 45H70l10-10h370l-10 10zM930 45H560l-10-10h370l10 10z"></path></svg>
                        <p className="home-title-desc">Here are all the services that i provide to my clients. I Hope I offer the service that you are looking for. If you do not find something that you are looking for than please send me an email.</p>
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
                    <div className="tools-container">
                        <div className="tools">
                            <div className="toolBox">
                                <div className="logo"></div><span>HTML5</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>CSS3</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>JavaScript</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>TypeScript</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>React</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Node.js</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Express.js</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>MongoDB</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Git & GitHub</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Figma</span>
                            </div>
                        </div>
                        <div aria-hidden className="tools">
                            <div className="toolBox">
                                <div className="logo"></div><span>HTML5</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>CSS3</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>JavaScript</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>TypeScript</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>React</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Node.js</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Express.js</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>MongoDB</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Git & GitHub</span>
                            </div>
                            <div className="toolBox">
                                <div className="logo"></div><span>Figma</span>
                            </div>
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