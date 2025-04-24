import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

export default function MarqueeBanner() {
    const { messages } = useLanguage(); // 🌍
    const items = messages.homepage.marquee.items; // 🔁 Çok dilli içerik

    return (
        <div className="relative overflow-hidden bg-[#45BEE0] py-3">
            <div className="flex w-[200%] animate-marquee">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex whitespace-nowrap items-center">
                        {items.map((text, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-white font-semibold text-[36px] px-6">
                                    {text}
                                </span>
                                <Image
                                    src="/images/logo/sunblu.png"
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    className="mx-4 rounded-[10px]"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}