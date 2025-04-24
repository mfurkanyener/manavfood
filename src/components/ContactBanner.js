import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const ContactBanner = () => {
    const { messages } = useLanguage();
    const t = messages?.homepage?.contactBanner || {};
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0" />
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    {t.title} <span className="text-[rgb(var(--color-green))] font-semibold">{t.titleGreen}</span>
                </h2>
                <p className="text-md md:text-lg font-medium mb-8">
                    {t.subtitle}
                </p>

                <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-6 py-3 rounded-xl text-md hover:bg-gray-900 transition"
                >
                    {t.buttonText}
                </Link>
            </div>
        </section>
    );
};

export default ContactBanner;