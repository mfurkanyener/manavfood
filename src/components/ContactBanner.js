import Link from "next/link";

const ContactBanner = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Arka plan çizgileri */}
            <div className="absolute inset-0 bg-[url('/images/stripes.svg')] opacity-10 pointer-events-none z-0" />

            {/* İçerik */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
                <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    Get in touch <span className="text-[rgb(var(--color-green))] font-semibold">with us</span>
                </h2>
                <p className="text-md md:text-lg font-medium mb-8">
                    Contact us to discuss how we can provide Seafood Excellence directly to you.
                </p>

                <Link
                    href="/contact"
                    className="inline-block bg-black text-white px-6 py-3 rounded-xl text-md hover:bg-gray-900 transition"
                >
                    Contact Us
                </Link>
            </div>
        </section>
    );
};

export default ContactBanner;