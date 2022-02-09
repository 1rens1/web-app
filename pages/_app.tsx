import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/nprogress.scss';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import nprogress from 'nprogress';
import Router from 'next/router';
import Navigator from '../components/Navbar/Navigator';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
    function handleRouteChangeStart(url: string) {
        nprogress.start();
        console.log(`[URL] Loading ${url}`);
    }

    function handleRouteChangeComplete(url: string) {
        nprogress.done();
        console.log(`[URL] Loaded ${url}`);
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    Router.events.on('routeChangeError', handleRouteChangeComplete);
    return (
        <>
            <Head>
                <title>rens</title>
                <meta name='title' content='rens' />
                <meta name='description' content="rens' webapp with nextjs" />
                <meta property='og:type' content='website' />
                <meta
                    property='og:url'
                    content='https://rens-webapp.herokuapp.com'
                />
                <meta property='og:title' content='rens' />
                <meta
                    property='og:description'
                    content="rens' webapp with nextjs"
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
                    content="rens' webapp with nextjs"
                />
                <meta property='twitter:image' content='/preview.png' />
            </Head>
            <ToastContainer limit={50} />
            <Navigator />
            <Component {...pageProps} />
        </>
    );
}
