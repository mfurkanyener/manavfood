import React from 'react';
import Head from "next/head";
import Image from "next/image";

const Sustainability = () => {
    return (
        <div>
            <Head>
                <title>Sustainability</title>
                <link rel="icon" href="/sunblu.ico" />
                <meta charSet="UTF-8" />
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Hero Section */}
            <section className="relative">
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
                    <h3 className="text-2xl md:text-4xl text-green-600 font-bold mb-6">Sustainability</h3>
                    <h2 className="text-2xl md:text-4xl font-light text-black mb-6">Naturally Responsible</h2>
                    <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                        At ManavFood, we believe sustainability is more than a commitment — it’s our shared responsibility.
                        From sourcing to packaging, every step is guided by respect for nature, support for local
                        farmers, and the pursuit of long-term ecological balance.
                    </p>
                    <div className="px-4 py-8">
                        <h1 className="text-lg font-semibold mb-4">Certified by |</h1>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Image src="/images/brc.png" alt="brc logo" width={100} height={100} />
                            <Image src="/images/sedex.jpg" alt="sedex logo" width={100} height={100} />
                            <Image src="/images/iso.jpeg" alt="iso logo" width={100} height={100} />
                            <Image src="/images/ifs.png" alt="ifs logo" width={100} height={100} />
                            <Image src="/images/golabalGap.jpg" alt="globalgap logo" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Cards */}
            <section className="relative px-6 mt-14 pb-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    {/* Card 1 - IFS */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h4 className="text-xl font-semibold mb-4">IFS Food Standard</h4>
                        <Image src="/images/ifs.png" alt="IFS Logo" width={80} height={80} className="mb-4"/>
                        <p className="text-sm text-gray-700">
                            Reviews food production processes to ensure quality, safety, authenticity, and compliance
                            with customer and legal requirements. Based on ISO 9001.
                        </p>
                    </div>

                    {/* Card 2 - GLOBAL G.A.P */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h4 className="text-xl font-semibold mb-4">Global Good Agricultural Practice (Global G.A.P)</h4>
                        <Image src="/images/golabalGap.jpg" alt="GLOBALGAP Logo" width={80} height={80}
                               className="mb-4"/>
                        <p className="text-sm text-gray-700">
                            A certification ensuring sustainable, safe, and traceable agriculture and aquaculture
                            practices. Emphasizes environmental care and worker welfare.
                        </p>
                    </div>

                    {/* Card 3 - BRC */}
                    <div className="bg-white shadow-md rounded-2xl p-6">
                        <h4 className="text-xl font-semibold mb-4">BRC</h4>
                        <Image src="/images/brc.png" alt="BRC Logo" width={80} height={80} className="mb-4"/>
                        <p className="text-sm text-gray-700">
                            BRC Global Standard ensures food safety, quality, and operational criteria across the
                            supply chain. Recognized worldwide for compliance assurance.
                        </p>
                    </div>
                </div>

                {/* Alt satırdaki 2 kartı ortalamak için ayrı bir flex container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                    {/* Sedex */}
                    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
                        <h4 className="text-xl font-semibold mb-4">Sedex</h4>
                        <Image src="/images/sedex.jpg" alt="Sedex Logo" width={80} height={80}
                               className="mb-4 mx-auto"/>
                        <p className="text-sm text-gray-700">
                            A global platform that promotes responsible business practices, focusing on labor rights,
                            health & safety, and ethical trade transparency.
                        </p>
                    </div>

                    {/* ISO 22000 */}
                    <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-sm">
                        <h4 className="text-xl font-semibold mb-4">ISO 22000</h4>
                        <Image src="/images/iso.jpeg" alt="ISO Logo" width={80} height={80} className="mb-4 mx-auto"/>
                        <p className="text-sm text-gray-700">
                            International standard for food safety management systems. Ensures hazards are controlled
                            at every step of the supply chain.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;