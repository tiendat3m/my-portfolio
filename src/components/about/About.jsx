import './about.css'

const About = () => {
    return (
        <div className="aboutcontainer" id="about">
            <div className="partContainer">
                <div className="partleft">
                    <h1>ABOUT ME</h1>
                    <div className="bar1"></div>
                </div>
                <div className="partrightAbout">
                    <p>
                        Hello, My name is Piyush Sagar Currently in final year, pursuing
                        B.tech in Information technology from Dr. Ram Manohar Lohia Avadh
                        University, My skills includes a decent foundation in C++ and
                        javascript, from development perpective, i have done many project in
                        React and Node (basically MERN ) for both Mobile and Web and as
                        these are nothing but just Javascript, So, I am well Good in
                        JavaScript Ecosystem. For computer science fundamentals, I have a
                        decent knowledge about Data Structure & Algorithm, Operating system,
                        Database management system and Object Oriented Technique. I have
                        also practiced coding by solving over 500+ problems on various
                        coding platforms like Leetcode, GFG and Hackerrank
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1yJVxwEG6nNQSUNxRjSYtPsyqLOZ_7bcj/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
