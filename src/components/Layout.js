import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({children}) => {

    return (
        <React.Fragment>
            <Navbar/>
            {children}
            <Footer/>
        </React.Fragment>
    );
};

export default Layout;