import Link from 'next/link';
import {GiHamburgerMenu} from "react-icons/gi";
import Image from 'next/image';

const navLinks = [
    { name: "Homepage", href: "/homepage" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Packaging", href: "/packaging" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between text-black py-4 px-6">
            {/* Logo */}
            <div className="mx-auto ">
                <Image className="logo" src="/images/sunblu.png" alt="logo" width={250} height={250}/>
            </div>
            {/* Menü Öğeleri */}
            <div className="flex items-center gap-6 mx-auto">
                {/* Büyük ekranlarda gösterilecek linkler */}
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hidden lg:flex text-lg hover:text-gray-400"
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Küçük ekranlar için hamburger menü */}
                <Link href="/menu" className="flex lg:hidden ml-auto">
                    <GiHamburgerMenu size="50"/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;