import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from 'lucide-react';

const Menu = () => {
    return (
        <div>
            <section className="min-h-screen flex flex-col lg:flex-row">
                {/* Left Side: Image */}
                <div className="relative w-full lg:w-1/2 h-96 lg:h-auto">
                    <Image
                        src="/images/menuPhoho.png" // Görselini /public/images altına koy
                        alt="Mussels Dish"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Menu */}
                <div
                    className="w-full lg:w-1/2 bg-sky-400 text-white flex flex-col justify-center items-center py-16 px-8">
                    <nav className="w-full max-w-md flex flex-col gap-6">
                        {[
                            {name: 'Homepage', href: '/homepage'},
                            {name: 'About Us', href: '/about'},
                            {name: 'Products', href: '/products'},
                            {name: 'Packaging', href: '/packaging'},
                            {name: 'Sustainability', href: '/sustainability'},
                            {name: 'Contact', href: '/contact'},
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex justify-between items-center border-b border-white pb-2 text-lg font-semibold tracking-wide hover:text-black hover:border-black transition-all"
                            >
                                <span>{item.name.toUpperCase()}</span>
                                <ArrowUpRight size={20}/>
                            </Link>
                        ))}
                    </nav>
                </div>
            </section>
        </div>
    );
};

export default Menu;