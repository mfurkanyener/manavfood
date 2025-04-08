import React from 'react';
import Image from "next/image";
import {Imprima} from "next/font/google";

const imprima = Imprima({
        display: "swap",
        subsets: ['latin'],
        weight: '400',
        size: 44,
    }

)
const Hpaboutus = () => {
    return (
        <div className="relative w-full">
            <Image
                className="mx-auto object-cover"
                src="/images/topografivektor.png"
                alt="slide1"
                width={3209}
                height={665.44}
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-black  px-6 py-4 rounded-lg">
                    <h1 className={imprima.className}>manavfood</h1>

                    <h1 className="bg-blue text-4xl font-bold mt-2">About Us</h1>
                    <p className="text-xl font-bold mt-2">Manav Dış Ticaret A.Ş. is a leading company exporting high
                        quality and sustainable food products from Turkey to the world. Our product range includes oven
                        semi-dried tomatoes, sun-dried tomatoes, sterilized stuffed mussels and ready-to-eat fish
                        varieties (sea bream, sea bass, Turkish salmon). We offer reliable solutions to our customers
                        with quality raw materials, meticulous production and a strong logistics infrastructure.
                        Sustainability and innovation are at the center of all our processes.</p>
                    <button
                        className="text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-lg">Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hpaboutus;