import Sidebar from "../components/Slidebar";
import Head from "next/head";
import Hpaboutus from "@.../components/Hpaboutus";
import ProductsSection from "@.../components/ProductSection";
import ContactBanner from "@.../components/ContactBanner";



const Homepage = () => (
    <div>
        <Head>
            <title>Manavfood</title>
            <meta charSet="UTF-8"/>
            <link rel="icon" href="/sunblu.ico"/>
            <meta name="description" content="ManavFood"/>
            <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
            <meta name="author" content="Furkan Yener"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="canonical" href="https://manavfood.com/"/>
        </Head>
        <main className="bg-gray-50 min-h-screen py-10">
            <Sidebar/>
            <Hpaboutus/>
            <ProductsSection/>
            <ContactBanner/>
        </main>
    </div>
);

export default Homepage;