import Head from "next/head";
import Slidebar from "@/components/Slidebar";
import AboutBanner from "@/components/AboutBanner";
import ProductsSection from "@/components/ProductSection";
import ContactBanner from "@/components/ContactBanner";
import MarqueeBanner from "@/components/MarqueeBanner";
import { useLanguage } from "@/context/LanguageContext";

const Homepage = () => {
    const { messages } = useLanguage();
    const t = messages.homepage;

    return (
        <div>
            <Head>
                <title>Manavfood</title>
                <meta charSet="UTF-8"/>
                <link rel="icon" href="/images/sunblu.ico"/>
                <meta name="description" content="ManavFood"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="author" content="Furkan Yener"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="canonical" href="https://manavfood.com/"/>
            </Head>

            <main className="bg-gray-50 min-h-screen">
                <Slidebar
                    title={t.slidebar.slide1Title}
                    subtitle={t.slidebar.slide1Subtitle}
                />
                <AboutBanner
                    brand={t.aboutBanner.brand}
                    title={t.aboutBanner.title}
                    highlight={t.aboutBanner.highlight}
                    description={t.aboutBanner.description}
                    buttonText={t.aboutBanner.button}
                />
                <MarqueeBanner items={t.marquee.items} />
                <ProductsSection
                    title={t.productsSection.title}
                    description={t.productsSection.description}
                    tomatoBtn={t.slidebar.tomatoBtn}
                    seafoodBtn={t.slidebar.seafoodBtn}
                />
                <ContactBanner
                    title={t.contactBanner.title}
                    subtitle={t.contactBanner.subtitle}
                    buttonText={t.contactBanner.button}
                />
            </main>
        </div>
    );
};

export default Homepage;