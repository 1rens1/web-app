import styles from '../styles/Error.module.scss';

export default function Custom505() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <strong className={styles.code}>500</strong> Internal Server
                Error
                <div className={styles.description}>
                    Something went wrong on our server.
                </div>
            </div>
        </div>
    );
}
