import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <strong>rens</strong>{' '}
                <span className={styles.next}>NextJS</span>
                <span className={styles.dot}>.</span>
                <span className={styles.app}>App</span>
                <span className={styles.brackets}>()</span>
                <span className={styles.semicolon}>;</span>
            </div>
            <div>
                Click{' '}
                <span className={styles.nav__btn}>
                    <i className='bi bi-list'></i>
                </span>{' '}
                at the top left of the screen to navigate
            </div>
        </div>
    );
}
