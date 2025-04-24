import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPolicy() {
    const { messages } = useLanguage();
    const t = messages.privacy;

    return (
        <>
            <Head>
                <title>{t.pageTitle}</title>
                <meta name="description" content={t.pageDescription} />
            </Head>
            <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
                <p className="mb-4">{t.intro}</p>

                <section className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">1. {t.collectTitle}</h2>
                        <ul className="list-disc list-inside">
                            {t.collectItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">2. {t.usageTitle}</h2>
                        <p>{t.usageContent}</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">3. {t.protectionTitle}</h2>
                        <p>{t.protectionContent}</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">4. {t.cookiesTitle}</h2>
                        <p>{t.cookiesContent}</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-6 mb-2">5. {t.contactTitle}</h2>
                        <p>
                            {t.contactContent}{" "}
                            <a href="mailto:feray@manavfood.com" className="text-blue-600 underline">
                                feray@manavfood.com
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}