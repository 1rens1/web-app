import styles from './Error.module.scss';

export default function Error() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                {statusCode
                    ? `An error ${(
                          <strong>{statusCode}</strong>
                      )} occurred on server`
                    : 'An error occurred on client'}
            </div>
        </div>
    );
}
