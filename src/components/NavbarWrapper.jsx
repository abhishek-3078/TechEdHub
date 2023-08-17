import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import AdminPanel from './adminpanel';

const excludedRoutes = ['/login', '/signup','/userprofile/']; // Add the paths of the excluded routes here
function NavbarWrapper({ children }) {
  const location = useLocation();


  let newarray=excludedRoutes.filter((x)=>{
    return location.pathname.search(x)>=0
  })
  let shouldRenderNavbar = true
  if(newarray.length>0) shouldRenderNavbar=false

  return (
    <div>
      {shouldRenderNavbar && <Navbar />}
      {children}
    </div>
  );
}

export function FooterWrapper({ children }) {
  const location = useLocation();
  const shouldRenderNavbar = !excludedRoutes.includes(location.pathname);
  return (
    <div>
      {shouldRenderNavbar && <Footer />}
      {children}
    </div>
  );
}

export function UserProfileWrapper({ children }) {
  const location = useLocation();
  const shouldRenderNavbar = !excludedRoutes.includes(location.pathname);
  return (
    <div>
      {shouldRenderNavbar && <AdminPanel />}
      {children}
    </div>
  );
}

export default NavbarWrapper;
