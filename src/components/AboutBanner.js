import React from "react";
import Image from "next/image";
import { Imprima } from "next/font/google";
import Link from "next/link";

const imprima = Imprima({
    display: "swap",
    subsets: ["latin"],
    weight: "400",
});

const About = () => {
    return (
        <div className="relative w-full px-4 py-20 overflow-hidden">
            {/* Background image */}
            <Image
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/tpbg.png"
                alt="topografivektor"
                width={3209}
                height={50}
                priority
            />

            {/* Overlay content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className={`${imprima.className} text-xl md:text-2xl mb-2`}>manavfood</h1>
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    About <span className="text-green-600 font-bold">Us</span>
                </h2>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-10">
                    Manav Dış Ticaret A.Ş. is a leading company exporting high quality and
                    sustainable food products from Turkey to the world. Our product range
                    includes oven semi-dried tomatoes, sun-dried tomatoes, sterilized
                    stuffed mussels and ready-to-eat fish varieties (sea bream, sea bass,
                    Turkish salmon). We offer reliable solutions to our customers with
                    quality raw materials, meticulous production and a strong logistics
                    infrastructure. Sustainability and innovation are at the center of all
                    our processes.
                </p>
                <Link
                    href="/about"
                    className="inline-block bg-black text-white px-6 py-3 rounded-xl text-md hover:bg-gray-900 transition"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default About;