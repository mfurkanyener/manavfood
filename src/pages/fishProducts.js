import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const FishProducts = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>Fish Products</title>
                <link rel="icon" href="/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div className="relative">
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

                {/* Sol icon */}
                <Image
                    src="/images/iconFish.png"
                    alt="leftIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                />
                {/* Sağ icon */}
                <Image
                    className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
                    src="/images/iconFish2.png"
                    alt="iconFish2"
                    width={200}
                    height={200}
                />
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-32 pb-28">
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">
                        Fish <span className="text-green-600 font-bold">Products</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        Our seafood products are carefully prepared using the freshest fish sourced from the clean and rich waters of Turkey. Each product, from our tender sea bass fillets to our flavorful stuffed mussels, reflects the authentic taste of the Aegean and Mediterranean coasts. Processed and preserved with precision, our seafood maintains its natural texture, nutritional value, and taste without the need for artificial additives. These ready-to-eat options are ideal for quick meals, gourmet recipes, and professional kitchens alike. Whether grilled, baked, or enjoyed straight from the package, they offer a premium culinary experience. Hygiene, freshness, and quality are strictly upheld during every stage of production and packaging. Appreciated in international markets, our seafood stands out for its flavor, convenience, and reliability. With the assurance of Manav Foreign Trade A.S., we bring the taste of the sea to your table.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FishProducts;