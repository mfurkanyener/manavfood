import React from 'react';
import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const Packaging = () => {
    const { messages } = useLanguage();
    const t = messages.packaging;
    const lists = messages?.readyLists || [];
    const retailLists = messages?.retailLists || [];
    const industralList = messages?.industrialLists || [];
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>{t.title}</title>
                <link rel="icon" href="/images/sunblu.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            {/* Üst Alan */}
            <section className="relative text-center overflow-hidden isolate">
                <div className="relative">
                    {/* Topografik Arkaplan */}
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

                        <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">{t.title}</h3>
                        <h2 className="text-2xl md:text-4xl font-light text-black mb-6">{t.subtitle}</h2>
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">{t.description}</p>
                    </div>
                </div>
            </section>

            {/* Alt Arkaplan */}
            <section className="relative w-full overflow-hidden text-center z-30">
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/packaging/packacgingBg.png"
                        alt="Packaging"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div
                    className="relative z-10 flex flex-col items-start justify-center gap-20 px-4 py-32 max-w-7xl mx-auto">

                    {/* Ready to Eat */}
                    <div className="max-w-[1000px] text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">{t.sections.readyTitle}</h3>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            {t.sections.readyDesc}
                        </p>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/packaging/readyToEat.png"
                                alt="Ready to Eat Vacuum Bags"
                                width={500}
                                height={300}
                                className="rounded-md"
                            />
                        </div>

                        {/* Bilgiler */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl">
                            <h3 className="font-semibold text-lg mb-2">{t.sections.driedTitle}</h3>

                            {lists.map((list, idx) => (
                                <div key={idx} className="mb-4">
                                    <p className="font-semibold">{list.title}</p>
                                    <ul className="list-disc ml-6">
                                        {list.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Retail */}
                    <div className="max-w-[1000px] text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">{t.sections.retailTitle}</h3>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            {t.sections.retailDesc}
                        </p>
                    </div>

                    {/* İçerik - Görsel ve Liste */}
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full">

                        {/* Liste */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl flex-1">
                            {retailLists.map((list, idx) => (
                                <div key={idx} className="mb-6">
                                    <p className="font-semibold">{list.title}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        {list.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            </div>

                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/packaging/retail.png"
                                alt="Retail Jars"
                                width={500}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                    {/* Başlık ve Açıklama */}
                    <div className="max-w-[1000px] text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">
                            <span className="text-black">{t.sections.industrialTitleBlack} </span>
                            <span className="text-green-600">{t.sections.industrialTitleGreen}</span>
                        </h3>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            {t.sections.industrialDesc}
                        </p>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full">

                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/packaging/industrialDired.png"
                                alt="Industrial Dried Tomatoes"
                                width={500}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>

                        {/* Liste */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl flex-1">
                            {industralList.map((list, idx) => (
                                <div key={idx} className="mb-6">
                                    <p className="font-semibold">{list.title}</p>
                                    <ul className="list-disc ml-6 mt-2">
                                        {list.items.map((item, itemIdx) => (
                                            <li key={itemIdx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Başlık */}
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            {t.sections.readToEat}<span className="text-green-600">{t.sections.musselsTitle}</span>
                        </h2>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12">
                        {/* Sol taraf - Bilgiler */}
                        <div className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl w-full">
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.boxSize}</p>
                                <p>10 × 1 package (25 pieces mussel, 450–550 gm.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.boxDim}</p>
                                <p>335 x 300 x 230 (5–6 kg.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.origin}</p>
                                <p>Türkiye</p>
                            </div>
                            <div className="flex">
                                <p className="w-[150px] font-medium">{t.sections.species}</p>
                                <p>Mytilus Galloprovincialis</p>
                            </div>
                        </div>

                        {/* Sağ taraf - Görsel */}
                        <div className="flex gap-6 justify-center items-center">
                            <Image
                                src="/images/packaging/mussels.png"
                                alt="Blue Mussel Bag"
                                width={500}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Başlık */}
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            {t.sections.readToEat}<span className="text-green-600">{t.sections.fishTitle}</span>
                        </h2>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12">
                        <div className="flex gap-6 justify-center items-center">
                            <Image
                                src="/images/packaging/fish.png"
                                alt="Blue Mussel Bag"
                                width={500}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                        {/* Sol taraf - Bilgiler */}
                        <div className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl w-full">
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.boxSize}</p>
                                <p>10 × 1 package (25 pieces mussel, 450–550 gm.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.boxDim}</p>
                                <p>335 x 300 x 230 (5–6 kg.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">{t.sections.origin}</p>
                                <p>Türkiye</p>
                            </div>
                            <div className="flex">
                                <p className="w-[150px] font-medium">{t.sections.species}</p>
                                <p>Mytilus Galloprovincialis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packaging;