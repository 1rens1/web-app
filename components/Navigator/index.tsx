import styles from '@styles/Navigator.module.scss';
import NavLinks from './Links';
import Link from 'next/link';
import links from '@data/links.json';
import { Router } from 'next/router';
import { useRef } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { IconContext } from 'react-icons';

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
                <BsList />
            </button>
            <div className={styles.nav} ref={navRef}>
                <div className={styles.nav__close} onClick={handleCloseNav}>
                    <BsX />
                </div>
                <div className={styles.title}>
                    <div>
                        <span className='code-light-blue-force'>rens</span>{' '}
                        <span className='code-blue-force'>Web</span>
                        <span className='code-yellow-force'>()</span>
                        <span className='code-blue-force'>;</span>
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
            </div>
            <div className={styles.empty__space} onClick={handleCloseNav}></div>
        </>
    );
}
