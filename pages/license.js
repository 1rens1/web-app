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
    ];

    return (
        <div className='code my-5 mx-4'>
            <h1>Copyright rens 2022</h1>
            <p>
                This App is a sample project to learn NextJS. The source code of
                this app is not available.
            </p>
            <p>Open source libraries used:</p>
            <ul>
                <LicenseLibraryList links={links} />
            </ul>
            <p>All Rights Reserved.</p>
        </div>
    );
}
