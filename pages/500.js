import styles from './Error.module.scss';

export default function Custom505() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <strong
                    className={styles.code + ' text-3xl font-bold underline'}
                >
                    500
                </strong>{' '}
                Internal Server Error
            </div>
        </div>
    );
}
