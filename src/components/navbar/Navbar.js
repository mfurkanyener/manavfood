import Link from 'next/link';
import {GiHamburgerMenu} from "react-icons/gi";
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between text-black py-4 px-6">
            {/* Logo */}
            <div className="mx-auto ">
                <Image className="logo" src="/images/sunblu.png" alt="logo" width={250} height={250}/>
            </div>

            {/* Menü Öğeleri */}
            <div className="flex items-center gap-6 mx-auto ">
                <Link href="/homepage" className="hidden md:flex text-lg hover:text-gray-400 ">Homepage</Link>
                <Link href="/about" className="hidden md:flex text-lg hover:text-gray-400">About Us</Link>
                <Link href="/products" className="hidden md:flex text-lg hover:text-gray-400">Products</Link>
                <Link href="/packaging" className="hidden md:flex text-lg hover:text-gray-400">Packaging</Link>
                <Link href="/sustainability" className="hidden md:flex text-lg hover:text-gray-400">Sustainability</Link>
                <Link href="/contact" className="hidden md:flex text-lg hover:text-gray-400">Contact Us</Link>
                <Link href="/menu" className="relative flex md:hidden"><GiHamburgerMenu size="50"/></Link>
            </div>
        </nav>
    );
};

export default Navbar;