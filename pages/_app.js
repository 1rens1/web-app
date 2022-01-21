import Head from 'next/head';
import '../styles/globals.css';
import Navigator from '../components/Navigator';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>rens</title>
                <meta name='title' content='rens' />
                <meta name='description' content='rens WebApp with NextJS' />
                <meta property='og:type' content='website' />
                <meta property='og:url' content='https://metatags.io/' />
                <meta property='og:title' content='rens' />
                <meta
                    property='og:description'
                    content='rens WebApp with NextJS'
                />
                <meta property='og:image' content='/preview.png' />
                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:url' content='https://metatags.io/' />
                <meta property='twitter:title' content='rens' />
                <meta
                    property='twitter:description'
                    content='rens WebApp with NextJS'
                />
                <meta property='twitter:image' content='/preview.png' />
            </Head>
            <Navigator />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
