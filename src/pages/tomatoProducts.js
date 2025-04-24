import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function TomatoProducts() {
    const { messages } = useLanguage();
    const t = messages.tomatoProducts;
    return (
        <section>
            <Head>
                <title>{t.pageTitle || "Tomato Products"} | ManavFood - Sunblu</title>
                <link rel="icon" href="/images/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="description" content={t.metaDescription || "Discover our selection of sun-dried, semi-dried, and organic tomatoes crafted under the Sunblu brand for global gourmet tastes."} />
                <meta name="keywords" content="ManavFood, Sunblu, dried tomatoes, semi-dried tomatoes, organic tomatoes, Turkish tomato export, Mediterranean vegetables, oven dried, sun dried, tomato products" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {/* === Üst Kısım: Topografik arkaplan ve intro === */}
            <section className="relative pt-12 text-center overflow-hidden -z-30">
                {/* Topografik Arkaplan */}
                <div className="absolute inset-0 -z-20">
                    <Image
                        src="/images/tpBg.png"
                        alt="topographic background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Sol İkon */}
                <Image
                    src="/images/tomatoImg/iconTomato.png"
                    alt="leftIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
                />

                {/* Sağ İkon */}
                <Image
                    src="/images/tomatoImg/iconTomato2.png"
                    alt="rightIcon"
                    width={200}
                    height={200}
                    className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 z-10 rotate-[-90deg]"
                />

                {/* İçerik */}
                <div className="relative z-20 max-w-5xl mx-auto px-4 py-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-green-600">{t.titleGreen}</span> {t.titleNormal}
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-8">{t.intro}</p>

                    {/* Alt Ortadaki İkon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-60px] z-10">
                        <Image
                            src="/images/tomatoImg/iconTomato2.png"
                            alt="centeredTomatoIcon"
                            width={160}
                            height={160}
                            className="hidden xl:block absolute w-[120px] md:w-[140px] lg:w-[160px] h-auto"
                        />
                    </div>
                </div>

            </section>

            {/* === Ürün İçerikleri === */}
            <section className="relative w-full overflow-hidden text-center z-30">
                {/* TomatoBG Arka Plan */}
                <div className="absolute inset-0 z-10">
                    <Image
                        src="/images/tomatoImg/tomatobg.png"
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
                            <h3 className="text-xl font-semibold mb-4">{t.product1.title}</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">{t.product1.desc}</p>
                        </div>
                        <Image
                            src="/images/tomatoImg/ovenSemiDiredPhoto.png"
                            alt="Oven Semi Dried"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>

                    {/* Product 2 */}
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 text-center lg:text-left">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold mb-4">{t.product2.title}</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">{t.product2.desc}</p>
                        </div>
                        <Image
                            src="/images/tomatoImg/sunDiredPhoto.png"
                            alt="Sun Dried"
                            width={603}
                            height={603}
                            className="rounded-md"
                        />
                    </div>

                    {/* Product 3 */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left">
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold mb-4">{t.product3.title}</h3>
                            <p className="text-gray-800 text-sm leading-relaxed">{t.product3.desc}</p>
                        </div>
                        <Image
                            src="/images/tomatoImg/organicSunDiredPhoto.jpeg"
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