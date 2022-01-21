import styles from './Home.module.css';

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
            <div style={{ marginTop: '1em' }}>
                Click <span className={styles['nav-btn']}>≡</span> at the top
                left of the screen to navigate
            </div>
        </div>
    );
}
