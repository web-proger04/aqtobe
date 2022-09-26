import '../styles/globals.css'
import '../styles/college.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return <>
        <Head>
            <title>{Component.title}</title>
        </Head>
        <div className="grid-wrapper">
            <Navbar/>
            <div className="container">
                <Component {...pageProps} />
            </div>
            <Footer/>
        </div>
    </>


}

export default MyApp
