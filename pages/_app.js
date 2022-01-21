import Head from 'next/head';
import '../styles/globals.css';
import Navigator from '../components/Navigator';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>
                    rens
                </title>
            </Head>
            <Navigator/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
