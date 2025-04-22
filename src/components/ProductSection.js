import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import * as React from "react";

const ProductsSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-16 relative">

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Başlık */}
                <h2 className="text-4xl md:text-5xl font-medium mb-4 text-center">
                    Our <span className="text-[rgb(var(--color-green))]">Products</span>
                </h2>

                {/* Ürün kartları */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
                    {/* Tomato Products */}
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/tomatoImg/productLinkTomato.png"
                            alt="Tomato Products"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <Link href="/tomatoProducts">
                                <Button
                                    className="text-black font-bold bg-white px-5 py-3 hover:text-white rounded-full hover:bg-black transition">
                                    Tomato Products
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Seafood Products */}
                    <div className="relative rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="/images/fishImg/productLinkSeafood.png"
                            alt="Seafood Products"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                            <Link href="/fishProducts">
                                <Button
                                    className="text-black font-bold bg-white px-5 py-3 hover:text-white rounded-full hover:bg-black transition">
                                    Seafood Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Açıklama */}
                <p className="text-center text-xl md:text-2xl font-medium leading-relaxed">
                    How about <span className="text-[rgb(var(--color-green))] font-semibold">discovering</span> the
                    products<br/>
                    we’ve carefully selected just for you
                </p>
            </div>
        </section>
    );
};

export default ProductsSection;