import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {Home,RoadMap,Login,SignUp} from './components'
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import LoginDiv from "./components/LoginDiv";
import Newsbox from "./components/Newsbox";

import AdminPanel from "./components/adminpanel"
import CourseBox from "./components/courseBox";
import CourseTemplate from "./components/CourseTemplate";

function App() {
  return (
    <>
    {/* <Navbar/>
    <BrowserRouter> */}
    {/* <Navbar /> */}
      {/* <Routes> */}
      
        {/* <Route path="/" element={<Layout />}> */}
          {/* <Route path="/userprofile/:user" element={<AdminPanel/>}></Route>

          <Route index element={<Home />} />
          <Route path="/course/:slug" element={<RoadMap/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/signup" element={<SignUp/>}/> */}

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      {/* </Routes>
    <Footer />
    </BrowserRouter> */}

    {/* <StudentDashboard/> */}
    <CourseTemplate/>
    </>


  )
}

export default App;