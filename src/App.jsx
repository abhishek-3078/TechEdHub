import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {Home,RoadMap} from './components'
import "./App.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AdminPanel from "./components/adminpanel"

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import Navbar from './Navbar';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function App() {
//   const location = useLocation();
//   const excludedRoutes = ['/exclude1', '/exclude2']; // Add the paths of the excluded routes here

//   const shouldRenderNavbar = !excludedRoutes.includes(location.pathname);

//   return (
//     <Router>
//       {shouldRenderNavbar && <Navbar />}

//       <Switch>
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         {/* Add more routes as needed */}
//       </Switch>
//     </Router>
//   );
// }




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
