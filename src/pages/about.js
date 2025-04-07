import Navbar from '../components/navbar/Navbar';
import Head from "next/head";
import React from "react";

const About = () => (
    <div>
        <Head>
            <title>About Us</title>
            <link rel="icon" href="/sunblu.ico"/>
            <link rel="icon" href="/sunblu.ico"/>
            <meta charSet="UTF-8"/>
            <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <main className="bg-gray-50 min-h-screen py-10">
            <h1 className="text-3xl text-center font-bold">Hakkında</h1>
            <p className="mt-4 text-center">ManavFood, taze ve sürdürülebilir ürünler sunar...</p>
        </main>
    </div>
);

export default About;