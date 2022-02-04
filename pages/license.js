import LicenseLibraryList from '../components/LicenseLibraryList';

export default function license() {
    const links = [
        { url: 'https://nextjs.org', name: 'NextJS' },
        { url: 'https://getbootstrap.com', name: 'Bootstrap' },
        { url: 'https://icons.getbootstrap.com', name: 'Bootstrap Icons' },
        { url: 'https://github.com/uuidjs/uuid', name: 'uuid' },
        { url: 'https://ricostacruz.com/nprogress/', name: 'NProgress' },
        { url: 'https://github.com/sass/dart-sass', name: 'Sass' },
        { url: 'https://tailwindcss.com/', name: 'tailwindcss' },
        { url: 'https://sweetalert2.github.io/', name: 'SweetAlert2' },
        {
            url: 'https://fkhadra.github.io/react-toastify/',
            name: 'React-toastify',
        },
    ];

    console.log(`[LicenseLibraryList] Loaded ${links.length} links`);

    return (
        <div className='code my-5 mx-4'>
            <div className='h1'>Copyright rens 2022</div>
            <p>
                This App is a sample project to learn NextJS. The source code of
                this app is not available.
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
    );
}
