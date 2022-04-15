import styles from '@styles/404.module.scss';
import { BiHome } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Custom404 = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.title__container} data-unsel=''>
                <h1 className={styles.title}>404 Not found</h1>
                <h1 className={styles.title__shadow}>404 Not found</h1>
            </div>
            <div className={styles.buttons}>
                <Link href='/'>
                    <a tabIndex={-1}>
                        <button>
                            <BiHome /> Go Home
                        </button>
                    </a>
                </Link>
                <button onClick={router.back}>
                    <FiArrowLeft /> Go Back
                </button>
            </div>
        </div>
    );
};

export default Custom404;
