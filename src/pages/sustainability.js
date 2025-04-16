import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Sustainability = () => {
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
            <section>
                <section className="relative">
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
                            Sustainability
                        </h3>
                        <h2 className="text-2xl md:text-4xl font-light text-black mb-6">Naturally Responsible</h2>
                        <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                            At ManavFood, we believe sustainability is more than a commitment — it’s our shared responsibility.
                            From sourcing to packaging, every step is guided by respect for nature, support for local farmers, and the pursuit of long-term ecological balance.
                        </p>
                    </div>
                    <div>
                        <div>

                        </div>

                    </div>
                </section>
            </section>
        </div>
);
};

export default Sustainability;