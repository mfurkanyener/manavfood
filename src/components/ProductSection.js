import Image from "next/image";

const ProductsSection = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-16 relative">
            {/* Dikine çizgiler için arka plan (isteğe bağlı) */}
            <div className="absolute inset-0 bg-[url('/images/stripes.svg')] opacity-10 pointer-events-none z-0" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                {/* Başlık */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                    Our <span className="text-[rgb(var(--color-green))]">Products</span>
                </h2>

                {/* Ürün kartları */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
                    {/* Tomato Products */}
                    <div className="rounded-xl overflow-hidden shadow-md relative">
                        <Image
                            src="/images/productLinkTomato.png"
                            alt="Tomato Products"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/40 text-white px-4 py-1 rounded-full text-sm">
                            Tomato Products
                        </div>
                    </div>

                    {/* Seafood Products */}
                    <div className="rounded-xl overflow-hidden shadow-md relative">
                        <Image
                            src="/images/productLinkSeafood.png"
                            alt="Seafood Products"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-black/40 text-white px-4 py-1 rounded-full text-sm">
                            Seafood Products
                        </div>
                    </div>
                </div>

                {/* Açıklama */}
                <p className="text-center text-xl md:text-2xl font-medium leading-relaxed">
                    How about <span className="text-[rgb(var(--color-green))] font-semibold">discovering</span> the products<br />
                    we’ve carefully selected just for you?
                </p>
            </div>
        </section>
    );
};

export default ProductsSection;