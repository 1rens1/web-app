import styles from '@styles/Neon.module.scss';
import { HTMLProps } from 'react';

const Neon = ({
    flicker,
    children,
    ...rest
}: HTMLProps<HTMLSpanElement> & { flicker?: boolean }) => {
    return (
        <span
            data-flicker={
                flicker === undefined || flicker === null ? true : flicker
            }
            className={styles.neon}
            {...rest}
        >
            {children}
        </span>
    );
};

export default Neon;
