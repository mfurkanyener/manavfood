import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const isMenuPage = pathname === "/menu";
    const isContactPage = pathname === "/contact";

    if (isMenuPage || isContactPage) return null;

    return (
        <footer className="bg-[#45BEE0] text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                {/* Firma Bilgileri */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <Image
                        src="/images/sunblu.png"
                        alt="sunblu logo"
                        width={100}
                        height={100}
                        className="rounded-xl"
                    />
                    <p className="font-bold text-lg">MANAVFOOD</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <p className="font-semibold w-[80px]">E-MAIL</p>
                        <a href="mailto:feray@manavfood.com" className="hover:underline text-sm">
                            feray@manavfood.com
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
                        <p className="font-semibold w-[80px]">ADDRESS</p>
                        <p className="text-sm">
                            Adalet Mahallesi Manas Bul. No: 12/2<br />
                            Center Office Bayraklı IZMIR TURKEY
                        </p>
                    </div>
                    <div className="pt-4 text-sm">
                        <p>Privacy - Terms</p>
                        <p>© 2025</p>
                    </div>
                </div>

                {/* Products */}
                <div>
                    <Link href="/products" className="block font-semibold mb-2">
                        Products
                    </Link>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Products</li>
                        <li>Seafood Products</li>
                    </ul>
                </div>

                {/* Packaging */}
                <div>
                    <Link href="/packaging" className="block font-semibold mb-2">
                        Packaging
                    </Link>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Packaging</li>
                        <li>Seafood Packaging</li>
                    </ul>
                </div>

                {/* Sustainability */}
                <div>
                    <Link href="/sustainability" className="block font-semibold mb-2">
                        Sustainability
                    </Link>
                </div>

                {/* Contact */}
                <div>
                    <Link href="/contact" className="block font-semibold mb-2">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;