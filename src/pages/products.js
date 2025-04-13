import React from "react";
import Head from "next/head";
import ProductsSection from "@/components/ProductSection";

const Products = () => {
    return (
        <div>
            <Head>
                <title>Sustainability</title>
                <link rel="icon" href="/sunblu.ico"/>
                <link rel="icon" href="/sunblu.ico"/>
                <meta charSet="UTF-8"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <div>
                <ProductsSection/>
            </div>

        </div>
    );
};

export default Products;