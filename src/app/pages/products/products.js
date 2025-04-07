import Image from 'next/image';
import React from "react";
import Head from "next/head";

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

        <main className="bg-gray-50 min-h-screen py-10">
            <div>
                <h1 className="text-3xl text-center font-bold">Products</h1>
            </div>
        </main>
        </div>
    );
};

export default Products;