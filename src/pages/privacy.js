import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Manavfood</title>
                <meta name="description" content="Manavfood Dış Ticaret A.Ş. Privacy Policy" />
            </Head>
            <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">
                    At Manavfood Dış Ticaret A.Ş., we respect your privacy and are committed to protecting any personal information you provide to us through our website.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Name, email address, phone number (via contact form)</li>
                    <li>Website usage data (anonymized)</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
                <p className="mb-4">We use your data to respond to inquiries and improve user experience.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
                <p className="mb-4">We do not sell or share your data with third parties. All data is securely stored and accessible only by authorized personnel.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
                <p className="mb-4">Basic cookies may be used. You may disable them via your browser settings.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
                <p>
                    For any questions, contact us at:{" "}
                    <a href="mailto:feray@manavfood.com" className="text-blue-600 underline">feray@manavfood.com</a>
                </p>
            </main>
        </>
    );
}