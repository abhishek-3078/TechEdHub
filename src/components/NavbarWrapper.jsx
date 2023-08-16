import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const excludedRoutes = ['/login', '/signup']; // Add the paths of the excluded routes here
function NavbarWrapper({ children }) {
  const location = useLocation();

  const shouldRenderNavbar = !excludedRoutes.includes(location.pathname);

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

export default NavbarWrapper;
