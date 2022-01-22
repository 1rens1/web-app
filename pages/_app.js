import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navigator from '../components/Navigator';
import Progress from '../components/progress/Progress';
import { useProgressStore } from '../store/useProgressStore';

function MyApp({ Component, pageProps }) {
    const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
    const isAnimating = useProgressStore((state) => state.isAnimating);
    const router = useRouter();

    useEffect(() => {
        function handleStart() {
            setIsAnimating(true);
        }

        function handleStop() {
            setIsAnimating(false);
        }

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleStop);
        router.events.on('routeChangeError', handleStop);

        return function () {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleStop);
            router.events.off('routeChangeError', handleStop);
        };
    }, [router]);

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
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
                    integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=='
                    crossOrigin='anonymous'
                    referrerpolicy='no-referrer'
                />
                <meta property='twitter:image' content='/preview.png' />
            </Head>
            <Progress isAnimating={isAnimating} />
            <Navigator />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
