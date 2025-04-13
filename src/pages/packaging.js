import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Packaging = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <Head>
                <title>Packaging</title>
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
                        Packaging
                    </h3>
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">Carefully Prepared for Quality and Trust</h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        Yazı eklenecek.
                    </p>
                </div>
            </div>
        </div>
            );
            };

            export default Packaging;