import Image from "next/image";

export default function TomatoProducts() {
    return (
        <section>
            {/* === Üst Kısım: Topografik arkaplan ve intro === */}
            <section className="relative pt-12 text-center overflow-hidden -z-30">
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

                {/* Sol İkon */}
                <Image
                    src="/images/iconTomato.png"
                    alt="leftIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Sağ İkon */}
                <Image
                    src="/images/iconTomato2.png"
                    alt="rightIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10 rotate-[-90deg]"
                />

                {/* İçerik */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-green-600">Tomato</span> Products
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                        Our sun-dried tomatoes are made from the highest quality tomatoes carefully grown in Turkey’s fertile lands and naturally dried under the warm Mediterranean sun. With their rich flavor and intense aroma, they add a unique taste to a wide range of dishes. Processed using traditional methods without additives, our tomatoes retain their high nutritional value. They are perfect for salads, pizzas, pastas, and a variety of appetizers. Ideal for both home cooks and professional chefs, our products combine versatility with gourmet quality. Hygiene and freshness are prioritized during the packaging process.
                    </p>

                    {/* Alt Ortadaki İkon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] z-10">
                        <Image
                            src="/images/iconTomato2.png"
                            alt="centeredTomatoIcon"
                            width={160}
                            height={160}
                            className="w-[120px] md:w-[140px] lg:w-[160px] h-auto"
                        />
                    </div>
                </div>

            </section>

            {/* === Ürün İçerikleri === */}
            <section className="relative w-full overflow-hidden text-center z-30">
                {/* TomatoBG Arka Plan */}
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/tomatobg.png"
                        alt="tomato background"
                        fill
                        className="object-cover z-30"
                        priority
                    />
                </div>

                {/* İçerik Alanı */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-20 px-4 py-32 max-w-7xl mx-auto">

                    {/* Product 1 */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold mb-4">Oven Semi Dried Tomato</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">
                                Grown in the fertile lands of the Aegean Region, our tomatoes are carefully selected and oven semi-dried to preserve their natural flavor and nutritional value. This method enhances their rich aroma, bringing a gourmet touch to any dish.
                            </p>
                        </div>
                        <Image
                            src="/images/ovenSemiDiredPhoto.png"
                            alt="Oven Semi Dried"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>

                    {/* Product 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 text-center lg:text-left">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold mb-4">Sun Dried Tomato</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">
                                Our sun-dried tomatoes are prepared using traditional methods, preserving their natural richness and intense flavor. Free from additives and known for their bold aroma, they add a distinctive touch to salads, appetizers, and sauces.
                            </p>
                        </div>
                        <Image
                            src="/images/sunDiredPhoto.png"
                            alt="Sun Dried"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>

                    {/* Product 3 */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold mb-4">Organic Sun Dried Tomato</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">
                                Our organically grown tomatoes are traditionally sun-dried, transforming into a completely natural and additive-free delicacy. With their high nutritional value and rich aroma, they bring both health and flavor to your table.
                            </p>
                        </div>
                        <Image
                            src="/images/organicSunDiredPhoto.png"
                            alt="Organic Sun Dried"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}