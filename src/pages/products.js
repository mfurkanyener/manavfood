import React from "react";
import Head from "next/head";
import ProductsSection from "@/components/ProductSection";
import { useLanguage } from "@/context/LanguageContext";

const Products = () => {
    const { messages } = useLanguage();
    const t = messages.homepage;

    return (
        <div className="mt-[220px]">
            <Head>
                <title>{t.productsSection.title}</title>
                <link rel="icon" href="/images/sunblu.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <ProductsSection
                title={t.productsSection.title}
                description={t.productsSection.description}
                tomatoBtn={t.slidebar.tomatoBtn}
                seafoodBtn={t.slidebar.seafoodBtn}
            />
        </div>
    );
};

export default Products;