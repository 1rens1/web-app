import styles from '../styles/Error.module.scss';

export default function Error({statusCode}:{statusCode:number}) {
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
