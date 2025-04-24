import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import { Manrope } from 'next/font/google';
import { LanguageProvider } from "@/context/LanguageContext"; // ✅ ekle

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
});

const Layout = ({ children }) => {
    return (
        <LanguageProvider>
            <main className={manrope.className}>
                <Navbar />
                {children}
                <Footer />
                <ScrollToTop />
            </main>
        </LanguageProvider>
    );
};

export default Layout;