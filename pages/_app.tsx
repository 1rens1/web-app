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

    return (
        <>
            <DefaultSeo
                defaultTitle='rens'
                titleTemplate='%s - rens'
                additionalLinkTags={[
                    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                ]}
                description='front-end ui/ux web designer.'
                additionalMetaTags={[
                    { name: 'theme-color', content: '#07131f' },
                ]}
            />
            <div data-spinner-loader='' data-loading={spinnerLoading}></div>
            <Component {...pageProps} />
        </>
    );
};

export default App;
