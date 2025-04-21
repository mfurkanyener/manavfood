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
        <footer className={`${isTomatoPage ? "bg-[#A1D582]" : "bg-[#45BEE0]"} text-white py-10`}>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-6 gap-6">

                <div className="order-5 lg:order-1 col-span-1 lg:col-span-2 flex flex-col">
                    <Image
                        src="/images/logo/sunblu.png"
                        alt="sunblu logo"
                        width={100}
                        height={100}
                        className="mb-4 rounded-xl"
                    />
                    <p className="font-bold text-lg mb-4">MANAVFOOD DIŞ TİCARET A.Ş.</p>

                    <div className="flex items-start mb-2">
                        <p className="w-20 font-semibold">E-MAIL</p>
                        <a href="mailto:feray@manavfood.com" className="ml-4 text-white hover:underline block">
                            feray@manavfood.com
                        </a>
                    </div>
                    <div className="flex items-start mb-4">
                        <p className="w-20 font-semibold">ADDRESS</p>
                        <p className="ml-4 text-sm leading-snug">
                            Adalet Mahallesi Manas Bul. No: 12/2<br/>
                            Center Office Bayraklı IZMIR TURKEY
                        </p>
                    </div>

                    <div className="text-sm text-white mt-4 space-x-2">
                        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                        <span>·</span>
                        <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                        <span className="block mt-2">© 2025</span>
                    </div>
                </div>

                {/* LİNKLER → MASAÜSTÜDE SAĞDA, MOBİLDE ÜSTTE */}

                <div className="order-1 lg:order-2">
                    <Link href="/products"><p className="font-semibold mb-2">Products</p></Link>
                    <ul className="space-y-1 text-sm">
                        <Link href="/tomatoProducts"><li>Tomato Products</li></Link>
                        <Link href="/fishProducts"><li>Seafood Products</li></Link>
                    </ul>
                </div>

                <div className="order-2 lg:order-3">
                    <Link href="/packaging"><p className="font-semibold mb-2">Packaging</p></Link>
                </div>

                <div className="order-3 lg:order-4">
                    <Link href="/sustainability"><p className="font-semibold mb-2">Sustainability</p></Link>
                </div>

                <div className="order-4 lg:order-5">
                    <Link href="/contact"><p className="font-semibold mb-2">Contact Us</p></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;