import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import { Manrope } from 'next/font/google';
import { LanguageProvider } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";

const manrope = Manrope({
    subsets: ['latin'],
    display: 'swap',
});

const Layout = ({ children }) => {
    const pathname = usePathname();
    const [navbarHeight, setNavbarHeight] = useState(0);
    const isExcludedPage = pathname === "/contact" || pathname === "/menu";

    return (
        <LanguageProvider>
            <main
                className={manrope.className}
                style={{ paddingTop: isExcludedPage ? undefined : navbarHeight }}
            >
                <Navbar setNavbarHeight={setNavbarHeight} />
                {children}
                <Footer />
                <ScrollToTop />
            </main>
        </LanguageProvider>
    );
};

export default Layout;