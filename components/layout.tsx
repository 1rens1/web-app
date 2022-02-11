import React from 'react';
import Head from 'next/head';
export default class Layout extends React.Component {
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.handleLoad);
    }

    render() {
        return (
            <>
                <Head>
                    <title>rens</title>
                    <meta
                        name='description'
                        content="rens' webapp with nextjs"
                    />
                    <meta name='twitter:card' content='summary_large_image' />
                    <meta property='og:image' content='/preview.jpeg' />
                </Head>
                <div
                    id='loader'
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'var(--bg)',
                        fontFamily: 'var(--monospace-font)',
                        zIndex: 9999,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        transition: 'opacity 0.5s ease-in-out',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        className='spinner-border'
                        style={{ width: '50px', height: '50px' }}
                    ></div>
                    <div
                        style={{
                            opacity: '0',
                            transform: 'translateY(1em)',
                            position: 'absolute',
                            bottom: '15vh',
                            animation: 'fadeIn 1s 5s forwards',
                        }}
                    >
                        Your internet is so slow lmao
                    </div>
                </div>
                {this.props.children}
            </>
        );
    }

    handleLoad() {
        document.documentElement.removeAttribute('style');
        const loader = document.getElementById('loader') as HTMLDivElement;
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
}
