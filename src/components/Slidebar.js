import Image from "next/image";

const Slidebar = () => {
    return (
        <div className="relative w-full">
            {/* Arka plan görseli */}
            <Image
                className="mx-auto object-cover"
                src="/images/slide1.png"
                alt="slide1"
                width={1139}
                height={659}
            />

            {/* Üzerine gelen yazı */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white  px-6 py-4 rounded-lg">
                    <h1 className="text-4xl font-bold">Ready To Eat</h1>
                    <h1 className="text-4xl font-bold mt-2">Seafood Solutions</h1>
                    <button
                        className="text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-lg">Tomato Products
                    </button>
                    <button
                        className="text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-lg">Seafood Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slidebar;