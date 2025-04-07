import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";





const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.replace("/homepage");
    }, [router]);

    return null; // Sayfa yönlendirilecek

    return (
        <div>
            <Head>
                <title>ManavFood</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="ManavFood"/>
                <meta name="keywords" content="ManavFood, Sunblu, Feray Manav"/>
                <meta name="author" content="Furkan Yener"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/sunblu.ico"/>
                <link rel="canonical" href="https://manavfood.com/"/>
            </Head>
        </div>
    );
};

export default Home;