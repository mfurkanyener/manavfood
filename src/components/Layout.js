import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { Manrope} from 'next/font/google'
import ScrollToTop from "@/components/ScrollToTop";

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
})


const Layout = ({children}) => {

    return (
        <>
            <main className={manrope.className}>
            <Navbar/>
            {children}
            <Footer/>
            <ScrollToTop />
            </main>
        </>
    );
};

export default Layout;