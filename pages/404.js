import styles from './404.module.scss';

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <strong
                    className={styles.code + ' text-3xl font-bold underline'}
                >
                    404
                </strong>{' '}
                Not Found
            </div>
        </div>
    );
}
