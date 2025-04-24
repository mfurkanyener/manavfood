import React, { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import ScrollToTop from "@/components/ScrollToTop";
import { Manrope } from 'next/font/google';
import { LanguageProvider } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import Head from "next/head";

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
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "ManavFood",
                            "url": "https://manavfood.com",
                            "logo": "https://manavfood.com/images/logo/sunblu.png",
                            "sameAs": [
                                "https://www.linkedin.com/company/manavfood/",
                                "https://www.instagram.com/manavfood/"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+90-555-555-5555",
                                "contactType": "Customer Support",
                                "areaServed": "TR",
                                "availableLanguage": ["English", "Turkish"]
                            }
                        })
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "url": "https://manavfood.com",
                            "name": "ManavFood",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://manavfood.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        })
                    }}
                />
            </Head>
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
