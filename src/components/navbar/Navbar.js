import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

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
    const isMenuPage = pathname === "/menu";

    if (isMenuPage) return null;

    return (
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
            {/* Logo */}
            <div className="relative w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
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
            <div className="flex items-center gap-6">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hidden lg:flex relative text-lg transition-colors duration-200
                ${
                                isActive
                                    ? isContactPage
                                        ? "text-white"
                                        : "text-[#44AA00]"
                                    : isContactPage
                                        ? "text-black hover:text-white"
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

                {/* Hamburger Menü Butonu */}
                <Link href="/menu">
                    <div className="bg-[#44AA00] p-2 sm:p-3 md:p-4 rounded-[12px] sm:rounded-[16px] cursor-pointer w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center">
                        <GiHamburgerMenu
                            size={20}
                            className="text-white w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px]"
                        />
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;