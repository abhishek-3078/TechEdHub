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

// import CourseBox from "./components/courseBox";
import CourseTemplate from "./components/CourseTemplate";

import NavbarWrapper , {FooterWrapper} from "./components/NavbarWrapper";
import SubjectDashboard from "./components/SubjectDashboard";



function App() {

  return (
    <>
    <BrowserRouter>
    <NavbarWrapper />
      <Routes>
      
          <Route path="/userprofile/:user" element={<AdminPanel/>}></Route>

          <Route index element={<Home />} />
          <Route path="/course/:slug" element={<CourseTemplate/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/home" element={<SubjectDashboard/>}/>


      </Routes>
    <FooterWrapper />
    </BrowserRouter>
    {/* <CourseTemplate/> */}
    </>
  )
}

export default App;