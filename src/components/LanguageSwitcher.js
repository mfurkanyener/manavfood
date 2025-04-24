import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
    const { locale, changeLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                    locale === "en"
                        ? "bg-[#44AA00] text-white"
                        : "bg-white text-[#44AA00] border border-[#44AA00]"
                }`}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage("tr")}
                className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                    locale === "tr"
                        ? "bg-[#44AA00] text-white"
                        : "bg-white text-[#44AA00] border border-[#44AA00]"
                }`}
            >
                TR
            </button>
        </div>
    );
}