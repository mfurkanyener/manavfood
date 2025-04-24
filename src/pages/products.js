import React from "react";
import Head from "next/head";
import ProductsSection from "@/components/ProductSection";
import { useLanguage } from "@/context/LanguageContext";

const Products = () => {
    const { messages } = useLanguage();
    const t = messages.homepage;

    return (
        <div>
            <Head>
                <title>{t.productsSection.title} | ManavFood - Sunblu</title>
                <link rel="icon" href="/images/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="description" content="Explore premium quality products from ManavFood, including sun-dried tomatoes, oven semi-dried tomatoes, and ready-to-eat seafood options under the Sunblu brand." />
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav, sun-dried tomatoes, semi-dried tomatoes, ready-to-eat seafood, Turkish food exporter, organic dried tomatoes, gourmet Mediterranean products, oven dried vegetables" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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