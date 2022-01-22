import styles from './Navigator.module.css';
import NavLinks from './NavLinks';

export default function Navtest() {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/todo', name: 'To Do App' },
    ];
    function navToggle(e) {
        const nav = document.querySelector('.' + styles.nav);
        const emptyspace = document.querySelector('.' + styles['empty-space']);
        if (nav.classList.contains(styles['nav-active']))
            nav.classList.remove(styles['nav-active']);
        else nav.classList.add(styles['nav-active']);
    }
    return (
        <div>
            <button
                className={styles['nav-btn']}
                onClick={navToggle}
                tabIndex={-1}
            >
                ≡
            </button>
            <nav className={styles.nav}>
                <div className={styles['nav-close']} onClick={navToggle}>
                    &times;
                </div>
                <div className={styles.title}>
                    <div>
                        <strong>rens</strong> NextJS App
                    </div>
                </div>
                <div className={styles.links}>
                    <NavLinks links={links} navToggle={navToggle} />
                </div>
                <div className={styles['darkmode-suggest']}>
                    Website looks way cooler on dark mode.
                </div>
            </nav>
            <div className={styles['empty-space']} onClick={navToggle}></div>
        </div>
    );
}
