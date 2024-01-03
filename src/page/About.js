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
              <div className='aboutTextWrapper'>
              <h1>Nursense</h1>
              <p>다양한 간호술기 공부를 메타버스로 쉽고 재미있게</p>
              <button className='aboutDownload' onClick={openAbout}>✔ 소개서 다운로드</button>
              </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About