import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";
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
    const pathname = usePathname();

    const isContactPage = pathname === "/contact";
    const isMenuPage = pathname === "/menu"; // 🔸 yeni kontrol
    if (isMenuPage) return null; // 🔸 menu sayfasında navbar'ı gösterme



    return (
        <nav className="flex items-center justify-between text-black py-4 px-6">
            {/* Logo */}
            <div className="mx-auto">
                <Image
                    className={`logo ${isContactPage ? "rounded-[16px]" : ""}`}
                    src="/images/sunblu.png"
                    alt="logo"
                    width={250}
                    height={250}
                />
            </div>

            {/* Menü Öğeleri */}
            <div className="flex items-center gap-6 mx-auto">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="hidden lg:flex text-lg hover:text-gray-400"
                    >
                        {link.name}
                    </Link>
                ))}

                <Link href="/menu">
                    <div className="bg-[#44AA00]  p-3 rounded-[16px] cursor-pointer">
                        <GiHamburgerMenu size={30} color="#ffffff" />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;