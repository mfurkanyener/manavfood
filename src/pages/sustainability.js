import React from 'react';
import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Sustainability = () => {
    const { messages } = useLanguage(); // 🌍 Dil dosyasından metin çekilir
    const t = messages.sustainability;

    return (
        <div>
            <Head>
                <title>{t.pageTitle}</title>
                <link rel="icon" href="/images/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Hero Section */}
            <section className="relative">
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/tpbg.png"
                        alt="topographic background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-32 pb-28">
                    <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">{t.heroTitle}</h3>
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">{t.heroSubtitle}</h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        {t.heroDesc}
                    </p>
                    <div className="px-4 py-8">
                        <h1 className="text-lg font-semibold mb-4">{t.certifiedBy}</h1>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Image src="/images/sustainability/brc.png" alt="brc logo" width={100} height={100} />
                            <Image src="/images/sustainability/sedex.jpg" alt="sedex logo" width={100} height={100} />
                            <Image src="/images/sustainability/iso.jpeg" alt="iso logo" width={100} height={100} />
                            <Image src="/images/sustainability/ifs.png" alt="ifs logo" width={100} height={100} />
                            <Image src="/images/sustainability/golabalGap.jpg" alt="globalgap logo" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Cards */}
            <section className="relative px-6 mt-14 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <CertCard title={t.ifsTitle} text={t.ifsDesc} img="/images/sustainability/ifs.png" />
                    <CertCard title={t.globalgapTitle} text={t.globalgapDesc} img="/images/sustainability/golabalGap.jpg" />
                    <CertCard title={t.brcTitle} text={t.brcDesc} img="/images/sustainability/brc.png" />
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                    <CertCard title={t.sedexTitle} text={t.sedexDesc} img="/images/sustainability/sedex.jpg" />
                    <CertCard title={t.isoTitle} text={t.isoDesc} img="/images/sustainability/iso.jpeg" />
                </div>
            </section>
        </div>
    );
};

export default Sustainability;

const CertCard = ({ title, text, img }) => (
    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
        <h4 className="text-xl font-semibold mb-4">{title}</h4>
        <Image src={img} alt={title} width={80} height={80} className="mb-4 mx-auto" />
        <p className="text-sm text-gray-700">{text}</p>
    </div>
);