import styles from '@styles/Error.module.scss';

function Error({ statusCode }: { statusCode: number }) {
    console.log(statusCode);
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                {statusCode ? (
                    <span>
                        Error{' '}
                        {
                            <strong className={styles.code}>
                                {statusCode}
                            </strong>
                        }{' '}
                        occurred on the server
                    </span>
                ) : (
                    <span>An error occurred on client</span>
                )}
            </div>
        </div>
    );
}

// @ts-ignore
Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
