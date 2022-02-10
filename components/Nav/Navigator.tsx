import styles from './Navigator.module.scss';
import NavLinks from './NavLinks';
import Link from 'next/link';
import links from '../../data/links.json';
import { Router } from 'next/router';
import { useRef } from 'react';

export default function Navtest() {
    const navRef = useRef<HTMLDivElement>(null);
    function handleOpenNav() {
        navRef.current?.classList.add(styles.nav__active);
    }

    function handleCloseNav() {
        navRef.current?.classList.remove(styles.nav__active);
    }

    Router.events.on('routeChangeStart', handleCloseNav);

    return (
        <>
            <button
                className={styles.nav__btn}
                onClick={handleOpenNav}
                tabIndex={-1}
            >
                <span className='bi bi-list'></span>
            </button>
            <nav className={styles.nav} ref={navRef}>
                <div
                    className={'bi bi-x ' + styles.nav__close}
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
                            <a tabIndex={-1}>License</a>
                        </Link>
                    </div>
                    <div className={styles.darkmode__suggest}>
                        Website looks way cooler on dark mode.
                    </div>
                </div>
            </nav>
            <div className={styles.empty__space} onClick={handleCloseNav}></div>
        </>
    );
}
