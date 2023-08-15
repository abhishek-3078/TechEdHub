import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,RoadMap} from './components'
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginDiv from "./components/LoginDiv";

function App() {
  return (
    // <>
    // <BrowserRouter>
    // <Navbar />
    //   <Routes>
    //     {/* <Route path="/" element={<Layout />}> */} 
    //       <Route index element={<Home />} />
    //       <Route path="/course/:slug" element={<RoadMap/>}></Route>
    //       {/* <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //     <Route path="*" element={<NoPage />} /> */}
    //     {/* </Route> */}
    //   </Routes>
    // <Footer />
    // </BrowserRouter>
    // </>
    <LoginDiv />

  )
}

export default App;
