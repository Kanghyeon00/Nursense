import React from 'react'
import './About.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = () => {

  const openAbout = () => {
    window.open('https://drive.google.com/file/d/1E3EK7dAbRIAypUS_lJPqO8fB1kgpXiMw/view?usp=drive_link', '_blank');
  };

  return (
    <>
        <div className='aboutContainer'>
          <Header />
            <div className='aboutWrapper'>
              
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About