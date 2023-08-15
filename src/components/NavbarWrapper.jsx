import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';

function NavbarWrapper({ children }) {
  const location = useLocation();
  const excludedRoutes = ['/exclude1', '/exclude2']; // Add the paths of the excluded routes here

  const shouldRenderNavbar = !excludedRoutes.includes(location.pathname);

  return (
    <div>
      {shouldRenderNavbar && <Navbar />}
      {children}
    </div>
  );
}

export default NavbarWrapper;
