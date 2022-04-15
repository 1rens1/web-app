import type { NextPage } from 'next';
import styles from '@styles/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title__container} data-unsel=''>
                <h1 className={styles.title}>rens</h1>
                <h1 className={styles.title__shadow}>rens</h1>
            </div>
            <div>
                Coming soon
            </div>
        </div>
    );
};

export default Home;
