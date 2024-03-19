import "./footer.css";

const Footer = () => {
    return (
        <div id="footer" className="footer-container">
            <h2>What is that paradise? Which can be found in a moment.</h2>
            <div className="footeritem">
                <div className="footerlink">
                    <a
                        href="https://www.linkedin.com/in/tiendat3m/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>LINKEDIN</p>
                    </a>
                    <a
                        href="https://github.com/tiendat3m"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p>GITHUB</p>
                    </a>
                </div>
                <p>Made by Tien Dat💖</p>
                <div className="bar1-f"></div>
            </div>
        </div>
    );
};

export default Footer;