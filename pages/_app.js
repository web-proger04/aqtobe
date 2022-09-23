import '../styles/globals.css'
import '../styles/college.scss'
import Navbar from "../components/Navbar";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>{Component.title}</title>
        </Head>
        <div>
            <Navbar/>
            <div className="container">
                <Component {...pageProps} />
            </div>
        </div>
    </>


}

export default MyApp
