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
      <h1 className='text-white text-6xl  text-center font-heading'>TechEdHub</h1>
      <div className='bg-primary/10 font-sans text-3xl text-white text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, molestias nulla! Dolores iusto nesciunt officia itaque a fuga voluptatem deserunt molestias consequatur voluptate ad blanditiis ea veritatis, quisquam omnis iure.
      </div>
     <div className='flex justify-center'>
        <button className='btn btn-primary font-sans p-4 text-4xl rounded-3xl '>Get Started</button>
     </div>
      </main>
      <Footer />
      </div>
  )
}

export default Home