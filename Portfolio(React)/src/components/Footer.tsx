
function Footer(){
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Astawus Amsalu. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;