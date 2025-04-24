import Head from "next/head";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
    const { messages } = useLanguage(); // 👈 dil seçimine göre metin
    const t = messages.about;
    if (!t) return null; // veya loading gösterebilirsin
    return (
        <div>
            <Head>
                <title>About</title>
                <link rel="icon" href="/images/sunblu.ico" />
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <section className="relative">
                {/* Arka Plan */}
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
                    <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">
                        {t.title}
                        <span className="block text-2xl md:text-4xl font-light text-black">
    {t.who}
  </span>
                    </h3>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        {messages.about.welcome}
                    </p>
                </div>
            </section>

            <section className="bg-white py-20 px-6 space-y-20">

                {/* Quality */}
                <ContentBlock
                    title={messages.about.quality}
                    text={messages.about.qualityDesc}
                    image="/images/aboutUs/quaility.png"
                />

                {/* Global */}
                <ContentBlock
                    title={messages.about.global}
                    text={messages.about.globalDesc}
                    image="/images/aboutUs/global.png"
                    reverse
                />

                {/* Portfolio */}
                <ContentBlock
                    title={messages.about.portfolio}
                    text={messages.about.portfolioDesc}
                    image="/images/aboutUs/portfolio.png"
                />

                {/* Sustainability */}
                <ContentBlock
                    title={messages.about.sustainability}
                    text={messages.about.sustainabilityDesc}
                    image="/images/aboutUs/sustainability.png"
                    reverse
                />
            </section>
        </div>
    );
};

export default About;

// Reusable bileşen
const ContentBlock = ({ title, text, image, reverse }) => (
    <div className={`max-w-7xl mx-auto flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 shadow-lg p-10 rounded-3xl`}>
        <div className="lg:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center lg:text-left">{title}</h2>
            <p className="text-gray-800 leading-relaxed">{text}</p>
        </div>
        <div className="lg:w-1/2 rounded-3xl overflow-hidden">
            <Image src={image} alt={title} width={800} height={500} className="rounded-3xl object-cover w-full h-full" />
        </div>
    </div>
);