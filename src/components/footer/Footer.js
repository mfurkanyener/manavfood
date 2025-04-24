import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext"; // 🌍 dil bağlamı

const Footer = () => {
    const pathname = usePathname();
    const isMenuPage = pathname === "/menu";
    const isContactPage = pathname === "/contact";
    const isTomatoPage = pathname === "/tomatoProducts";

    const { messages } = useLanguage(); // çeviri verisi
    const t = messages.footer;

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
                    <p className="font-bold text-lg mb-4">{t.company}</p>

                    <div className="flex items-baseline gap-2 mb-2">
                        <p className="min-w-[80px] font-semibold leading-none">{t.email}</p>
                        <a href="mailto:ozden@manavfood.com" className="text-white hover:underline leading-none">
                            feray@manavfood.com                         </a>
                    </div>

                    <div className="flex items-baseline gap-2 mb-4">
                        <p className="min-w-[80px] font-semibold leading-none">{t.address}</p>
                        <p className="text-sm text-white leading-snug">
                            {t.addressDetails}
                        </p>
                    </div>

                    <div className="text-sm text-white mt-4 space-x-2">
                        <Link href="/privacy" className="hover:underline">{t.privacy}</Link>
                        <span>·</span>
                        <Link href="/terms" className="hover:underline">{t.terms}</Link>
                        <span className="block mt-2">© 2025</span>

                        <Link href="https://www.linkedin.com/in/mfurkanyener" className="hover:underline block mt-2 font-semibold italic">Created by
                            Furkan Yener</Link>
                    </div>
                </div>

                {/* Linkler */}
                <div className="order-1 lg:order-2">
                    <Link href="/products"><p className="font-semibold mb-2">{t.products}</p></Link>
                    <ul className="space-y-1 text-sm">
                        <Link href="/tomatoProducts"><li>{t.tomato}</li></Link>
                        <Link href="/fishProducts"><li>{t.seafood}</li></Link>
                    </ul>
                </div>

                <div className="order-2 lg:order-3">
                    <Link href="/packaging"><p className="font-semibold mb-2">{t.packaging}</p></Link>
                </div>

                <div className="order-3 lg:order-4">
                    <Link href="/sustainability"><p className="font-semibold mb-2">{t.sustainability}</p></Link>
                </div>

                <div className="order-4 lg:order-5">
                    <Link href="/contact"><p className="font-semibold mb-2">{t.contact}</p></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;