import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home,RoadMap} from './components'
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SubjectCard from "./components/SubjectCard";
import CourseCard from "./components/CourseCard";
import ContainCourseCard from "./components/ContainCourseCard";
import AllCourses from "./components/AllCourses";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
      
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/userprofile/:user" element={<AdminPanel/>}></Route>

          <Route index element={<Home />} />
          <Route path="/course/:slug" element={<RoadMap/>}></Route>

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    <Footer />
    </BrowserRouter>
    </>


  )
}

export default App;