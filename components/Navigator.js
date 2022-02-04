import styles from './Navigator.module.scss';
import NavLinks from './NavLinks';
import Link from 'next/link';
import links from '../data/links.json';
import { Router } from 'next/router';

export default function Navtest() {
    function handleOpenNav() {
        const nav = document.querySelector('.' + styles.nav);
        nav.classList.add(styles['nav-active']);
    }

    function handleCloseNav() {
        const nav = document.querySelector('.' + styles.nav);
        nav.classList.remove(styles['nav-active']);
    }

    Router.events.on('routeChangeStart', handleCloseNav);

    return (
        <div>
            <button
                className={styles['nav-btn']}
                onClick={handleOpenNav}
                tabIndex={-1}
            >
                <span className='bi bi-list'></span>
            </button>
            <nav className={styles.nav}>
                <div
                    className={'bi bi-x ' + styles['nav-close']}
                    onClick={handleCloseNav}
                ></div>
                <div className={styles.title}>
                    <div>
                        <strong>rens</strong> NextJS App
                    </div>
                </div>
                <div className={styles.links}>
                    <NavLinks links={links} />
                </div>
                <div className={styles.bottom}>
                    <div className={styles.license}>
                        <Link href='/license'>
                            <a>License</a>
                        </Link>
                    </div>
                    <div className={styles['darkmode-suggest']}>
                        Website looks way cooler on dark mode.
                    </div>
                </div>
            </nav>
            <div
                className={styles['empty-space']}
                onClick={handleCloseNav}
            ></div>
        </div>
    );
}
