import Head from "next/head";
import React from "react";
import Image from "next/image";

const About = () => (
    <div>
        <Head>
            <title>About Us</title>
            <link rel="icon" href="/images/logo/sunblu.ico"/>
            <meta charSet="UTF-8"/>
            <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <section>
            <section className="relative">
                {/* Background Topografik */}

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
                    <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">
                        About <span className="text-4xl md:text-4xl font-light text-black mb-6">Us</span>
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">Who we are</h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        Welcome to Manav Dış Ticaret A.Ş. a renowned leader in the export of premium food products. With
                        decades of experience the production in the global food trade, we are dedicated to bringing
                        high-quality, authentic, and sustainable food products from Turkey to the world. </p>
                </div>
            </section>
            <section className="bg-white py-20 px-6">
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 shadow-lg p-10 rounded-3xl">
                    {/* Yazı kısmı */}
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">Quality</h2>
                        <p className="text-gray-800 leading-relaxed">
                            Our commitment to excellence begins with sourcing the finest raw materials from partners of
                            trusted suppliers and local farmers. Through meticulous processing, packaging, and quality
                            control, we ensure that every product maintains the highest standards of freshness, taste,
                            and
                            nutritional value. Whether it’s the taste of nature, sun dried tomatoes or our tender,
                            ready-to-eat fish, each product reflects our dedication to quality and authenticity.
                        </p>
                    </div>

                    {/* Görsel */}
                    <div className="lg:w-1/2 rounded-3xl overflow-hidden">
                        <Image
                            src="/images/aboutUs/quaility.png" // Kendi görsel yolunu kullan
                            alt="Tomatoes"
                            width={800}
                            height={500}
                            className="rounded-3xl object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 shadow-lg p-10 rounded-3xl">

                    {/* Metin Kısmı */}
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">Global</h2>
                        <p className="text-gray-800 leading-relaxed">
                            As an experienced company, we pride ourselves on our ability to serve diverse international
                            markets.
                            Our team is dedicated to providing tailored solutions that meet the specific needs of our
                            clients,
                            from retailers to distributors, ensuring on-time deliveries and seamless logistics. With our
                            deep
                            understanding of global food trends and markets, we help our partners succeed with reliable
                            and
                            high-quality food products.
                        </p>
                    </div>

                    {/* Görsel */}
                    <div className="lg:w-1/2 rounded-3xl overflow-hidden">
                        <Image
                            src="/images/aboutUs/global.png" // görsel yolu (seninki farklıysa güncelle)
                            alt="Global World Map"
                            width={800}
                            height={500}
                            className="rounded-3xl object-cover w-full h-full"
                        />
                    </div>

                </div>
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 shadow-lg p-10 rounded-3xl">

                    {/* Metin Kısmı */}
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">Portfolio</h2>
                        <p className="text-gray-800 leading-relaxed">
                            At Manav Dış Ticaret A.Ş., we specialize in a carefully curated selection of food items,
                            including
                            Oven semi-dried tomatoes, Sun-dried tomatoes, sterilized stuffed mussels, and a variety of
                            ready-to-eat
                            fish products such as sea bream, sea bass, and Turkish salmon. Our diverse portfolio is
                            designed to meet
                            the evolving tastes and preferences of consumers globally, while maintaining the rich
                            heritage and flavors
                            of Turkish cuisine.
                        </p>
                    </div>

                    {/* Görsel */}
                    <div className="lg:w-1/2 rounded-3xl overflow-hidden">
                        <Image
                            src="/images/aboutUs/portfolio.png" // Görsel dosya adın buysa, aksi halde güncelle
                            alt="Portfolio Image"
                            width={800}
                            height={500}
                            className="rounded-3xl object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div
                    className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 shadow-lg p-10 rounded-3xl">

                    {/* Görsel */}
                    <div className="lg:w-1/2 rounded-3xl overflow-hidden">
                        <Image
                            src="/images/aboutUs/sustainability.png" // Görselin doğru yolunu buraya yaz
                            alt="Fish Sustainability"
                            width={800}
                            height={500}
                            className="rounded-3xl object-cover w-full h-full"
                        />
                    </div>

                    {/* Metin Kısmı */}
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">Sustainability</h2>
                        <p className="text-gray-800 leading-relaxed">
                            At Manav Dış Ticaret A.Ş., sustainability and innovation are at the heart of everything we
                            do.
                            <br/><br/>
                            We constantly strive to improve our products and processes, ensuring that we not only meet
                            but exceed the expectations of our customers and consumers.
                        </p>
                    </div>

                </div>
            </section>
        </section>
    </div>
);

export default About;