import '../styles/globals.css'
import '../styles/college.scss'
import Navbar from "../components/Navbar";

function MyApp({Component, pageProps}) {
    return <div>
        <Navbar/>
        <div className="container">
            <Component {...pageProps} />
        </div>

    </div>
}

export default MyApp
