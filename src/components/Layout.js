import React, { useState, useEffect } from 'react';
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

    // Recalculate height on resize or route change
    useEffect(() => {
        const handleResize = () => {
            const nav = document.querySelector('nav');
            if (nav && !isExcludedPage) {
                setNavbarHeight(nav.offsetHeight);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [pathname, isExcludedPage]);

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
