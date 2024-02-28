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
                        Hello, My name is Phan Tien Dat, currently in final year, pursuing
                        Frontend tech in Information Technology from Ho Chi Minh University of Technology
                        and Education. My skills includes a basic foundation in C++ and
                        Javascript, from development perpective, i have done some projects in
                        ReactJs for Web application and as these are nothing but just Javascript, So, I am
                        specialized in JavaScript Ecosystem. For computer science fundamentals, I have a
                        basic knowledge about Data Structure & Algorithm, Operating system,
                        Database management system and Object Oriented Technique. I sometimes
                        also practiced coding by solving problems on popular coding platforms like Leetcode.
                    </p>
                    <a
                        // href="https://drive.google.com/file/d/1yJVxwEG6nNQSUNxRjSYtPsyqLOZ_7bcj/view?usp=sharing"
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
