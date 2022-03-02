import styles from '@styles/Home.module.scss';
import { BsList } from 'react-icons/bs';

export default function Homle() {
    return (
        <div className={styles.content}>
            <div className={styles.title}>
                <span className='code-light-blue-force'>rens</span>{' '}
                <span className='code-blue-force'>Web</span>
                <span className='code-yellow-force'>()</span>
                <span className='code-blue-force'>;</span>
            </div>
            <div>
                Click{' '}
                <span className={styles.nav__btn}>
                    <BsList />
                </span>{' '}
                at the top left of the screen to navigate
            </div>
        </div>
    );
}
