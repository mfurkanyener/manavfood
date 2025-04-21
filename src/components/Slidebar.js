import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";

const Slidebar = () => {
    const slides = [
        {
            image: "/images/slide/slide1.png",
            title: "Ready To Eat",
            subtitle: "Seafood Solutions",
        },
        {
            image: "/images/slide/slide2.png",
            title: "Food Service",
            subtitle: "and Retail Solutions",
        },
    ];

    return (
        <div className="relative flex justify-center w-full m-0 p-0 py-10">
            <Carousel className="w-full max-w-7xl">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <CardContent className="items-center p-0">
                                    <div className="relative w-full">
                                        <Image
                                            src={slide.image}
                                            alt={`slide-${index}`}
                                            width={1139}
                                            height={659}
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center px-4 md:px-6 py-4">
                                                <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold">
                                                    {slide.title}
                                                </h1>
                                                <h2 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold mt-2 mb-8 md:mb-14">
                                                    {slide.subtitle}
                                                </h2>
                                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                                    <Link href="/tomatoProducts">
                                                    <Button
                                                        variant="outline"
                                                        className="text-white font-bold bg-black bg-opacity-50 px-5 py-3 rounded-lg hover:bg-opacity-70 transition"
                                                    >
                                                        Tomato Products
                                                    </Button>
                                                    </Link>
                                                    <Link href="/fishProducts">
                                                    <Button className="text-black font-bold bg-white px-5 py-3 rounded-lg hover:text-white hover:bg-black transition">
                                                        Seafood Products
                                                    </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Custom Carousel Navigation Buttons */}
                <CarouselPrevious className="size-10 sm:size-12 md:size-14 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
                <CarouselNext className="size-10 sm:size-12 md:size-14 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition" />
            </Carousel>
        </div>
    );
};

export default Slidebar;







