import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const isMenuPage = pathname === "/menu";
    const isContactPage = pathname === "/contact";
    const isTomatoPage = pathname === "/tomatoProducts";

    if (isMenuPage || isContactPage) return null;

    return (
        <footer className={`${isTomatoPage ? "bg-[#A1D582]" : "bg-[#A1D582]"} text-white py-10`}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-start md:space-x-8">
                    <div className="mb-6 md:mb-0">
                        <Image
                            src="/images/sunblu.png"
                            alt="sunblu logo"
                            width={100}
                            height={100}
                            className="mb-4 rounded-xl"
                        />
                        <p className="font-bold text-lg space-y-3 mb-4">MANAVFOOD</p>
                        <div className="flex items-center">
                            <p className="w-20 font-semibold">E-MAIL</p>
                            <a href="mailto:feray@manavfood.com" className="ml-12 mt-1 text-white hover:underline block">
                                feray@manavfood.com
                            </a>
                        </div>
                        <div className="flex items-start">
                            <p className="w-20 font-semibold">ADDRESS</p>
                            <p className="ml-12">
                                Adalet Mahallesi Manas Bul. No: 12/2<br />
                                Center Office Bayraklı IZMIR TURKEY
                            </p>
                        </div>
                        <p className="text-sm mt-9">Privacy - Terms</p>
                        <p className="text-sm">© 2025</p>
                    </div>
                </div>

                <div className="ml-20">
                    <Link href="/products">
                        <p className="font-semibold mb-2 mt-28">Products</p>
                    </Link>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Products</li>
                        <li>Seafood Products</li>
                    </ul>
                </div>

                <div className="ml-20">
                    <Link href="/packaging">
                        <p className="font-semibold mb-2 mt-28">Packaging</p>
                    </Link>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Packaging</li>
                        <li>Seafood Packaging</li>
                    </ul>
                </div>

                <div className="ml-20">
                    <Link href="/sustainability">
                        <p className="font-semibold mb-2 mt-28">Sustainability</p>
                    </Link>
                </div>

                <div className="ml-20">
                    <Link href="/contact">
                        <p className="font-semibold mb-2 mt-28">Contact Us</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;