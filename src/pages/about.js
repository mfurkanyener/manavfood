import Head from "next/head";
import React from "react";
import Image from "next/image";

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
        <div className="relative">
            {/* Background Topografik */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/topografivektor.png"
                    alt="topographic background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="relative z-20 max-w-4xl mx-auto px-4 text-center pt-32 pb-28">
                <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">
                    About <span className="text-4xl md:text-4xl font-light text-black mb-6">Us</span>
                </h3>
                <h2 className="text-2xl md:text-4xl font-light text-black mb-6">Who we are</h2>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                    Welcome to Manav Dış Ticaret A.Ş. a renowned leader in the export of premium food products. With decades of experience the production in the global food trade, we are dedicated to bringing high-quality, authentic, and sustainable food products from Turkey to the world.                </p>
            </div>
        </div>
    </div>
);

export default About;