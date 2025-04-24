import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = ({ setNavbarHeight }) => {
    const pathname = usePathname();
    const isContactPage = pathname === "/contact";
    const isMenuPage = pathname === "/menu";

    const { messages } = useLanguage();
    const t = messages.navbar;

    const [scrolled, setScrolled] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        if (isContactPage) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isContactPage]);

    useLayoutEffect(() => {
        if (!isContactPage && navbarRef.current && setNavbarHeight) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
    }, [isContactPage, setNavbarHeight]);

    const navLinks = [
        { name: t.homepage, href: "/homepage" },
        { name: t.about, href: "/about" },
        { name: t.products, href: "/products" },
        { name: t.packaging, href: "/packaging" },
        { name: t.sustainability, href: "/sustainability" },
        { name: t.contact, href: "/contact" },
    ];

    if (isMenuPage) return null;

    return (
        <nav
            ref={navbarRef}
            className={`w-full z-50 transition-all duration-300 ${
                isContactPage
                    ? "relative py-4"
                    : `fixed top-0 left-0 bg-white ${
                        scrolled ? "shadow-md py-2" : "py-4"
                    }`
            }`}
        >
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <div
                    className={`relative transition-all duration-300 ${
                        scrolled
                            ? "w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
                            : "w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]"
                    } ${isContactPage ? "rounded-[24px] bg-white p-2" : ""}`}
                >
                    <Link href="/homepage">
                        <Image
                            className={`logo ${isContactPage ? "rounded-[16px]" : ""} object-contain`}
                            src="/images/logo/sunblu.png"
                            alt="logo"
                            fill
                        />
                    </Link>
                </div>

                {/* Menü ve Butonlar */}
                <div className="flex items-center gap-6">
                    {/* Navigation Links */}
                    <div
                        className={`hidden xl:flex items-center gap-6 transition-opacity duration-300 ${
                            !isContactPage && scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                        }`}
                    >
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative text-lg transition-colors duration-200 ${
                                        isContactPage
                                            ? isActive
                                                ? "text-white"
                                                : "text-black hover:text-white"
                                            : isActive
                                                ? "text-[#44AA00]"
                                                : "text-black hover:text-[#44AA00]"
                                    }`}
                                >
                                <span
                                    className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300 ${
                                        isActive
                                            ? isContactPage
                                                ? "after:w-full after:bg-white"
                                                : "after:w-full after:bg-[#44AA00]"
                                            : "after:w-0 after:bg-[#44AA00] hover:after:w-full"
                                    }`}
                                >
                                    {link.name}
                                </span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Language Switcher */}
                    <LanguageSwitcher/>

                    {/* Hamburger Menü */}
                    <Link href="/menu">
                        <div
                            className={`${isContactPage ? "bg-[#44AA00] rounded-full" : "bg-[#44AA00] rounded-[16px]"} p-2 w-[48px] h-[48px] flex items-center justify-center`}>
                            <GiHamburgerMenu className="text-white w-6 h-6"/>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;