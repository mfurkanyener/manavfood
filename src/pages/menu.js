import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const Menu = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen">
            {/* Close Button */}
            <button
                onClick={() => router.back()}
                className="fixed top-4 right-4 z-50 bg-[#45BEE0] rounded-full p-2 hover:bg-[#44AA00] sm:p-3 md:p-4 lg:bg-[#44AA00] transition"
            >
                <X size={24} className="text-white" />
            </button>

            {/* Layout Section */}
            <section className="min-h-screen flex flex-col lg:flex-row overflow-hidden">
                {/* Left Side: Image - Hidden on smaller screens */}
                <div className="relative w-full lg:w-1/2 min-h-[250px] lg:min-h-screen">
                    <Image
                    src="/images/menu/menuPhoto.png"
                        alt="Mussels Dish"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Menu */}
                <div className="w-full lg:w-1/2 bg-[#45BEE0] text-white flex flex-col justify-start lg:justify-center items-start py-8 lg:py-16 px-6 sm:px-8 min-h-screen">
                    <nav className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl px-4 sm:px-6 flex flex-col gap-6">
                        {[
                            { name: 'Homepage', href: '/homepage' },
                            { name: 'About Us', href: '/about' },
                            { name: 'Products', href: '/products' },
                            { name: 'Packaging', href: '/packaging' },
                            { name: 'Sustainability', href: '/sustainability' },
                            { name: 'Contact', href: '/contact' },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="group flex justify-between items-center border-b border-white pb-2 text-xl md:text-2xl font-semibold tracking-wide hover:text-black hover:border-black transition-all"
                            >
                                <span className="group-hover:ml-2 transition-all">{item.name.toUpperCase()}</span>
                                <ArrowRight
                                    size={24}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Menu;