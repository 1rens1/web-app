import Neon from '@components/Neon';
import styles from '@styles/404.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiHome } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';

const Custom404 = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <div className={styles.title__container} data-unsel=''>
                <h1 className={styles.title}>
                    <Neon>404 Not Found</Neon>
                </h1>
            </div>
            <div className={styles.buttons}>
                <Link href='/' tabIndex={-1}>
                    <button>
                        <BiHome /> Go Home
                    </button>
                </Link>
                <button onClick={router.back}>
                    <FiArrowLeft /> Go Back
                </button>
            </div>
        </div>
    );
};
export default Custom404;
