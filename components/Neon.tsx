import styles from '@styles/Neon.module.scss';
import { HTMLProps } from 'react';

const Neon = (
    props: HTMLProps<HTMLSpanElement> & {
        flicker?: boolean;
        children: React.ReactNode;
    }
) => {
    const { children, flicker } = props;
    return (
        <span
            data-flicker={
                flicker === undefined || flicker === null ? true : flicker
            }
            className={styles.neon}
            {...props}
        >
            {children}
        </span>
    );
};

export default Neon;
