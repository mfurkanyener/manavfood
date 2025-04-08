import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-sky-400 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">

                {/* Logo ve firma bilgisi */}
                <div>
                    <Image
                        src="/images/sunblu.png"
                        alt="sunblu logo"
                        width={100}
                        height={100}
                        className="mb-4"
                    />
                    <h2 className="font-bold text-lg mb-2">MANAVFOOD</h2>
                    <p className="text-sm mb-1">E-MAIL</p>
                    <p className="text-sm mb-3">feray@manavfood.com</p>
                    <p className="text-sm mb-1">TELEFON</p>
                    <p className="text-sm mb-3">+90 0555 555 55 55</p>
                    <p className="text-sm mb-1">ADDRESS</p>
                    <p className="text-sm">
                        Adalet Mahallesi Manas Bul. No: 12/2<br/>
                        Center Office Bayraklı IZMIR TURKEY
                    </p>
                </div>

                {/* Products */}
                <div>
                <h3 className="font-semibold text-white mb-2">Products</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Products</li>
                        <li>Seafood Products</li>
                    </ul>
                </div>

                {/* Packaging */}
                <div>
                    <h3 className="font-semibold text-white mb-2">Packaging</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Tomato Packaging</li>
                        <li>Seafood Packaging</li>
                    </ul>
                </div>

                {/* Sustainability */}
                <div>
                    <h3 className="font-semibold text-white mb-2">Sustainability</h3>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="font-semibold text-white mb-2">Contact Us</h3>
                </div>
            </div>

            {/* Alt bilgi */}
            <div className="text-center text-sm mt-10 text-white">
                <p className="mb-1">Privacy - Terms</p>
                <p>© 2025</p>
            </div>
        </footer>
    );
};

export default Footer;