import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const FishProducts = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>Fish Products</title>
                <link rel="icon" href="/sunblu.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            {/* === Bannerbg Section === */}
            <section className="relative pt-12 text-center overflow-hidden isolate">
                {/* Topographic background */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/topografivektor.png"
                        alt="topographic background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Left icon */}
                <Image
                    src="/images/iconFish.png"
                    alt="leftIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Right icon */}
                <Image
                    src="/images/iconFish2.png"
                    alt="iconFish2"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Content */}
                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-32 pb-28">
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">
                        Fish <span className="text-green-600 font-bold">Products</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        Our seafood products are carefully prepared using the freshest fish sourced from the clean
                        and rich waters of Turkey. Each product, from our tender sea bass fillets to our flavorful
                        stuffed mussels, reflects the authentic taste of the Aegean and Mediterranean coasts. Processed
                        and preserved with precision, our seafood maintains its natural texture, nutritional value, and
                        taste without the need for artificial additives. These ready-to-eat options are ideal for quick
                        meals, gourmet recipes, and professional kitchens alike. Whether grilled, baked, or enjoyed
                        straight from the package, they offer a premium culinary experience. Hygiene, freshness, and
                        quality are strictly upheld during every stage of production and packaging. Appreciated in
                        international markets, our seafood stands out for its flavor, convenience, and reliability. With
                        the assurance of Manav Foreign Trade A.S., we bring the taste of the sea to your table.
                    </p>
                </div>
            </section>

            {/* === Product background directly below Banner === */}
            <section className="relative w-full overflow-hidden text-center z-30">
                <div className="absolute inset-0 z-10">

                    <Image
                        src="/images/fishbg.png"
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
                                <h3 className="text-xl font-semibold mb-4">Sea Bream Fillets</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    Fresh cultured, %100 farm raised sea bass, sea bream etc. in their own juices with
                                    olive oil salt and pepper.
                                    Sterilized cooked in vacuumed closed package.
                                    You will the be the first to touch them.
                                </p>
                                <div
                                    className="text-black p-6 rounded-md max-w-3xl mx-auto text-sm">

                                    {/* İki sütunlu besin bilgileri */}
                                    <div className="grid grid-cols-2 gap-1 mb-6">
                                        <ul className="space-y-1">
                                            <li className="font-bold text-base">Nutritional Information</li>
                                            <li>Energy (kcal.)</li>
                                            <li>Energy (kj.)</li>
                                            <li>Fat (g.)</li>
                                            <li>Saturated fat (g.)</li>
                                            <li>Carbonhydrate (g.)</li>
                                            <li>Sugar (g.)</li>
                                            <li>Sodium (g.)</li>
                                        </ul>
                                        <ul className="space-y-1 text-right">
                                            <li className="font-bold text-base">Per 100 g.</li>
                                            <li>168</li>
                                            <li>707</li>
                                            <li>7,5</li>
                                            <li>3,3</li>
                                            <li>16,6</li>
                                            <li>0,7</li>
                                            <li>1</li>
                                        </ul>
                                    </div>

                                    {/* Diğer bilgiler */}
                                    <div className="space-y-4">
                                        <p><span className="font-semibold">Ingredients:</span> Mussels (Farm raised).
                                            Olive oil, salt and pepper.</p>

                                        <div>
                                            <h2 className="font-bold mb-1">Pre-heating options:</h2>
                                            <ul className="list-disc list-inside">
                                                <li>Microwawe</li>
                                                <li>Boil in bag</li>
                                                <li>Sauce pan</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h2 className="font-bold mb-1">Storage Conditions:</h2>
                                            <ul className="list-disc list-inside">
                                                <li>Fresh, room temperature, 6 month</li>
                                                <li>Fresh, +4 degrees, 12 months</li>
                                                <li>Frozen, 2 year</li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <Image
                            src="/images/SeaBreamFillets.png"
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
                        <h3 className="text-xl font-semibold mb-4">Sea Bass Fillets</h3>
                        <p className="text-gray-800 text-sm leading-relaxed">
                            Our Sea Bass Fillets are delicately prepared from premium-quality fish caught in Turkey’s
                            clean coastal waters, offering a light, refined flavor and tender texture. Packed with
                            essential nutrients and ready to cook, they are perfect for healthy, gourmet meals at home
                            or in restaurants.
                        </p>
                        {/* İki sütunlu besin bilgileri */}
                        <div className="grid grid-cols-2 gap-1 mb-6">
                            <ul className="space-y-1">
                                <li className="font-bold text-base">Nutritional Information</li>
                                <li>Energy (kcal.)</li>
                                <li>Energy (kj.)</li>
                                <li>Fat (g.)</li>
                                <li>Saturated fat (g.)</li>
                                <li>Carbonhydrate (g.)</li>
                                <li>Sugar (g.)</li>
                                <li>Sodium (g.)</li>
                            </ul>
                            <ul className="space-y-1 text-right">
                                <li className="font-bold text-base">Per 100 g.</li>
                                <li>168</li>
                                <li>707</li>
                                <li>7,5</li>
                                <li>3,3</li>
                                <li>16,6</li>
                                <li>0,7</li>
                                <li>1</li>
                            </ul>
                        </div>

                        {/* Diğer bilgiler */}
                        <div className="space-y-4">
                            <p><span className="font-semibold">Ingredients:</span> Mussels (Farm raised).
                                Olive oil, salt and pepper.</p>

                            <div>
                                <h2 className="font-bold mb-1">Pre-heating options:</h2>
                                <ul className="list-disc list-inside">
                                    <li>Microwawe</li>
                                    <li>Boil in bag</li>
                                    <li>Sauce pan</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="font-bold mb-1">Storage Conditions:</h2>
                                <ul className="list-disc list-inside">
                                    <li>Fresh, room temperature, 6 month</li>
                                    <li>Fresh, +4 degrees, 12 months</li>
                                    <li>Frozen, 2 year</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Image
                        src="/images/SeaBassFillets.png"
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
                                <h3 className="text-xl font-semibold mb-4">Turkish Somon Fillets</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    Our Turkish Salmon Fillets are sourced from carefully farmed salmon in Turkey, known for their rich flavor, vibrant color, and buttery texture. High in Omega-3 and protein, they are a nutritious, ready-to-cook choice for delicious and elegant seafood dishes.
                                </p>
                                {/* İki sütunlu besin bilgileri */}
                                <div className="grid grid-cols-2 gap-1 mb-6">
                                    <ul className="space-y-1">
                                        <li className="font-bold text-base">Nutritional Information</li>
                                        <li>Energy (kcal.)</li>
                                        <li>Energy (kj.)</li>
                                        <li>Fat (g.)</li>
                                        <li>Saturated fat (g.)</li>
                                        <li>Carbonhydrate (g.)</li>
                                        <li>Sugar (g.)</li>
                                        <li>Sodium (g.)</li>
                                    </ul>
                                    <ul className="space-y-1 text-right">
                                        <li className="font-bold text-base">Per 100 g.</li>
                                        <li>168</li>
                                        <li>707</li>
                                        <li>7,5</li>
                                        <li>3,3</li>
                                        <li>16,6</li>
                                        <li>0,7</li>
                                        <li>1</li>
                                    </ul>
                                </div>

                                {/* Diğer bilgiler */}
                                <div className="space-y-4">
                                    <p><span className="font-semibold">Ingredients:</span> Mussels (Farm raised).
                                        Olive oil, salt and pepper.</p>

                                    <div>
                                        <h2 className="font-bold mb-1">Pre-heating options:</h2>
                                        <ul className="list-disc list-inside">
                                            <li>Microwawe</li>
                                            <li>Boil in bag</li>
                                            <li>Sauce pan</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="font-bold mb-1">Storage Conditions:</h2>
                                        <ul className="list-disc list-inside">
                                            <li>Fresh, room temperature, 6 month</li>
                                            <li>Fresh, +4 degrees, 12 months</li>
                                            <li>Frozen, 2 year</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <Image
                                src="/images/TurkishSomonFillets.png"
                                alt="Turkish Somon Fillets"
                                width={603}
                                height={603}
                                className="rounded-md"
                            />
                        </div>
                        {/* Product 4 */}
                        <div
                            className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                            <div className="max-w-md">
                                <h3 className="text-xl font-semibold mb-4">Sterilized Stuffed Mussel</h3>
                                <p className="text-gray-800 text-sm leading-relaxed">
                                    Our Sterilized Stuffed Mussels are a traditional Turkish delicacy, made with tender
                                    mussels filled with seasoned rice and aromatic spices. Conveniently ready-to-eat and
                                    safely sterilized for long shelf life, they offer authentic flavor and premium
                                    quality in every bite. </p>
                                {/* İki sütunlu besin bilgileri */}
                                <div className="grid grid-cols-2 gap-1 mb-6">
                                    <ul className="space-y-1">
                                        <li className="font-bold text-base">Nutritional Information</li>
                                        <li>Energy (kcal.)</li>
                                        <li>Energy (kj.)</li>
                                        <li>Fat (g.)</li>
                                        <li>Saturated fat (g.)</li>
                                        <li>Carbonhydrate (g.)</li>
                                        <li>Sugar (g.)</li>
                                        <li>Sodium (g.)</li>
                                    </ul>
                                    <ul className="space-y-1 text-right">
                                        <li className="font-bold text-base">Per 100 g.</li>
                                        <li>120</li>
                                        <li>502</li>
                                        <li>4.1</li>
                                        <li>3,2</li>
                                        <li>16,6</li>
                                        <li>0,3</li>
                                        <li>0,2</li>
                                    </ul>
                                </div>

                                {/* Diğer bilgiler */}
                                <div className="space-y-4">
                                    <p><span className="font-semibold">Ingredients:</span> Mussels (Farm raised).
                                        Olive oil, salt and pepper.</p>

                                    <div>
                                        <h2 className="font-bold mb-1">Pre-heating options:</h2>
                                        <ul className="list-disc list-inside">
                                            <li>Microwawe</li>
                                            <li>Boil in bag</li>
                                            <li>Sauce pan</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h2 className="font-bold mb-1">Storage Conditions:</h2>
                                        <ul className="list-disc list-inside">
                                            <li>Fresh, room temperature, 6 month</li>
                                            <li>Fresh, +4 degrees, 12 months</li>
                                            <li>Frozen, 2 year</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <Image
                                src="/images/SterilizedStuffedMussel.png"
                                alt="Sterilized stuffed Mussel"
                                width={603}
                                height={603}
                                className="rounded-md"
                            />

                        </div>
                    </div>
            </section>
        </div>
    );
};

export default FishProducts;