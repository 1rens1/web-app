import styles from './calculator.module.scss';
import { evaluate } from 'mathjs';
import { useRef, useState } from 'react';

// _calculator() because react doesn't want calculator()
export default function _calculator() {
    function handleFormSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.cont} onSubmit={handleFormSubmit}>
            <div className={styles.calculator}>
                <div className={styles.display}>
                    <span className={styles.display_text}>{0}</span> 0
                </div>
                <div className={styles.operators}>
                    <button className={styles.btn}>/</button>
                    <button className={styles.btn}>&times;</button>
                    <button className={styles.btn}>+</button>
                    <button className={styles.btn}>-</button>
                </div>
            </div>
        </div>
    );
}
