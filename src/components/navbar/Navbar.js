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
            <div className="mx-auto w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] relative">
                <Link href="/homepage">
                <Image
                    className={`logo ${isContactPage ? "rounded-[16px]" : ""} object-contain`}
                    src="/images/logo/sunblu.png"
                    alt="logo"
                    fill
                />
                </Link>
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
                    <div
                        className="bg-[#44AA00] p-2 sm:p-3 md:p-4 rounded-[12px] sm:rounded-[16px] cursor-pointer w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center"
                    >
                        <GiHamburgerMenu
                            size={20} // veya responsive olarak dinamik
                            className="text-white w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]"
                        />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;