import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Packaging = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>Packaging</title>
                <link rel="icon" href="/sunblu.ico"/>
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
                            src="/images/topografivektor.png"
                            alt="topographic background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-32 pb-28">
                        <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">Packaging</h3>
                        <h2 className="text-2xl md:text-4xl font-light text-black mb-6">
                            Carefully Prepared for Quality and Trust
                        </h2>
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                            Our packaging is designed to preserve quality, extend shelf life, and meet the demands of retail, industrial, and ready-to-eat markets with precision and care.                        </p>
                    </div>
                </div>
            </section>

            {/* Alt Arkaplan */}
            <section className="relative w-full overflow-hidden text-center z-30">
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/packacgingBg.png"
                        alt="Packaging"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div
                    className="relative z-10 flex flex-col items-start justify-center gap-20 px-4 py-32 max-w-7xl mx-auto">

                    {/* Başlık ve Açıklama */}
                    <div className="max-w-[1000px] text-left">
                        <h3 className="text-xl font-semibold mb-4">Ready to Eat</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Sauces for the ready-to-eat food sector are offered in A10 cans, fermented vegetables in A10
                            cans, 3 lt pet jars and 18 kg buckets, and dried products in 1 kg, 5 kg and 5 lb vacuum
                            packages.
                        </p>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/readyToEat.png"
                                alt="Ready to Eat Vacuum Bags"
                                width={500}
                                height={300}
                                className="rounded-md"
                            />
                        </div>

                        {/* Bilgiler */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl">
                            <h3 className="font-semibold text-lg mb-2">Dried Products</h3>

                            <p className="font-semibold">Sun Dried Tomatoes</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Strip – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Cube – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Granule – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Flour – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                            </ul>

                            <p className="font-semibold">RTE Sun Dried Tomato</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Strip – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Cube – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Pasteurized – 3000 cc jar / 2650 cc jar / 1000 cc jar</li>
                            </ul>

                            <p className="font-semibold">Semi-Dried Tomato</p>
                            <ul className="list-disc ml-6">
                                <li>Segment IQF – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Cube – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Cherry – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Marine – 5 kg vacuum bag / 5 lb vacuum bag / 1 kg vacuum bag</li>
                                <li>Pasteurized – 1 kg bag / 1000 cc pet jar / 3000 cc jar / 2650 cc jar</li>
                            </ul>
                        </div>
                    </div>
                    {/* Başlık ve Açıklama */}
                    <div className="max-w-[1000px] text-left">
                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Retail</h3>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            Sauces, fermented vegetables and roasted products are offered to the retail market in 720 cc,
                            320 cc and 210 cc jars, dried products in 1 kg, 100 g and 500 g pouches.
                        </p>
                    </div>

                    {/* İçerik - Görsel ve Liste */}
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10 w-full">

                        {/* Liste */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl flex-1">
                            <h3 className="font-semibold text-lg mb-2">Dried Products</h3>

                            <p className="font-semibold">Sun Dried Products</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Strip – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Cube – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Granules – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Flour – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                            </ul>

                            <p className="font-semibold">RTE Sun Dried Products</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Strip – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Cube – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                            </ul>

                            <p className="font-semibold">Semi-Dried Products</p>
                            <ul className="list-disc ml-6">
                                <li>Segment IQF – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Cube – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Cherry – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Marine – 1 kg pouch / 500 g pouch / 100 g pouch</li>
                                <li>Pasteurized – 1 kg PE bag / 720 cc jar / 320 cc jar / 210 cc jar</li>
                            </ul>
                        </div>

                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/retail.png"
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
                            <span className="text-black">Industrial </span>
                            <span className="text-green-600">Dried Products</span>
                        </h3>
                        <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                            We offer industrial dried products in bulk in 10 kg boxes, 5 kg and 5 lb vacuum bags in the following packages.
                        </p>
                    </div>

                    {/* İçerik Alanı */}
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 w-full">

                        {/* Görsel */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/industrialDired.png"
                                alt="Industrial Dried Tomatoes"
                                width={500}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>

                        {/* Liste */}
                        <div className="text-left text-gray-800 text-sm md:text-base leading-relaxed max-w-xl flex-1">
                            <p className="font-semibold">Sun Dried Tomatoes</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Strip – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Cube – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Granular – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Flour – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                            </ul>

                            <p className="font-semibold">RTE Sun Dried Tomato</p>
                            <ul className="list-disc ml-6 mb-4">
                                <li>Half – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Strip – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Cube – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                            </ul>

                            <p className="font-semibold">Oven Semi Dried Tomatoes</p>
                            <ul className="list-disc ml-6">
                                <li>Segment IQF – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Cube – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                                <li>Cherry – 10 kg bulk / 5 kg vacuum bag / 5 lb vacuum bag</li>
                            </ul>
                        </div>
                    </div>
                    {/* Başlık */}
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Ready to Eat <span className="text-green-600">Mussels</span>
                        </h2>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12">
                        {/* Sol taraf - Bilgiler */}
                        <div className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl w-full">
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Available box size:</p>
                                <p>10 × 1 package (25 pieces mussel, 450–550 gm.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Box size (mm.):</p>
                                <p>335 x 300 x 230 (5–6 kg.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Country of origin:</p>
                                <p>Türkiye</p>
                            </div>
                            <div className="flex">
                                <p className="w-[150px] font-medium">Species:</p>
                                <p>Mytilus Galloprovincialis</p>
                            </div>
                        </div>

                        {/* Sağ taraf - Görsel */}
                        <div className="flex gap-6 justify-center items-center">
                            <Image
                                src="/images/mussels.png"
                                alt="Blue Mussel Bag"
                                width={240}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    {/* Başlık */}
                    <div className="text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Ready to Eat <span className="text-green-600">Fish</span>
                        </h2>
                    </div>

                    {/* İçerik */}
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-12">
                        {/* Sol taraf - Bilgiler */}
                        <div className="text-gray-800 text-sm md:text-base leading-relaxed max-w-xl w-full">
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Available box size:</p>
                                <p>10 × 1 package (25 pieces mussel, 450–550 gm.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Box size (mm.):</p>
                                <p>335 x 300 x 230 (5–6 kg.)</p>
                            </div>
                            <div className="flex mb-2">
                                <p className="w-[150px] font-medium">Country of origin:</p>
                                <p>Türkiye</p>
                            </div>
                            <div className="flex">
                                <p className="w-[150px] font-medium">Species:</p>
                                <p>Mytilus Galloprovincialis</p>
                            </div>
                        </div>

                        <div className="flex gap-6 justify-center items-center">
                            <Image
                                src="/images/mussels.png"
                                alt="Blue Mussel Bag"
                                width={240}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Packaging;