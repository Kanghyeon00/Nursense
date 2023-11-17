import React from 'react'
import Header from '../components/Header'
import BannerSlide from '../components/BannerSlide'
import ContentSlide from '../components/ContentSlide'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <>
        <div className='mainContainer'>
            <div className='mainWrapper'>
                <Header />
                <BannerSlide />
                <ContentSlide />
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Main