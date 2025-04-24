import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useLanguage } from "@/context/LanguageContext";

const FishProducts = () => {
    const { messages } = useLanguage(); // 🌍 Dil dosyasından metin çekilir
    const t = messages.fishProducts;
    const NutritionTable = ({ per100gTitle, nutritionTitle }) => (
        <div className="grid grid-cols-2 gap-1 mb-6">
            <ul className="space-y-1">
                <li className="font-bold text-base">{nutritionTitle}</li>
                <li>Energy (kcal.)</li>
                <li>Energy (kj.)</li>
                <li>Fat (g.)</li>
                <li>Saturated fat (g.)</li>
                <li>Carbonhydrate (g.)</li>
                <li>Sugar (g.)</li>
                <li>Sodium (g.)</li>
            </ul>
            <ul className="space-y-1 text-right">
                <li className="font-bold text-base">{per100gTitle}</li>
                <li>168</li>
                <li>707</li>
                <li>7,5</li>
                <li>3,3</li>
                <li>16,6</li>
                <li>0,7</li>
                <li>1</li>
            </ul>
        </div>
    );

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>Fish Products</title>
                <link rel="icon" href="/images/sunblu.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            {/* === Bannerbg Section === */}
            <section className="relative pt-12 text-center overflow-hidden isolate">
                {/* Topographic background */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/tpBg.png"
                        alt="topographic background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Left icon */}
                <Image
                    src="/images/fishImg/iconFish.png"
                    alt="leftIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Right icon */}
                <Image
                    src="/images/fishImg/iconFish2.png"
                    alt="iconFish2"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Content */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.titleGreen} <span className="text-green-600 font-bold">{t.titleNormal}</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        {t.intro}
                    </p>
                </div>
            </section>

            {/* === Product background directly below Banner === */}
            <section className="relative w-full overflow-hidden text-center z-30">
                <div className="absolute inset-0 z-10">

                    <Image
                        src="/images/fishImg/fishbg.png"
                        alt="fish background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                    <div
                        className="relative z-10 flex flex-col items-center justify-center gap-20 px-4 py-32 max-w-7xl mx-auto">
                        {/* Product 1 */}
                        <div
                            className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                            <div className="max-w-md">
                                <h3 className="text-xl font-semibold mb-4">{t.products[0].title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {t.products[0].description}
                                </p>
                                <div
                                    className="text-black p-6 rounded-md max-w-3xl mx-auto text-sm">

                                    {/* İki sütunlu besin bilgileri */}
                                    <NutritionTable
                                        per100gTitle={t.per100g}
                                        nutritionTitle={t.nutrition}
                                    />

                                    {/* Diğer bilgiler */}
                                    <div className="space-y-4">
                                        <p><span className="font-semibold">{t.ingredients}:</span> Mussels (Farm raised).
                                            Olive oil, salt and pepper.</p>

                                        <div>
                                            <h2 className="font-bold mb-1">{t.preheating}</h2>
                                            <ul className="list-disc list-inside">
                                                {t.options.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="font-bold mb-1">{t.storage}</h2>
                                            <ul className="list-disc list-inside">
                                                {t.storageConditions.map((item, idx) => <li key={idx}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <Image
                            src="/images/fishImg/SeaBreamFillets.png"
                            alt="Sea Bream Fillets"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>

                {/* Product 2 */}
                <div
                    className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 text-center lg:text-left">
                    <div className="max-w-md">
                        <h3 className="text-xl font-semibold mb-4">{t.products[1].title}</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            {t.products[1].description}
                        </p>
                        {/* İki sütunlu besin bilgileri */}
                        <NutritionTable
                            per100gTitle={t.per100g}
                            nutritionTitle={t.nutrition}
                        />

                        {/* Diğer bilgiler */}
                        <div className="space-y-4">
                            <p><span className="font-semibold">{t.ingredients}:</span> Mussels (Farm raised).
                                Olive oil, salt and pepper.</p>

                            <div>
                                <h2 className="font-bold mb-1">{t.preheating}</h2>
                                <ul className="list-disc list-inside">
                                    {t.options.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-bold mb-1">{t.storage}</h2>
                                <ul className="list-disc list-inside">
                                    {t.storageConditions.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/images/fishImg/SeaBassFillets.png"
                        alt="Sea Bass Fillets"
                        width={603}
                        height={603}
                                className="rounded-md"
                            />
                        </div>

                        {/* Product 3 */}
                        <div
                            className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                            <div className="max-w-md">
                                <h3 className="text-xl font-semibold mb-4">{t.products[2].title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {t.products[2].description}                                </p>
                                {/* İki sütunlu besin bilgileri */}
                                <NutritionTable
                                    per100gTitle={t.per100g}
                                    nutritionTitle={t.nutrition}
                                />

                                {/* Diğer bilgiler */}
                                <div className="space-y-4">
                                    <p><span className="font-semibold">{t.ingredients}:</span> Mussels (Farm raised).
                                        Olive oil, salt and pepper.</p>

                                    <div>
                                        <h2 className="font-bold mb-1">{t.preheating}</h2>
                                        <ul className="list-disc list-inside">
                                            {t.options.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="font-bold mb-1">{t.storage}</h2>
                                        <ul className="list-disc list-inside">
                                            {t.storageConditions.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Image
                                src="/images/fishImg/TurkishSomonFillets.png"
                                alt="Turkish Somon Fillets"
                                width={603}
                                height={603}
                                className="rounded-md"
                            />
                        </div>
                        {/* Product 4 */}
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                            <Image
                                src="/images/fishImg/SterilizedStuffedMussel.png"
                                alt="Sterilized stuffed Mussel"
                                width={603}
                                height={603}
                                className="rounded-md"
                            />
                            <div className="max-w-md">
                                <h3 className="text-xl font-semibold mb-4">{t.products[3].title}</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    {t.products[3].description} </p>
                                {/* İki sütunlu besin bilgileri */}
                                <NutritionTable
                                    per100gTitle={t.per100g}
                                    nutritionTitle={t.nutrition}
                                />

                                {/* Diğer bilgiler */}
                                <div className="space-y-4">
                                    <p><span className="font-semibold">{t.ingredients}:</span> Mussels (Farm raised).
                                        Olive oil, salt and pepper.</p>

                                    <div>
                                        <h2 className="font-bold mb-1">{t.preheating}</h2>
                                        <ul className="list-disc list-inside">
                                            {t.options.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="font-bold mb-1">{t.storage}</h2>
                                        <ul className="list-disc list-inside">
                                            {t.storageConditions.map((item, idx) => <li key={idx}>{item}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default FishProducts;