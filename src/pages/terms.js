import Head from 'next/head';

export default function TermsConditions() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | Manavfood</title>
                <meta name="description" content="Terms and conditions for using manavfood.com" />
            </Head>
            <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
                <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
                <p className="mb-4">
                    By using our website (manavfood.com), you agree to the following terms and conditions:
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
                <p className="mb-4">All content is for informational use only. Do not copy or redistribute without permission.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Liability</h2>
                <p className="mb-4">We try our best to provide accurate information but cannot guarantee it at all times.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Changes</h2>
                <p className="mb-4">Terms may change without notice. Please check back periodically.</p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Contact</h2>
                <p>
                    For questions or feedback, contact:{" "}
                    <a href="mailto:feray@manavfood.com" className="text-blue-600 underline">feray@manavfood.com</a>
                </p>
            </main>
        </>
    );
}