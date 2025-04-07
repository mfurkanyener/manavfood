import Head from "next/head";

const Contact = () => (
    <div>
        <Head>
            <title>Contact</title>
            <link rel="icon" href="/sunblu.ico"/>
            <meta charSet="UTF-8"/>
            <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <main className="bg-gray-50 min-h-screen py-10">
            <h1 className="text-3xl text-center font-bold">Contact</h1>
            <p className="mt-4 text-center">Bize ulaşın: info@manavfood.com</p>
        </main>
    </div>
);

export default Contact;