import '@styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import router from 'next/router';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
    const [spinnerLoading, setSpinnerLoading] = useState(false);

    router.events.on('routeChangeStart', () => setSpinnerLoading(true));
    router.events.on('routeChangeComplete', () => setSpinnerLoading(false));
    router.events.on('routeChangeError', () => setSpinnerLoading(false));

    const handleMouseMove = (event: MouseEvent) => {
        const reducedMotionMedia = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );
        if (reducedMotionMedia.matches) return;

        const target = event.target as HTMLElement;
        if (target.closest('a')) {
            document.body.classList.add('anchor-hover');
        } else {
            document.body.classList.remove('anchor-hover');
        }

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const mousePosX = event.clientX;
        const mousePosY = event.clientY;

        const distanceX = (mousePosX - screenWidth / 2) * -1 * 0.1;
        const distanceY = (mousePosY - screenHeight / 2) * -1 * 0.1;

        document.body.animate(
            {
                backgroundPositionX: `calc(${distanceX + 'px'} + 50%)`,
                backgroundPositionY: `calc(${distanceY + 'px'} + 50%)`,
            },
            { duration: 5000, fill: 'forwards', easing: 'ease-in-out' }
        );
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

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
