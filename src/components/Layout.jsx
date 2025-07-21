import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({ children }) {
    const location = useLocation();
    
    // Rutas donde no se debe mostrar la navegación ni el footer
    const hideNavigationRoutes = ['/card'];
    
    const shouldHideNavigation = hideNavigationRoutes.includes(location.pathname);
    
    if (shouldHideNavigation) {
        return <>{children}</>;
    }
    
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
