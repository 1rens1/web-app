import 'bootstrap/scss/bootstrap.scss';
import 'react-toastify/dist/ReactToastify.css';
import '@styles/nprogress.scss';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';
import nprogress from 'nprogress';
import Router from 'next/router';
import Navigator from '@components/Navigator';
import { ToastContainer } from 'react-toastify';
import Layout from '@components/layout';

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
            <ToastContainer limit={50} />
            <Navigator />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
