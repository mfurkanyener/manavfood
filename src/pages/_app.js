// `pages/_app.js`
import "@.../app/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <div>
        <Head>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

    <Layout>
        <Component {...pageProps} />
        </Layout>
        </div>
    );
}