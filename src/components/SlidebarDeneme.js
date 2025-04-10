import Image from "next/image";
import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

const SlidebarDeneme = () => {
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
                <div className="text-center px-6 py-4 rounded-lg">
                    <h1 className="text-4xl text-white font-bold">Ready To Eat</h1>
                    <h1 className="text-4xl text-white font-bold mt-2 mb-14">Seafood Solutions</h1>
                    <Button variant="outline"
                            className="text-white font-bold bg-black bg-opacity-50 px-6 py-4 mx-4 rounded-lg">Tomato
                        Products
                    </Button>
                    <Button
                        className="text-black font-bold bg-white px-6 py-4 rounded-lg hover:text-white">Seafood Products
                    </Button>

                </div>
            </div>
        </div>

    );
};

export default SlidebarDeneme;