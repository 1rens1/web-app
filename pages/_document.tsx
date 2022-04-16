import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* eslint-disable-next-line @next/next/next-script-for-ga*/}
                <script
                    async
                    src='https://www.googletagmanager.com/gtag/js?id=G-M7HSY6DX7V'
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-M7HSY6DX7V', { page_path: window.location.pathname });`,
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
