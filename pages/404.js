import styles from './404.module.css';

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <strong className={styles.code}>404</strong> Not Found
            </div>
        </div>
    );
}
