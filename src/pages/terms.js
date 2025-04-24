import Head from "next/head";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsConditions() {
    const { messages } = useLanguage();
    const t = messages.terms;

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
                        <h2 className="text-xl font-semibold mb-2">1. {t.useTitle}</h2>
                        <p>{t.useContent}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">2. {t.liabilityTitle}</h2>
                        <p>{t.liabilityContent}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">3. {t.changesTitle}</h2>
                        <p>{t.changesContent}</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">4. {t.contactTitle}</h2>
                        <p>
                            {t.contactContent}{" "}
                            <a
                                href="mailto:feray@manavfood.com"
                                className="text-blue-600 underline"
                            >
                                feray@manavfood.com
                            </a>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}