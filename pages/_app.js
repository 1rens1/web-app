import 'bootstrap/scss/bootstrap.scss';
import '../styles/globals.scss';
import '../styles/nprogress.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Navigator from '../components/Navigator';
import { Router } from 'next/router';
import nprogress from 'nprogress';

function MyApp({ Component, pageProps }) {
    function handleRouteChangeStart(url) {
        nprogress.start();
    }

    function handleRouteChangeComplete(url) {
        nprogress.done();
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);

    return (
        <>
            <Head>
                <title>rens</title>
                <meta name='title' content='rens' />
                <meta name='description' content='rens WebApp with NextJS' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content='https://rens-webapp.herokuapp.com'
                />
                <meta property='og:title' content='rens' />
                <meta
                    property='og:description'
                    content='rens WebApp with NextJS'
                />
                <meta property='og:image' content='/preview.png' />
                <meta property='twitter:card' content='summary_large_image' />
                <meta
                    property='twitter:url'
                    content='https://rens-webapp.herokuapp.com'
                />
                <meta property='twitter:title' content='rens' />
                <meta
                    property='twitter:description'
                    content='rens WebApp with NextJS'
                />
                <meta property='twitter:image' content='/preview.png' />
            </Head>
            <Navigator />
            <Toaster />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
