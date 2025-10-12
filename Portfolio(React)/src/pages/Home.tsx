import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
    const links = [ 
        {
        'name': 'home',
        'href': '../pages/Home'
        },
        {
        'name': 'projects',
        'href': '../pages/Projects.tsx'
        },
        {
        'name': 'contacts',
        'href': '../pages/Projects'
        }
    ]
    return (
        <div>
            <Header navLinks={links} />
            <section className="welcome-section">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I am a software developer with a passion for creating interactive and user-friendly applications. 
                    Explore my projects and get to know more about my work.
                </p>
            </section>
            <Footer />
        </div>
    );
};

export default Home;