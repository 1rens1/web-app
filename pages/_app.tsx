import '@styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import router from 'next/router';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const [spinnerLoading, setSpinnerLoading] = useState(false);

    router.events.on('routeChangeStart', () => setSpinnerLoading(true));
    router.events.on('routeChangeComplete', () => setSpinnerLoading(false));
    router.events.on('routeChangeError', () => setSpinnerLoading(false));

    const additionalLinkTags: ReadonlyArray<{
        rel: string;
        href: string;
        sizes?: string;
        type?: string;
        color?: string;
        keyOverride?: string;
        as?: string;
        crossOrigin?: string;
    }> = [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'anonymous',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
    ];

    return (
        <>
            <DefaultSeo
                defaultTitle='rens'
                titleTemplate='%s - rens'
                additionalLinkTags={additionalLinkTags}
                description='front-end ui/ux web developer.'
                additionalMetaTags={[
                    {
                        name: 'theme-color',
                        content: '#07131f',
                    },
                ]}
            />
            <div data-spinner-loader='' data-loading={spinnerLoading}></div>
            <Component {...pageProps} />
        </>
    );
};

export default App;
