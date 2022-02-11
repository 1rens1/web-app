import styles from '../styles/Error.module.scss';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <strong className={styles.code}>404</strong> Not Found
                <div className={styles.description}>
                    Couldn&apos;t find <code>{router.asPath}</code>
                </div>
            </div>
        </div>
    );
}
