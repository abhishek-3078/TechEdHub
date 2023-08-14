import React from 'react'
import './Home_CSS.css'
import Navbar from './navbar'
import Footer from './footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="h-[400px]">
      <div className="  h-full top-0 z-20 left-0">
        <video autoPlay muted loop height={'400px'} className=" border-2 ">
          <source src="/videos/video_bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </main>
      <Footer />
      </div>
  )
}

export default Home