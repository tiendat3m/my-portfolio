import React from 'react'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Eduction from '../components/education/Education'
import Skills from '../components/skills/Skills'
import Mycard from '../components/mycard/MyCart'
import Project from '../components/myprojects/Project'
import Footer from '../components/footer/Footer'

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Mycard />
            <About />
            <Eduction />
            <Skills />
            <Project />
            <Footer />
        </div>
    )
}

export default HomePage
