import LicenseLibraryList from '../components/License/LicenseLibraryList';
import Head from 'next/head';

export default function license() {
    const links = [
        { href: 'https://nextjs.org', title: 'NextJS' },
        { href: 'https://getbootstrap.com', title: 'Bootstrap' },
        { href: 'https://icons.getbootstrap.com', title: 'Bootstrap Icons' },
        { href: 'https://github.com/uuidjs/uuid', title: 'uuid' },
        { href: 'https://ricostacruz.com/nprogress/', title: 'NProgress' },
        { href: 'https://github.com/sass/dart-sass', title: 'Sass' },
        {
            href: 'https://fkhadra.github.io/react-toastify/',
            title: 'React-toastify',
        },
    ];

    console.log(`[LicenseLibraryList] Loaded ${links.length} links`);

    return (
        <>
            <Head>
                <title>rens - License</title>
                <meta name='description' content='License' />
            </Head>
            <div className='code my-5 mx-4'>
                <div className='h1'>Copyright rens 2022</div>
                <p>
                    This App is a sample project to learn NextJS. The source
                    code of this app is not available.
                </p>
                <p>Open source libraries used:</p>
                <ul
                    style={{
                        listStyleType: 'initial',
                        margin: '0 2em 1em 2em',
                    }}
                >
                    <LicenseLibraryList links={links} />
                </ul>
                <p>All Rights Reserved.</p>
            </div>
        </>
    );
}
