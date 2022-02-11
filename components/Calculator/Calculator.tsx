import styles from './Calculator.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { evaluate } from 'mathjs';
import Draggable from 'react-draggable';

export default function _calculator() {
    const [calc, setCalc] = useState('');
    const [calcDisplay, setCalcDisplay] = useState('');
    const [result, setResult] = useState('');
    const nodeRef = useRef(null);

    useEffect(() => {
        setCalcDisplay(
            calc.replace(/[+\-*\/]/g, (match) => {
                switch (match) {
                    case '+':
                        return '<i class="bi bi-plus"></i>';
                    case '-':
                        return '<i class="bi bi-dash"></i>';
                    case '*':
                        return '<i class="bi bi-x"></i>';
                    case '/':
                        return '<i class="bi bi-slash"></i>';
                    default:
                        return match;
                }
            })
        );
        try {
            setResult(evaluate(calc).toString());
        } catch (e) {}
        if (calc === '' || calc === undefined) {
            setResult('');
            console.log('[CALC] Calc cleared');
        } else {
            console.log('[CALC] Calc changed:', calc);
        }
    }, [calc]);

    const ops = ['+', '-', '*', '/', '.'];

    function updateCalc(value: string) {
        if (
            (ops.includes(value) && ops.includes(calc.slice(-1))) ||
            (ops.includes(value) && calc === '')
        )
            return;

        setCalc(calc + value);
    }

    function createDidgits() {
        const didgits = [];
        for (let i = 1; i < 11; i++) {
            didgits.push(
                <button
                    key={uuidv4()}
                    onClick={() => updateCalc((i % 10).toString())}
                >
                    {i % 10}
                </button>
            );
        }
        return didgits;
    }

    function calculate() {
        if (ops.includes(calc.slice(-1))) return;
        if (calc === '' || calc === undefined) return;

        try {
            setCalc(evaluate(calc).toString());
            console.log('[CALC] Calc evaluated:', calc);
        } catch (e) {
            toast.error('Invalid Expression');
            console.log('[CALC] Invalid Expression:', calc);
        }
    }


    return (
        <div className={styles.app + ' unsel'}>
            <Draggable nodeRef={nodeRef} bounds='parent' handle='.drag-grip'>
                <div
                    ref={nodeRef}
                    className={styles.calculator + ' def-box-shadow'}
                >
                    <div
                        className='text-muted d-flex justify-content-center align-items-center'
                        style={{ background: '#1e2133' }}
                    >
                        <i className='bi bi-grip-horizontal px-2 grab-cur drag-grip'></i>
                    </div>
                    <h1 className={styles.display}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: calcDisplay || '0',
                            }}
                            className={styles.calcDisplay}
                        ></div>
                        <div
                            className='text-muted'
                            style={{ fontSize: '.5em' }}
                        >
                            {result ? (
                                <span>({+parseFloat(result).toFixed(4)})</span>
                            ) : (
                                <br />
                            )}
                        </div>
                    </h1>
                    <div className={styles.buttons}>
                        <div className={styles.clears}>
                            <button
                                onClick={() => {
                                    setCalc('');
                                    setResult('');
                                }}
                            >
                                C
                            </button>
                            <button
                                onClick={() => {
                                    setCalc((prevCalc) =>
                                        prevCalc.slice(0, -1)
                                    );
                                }}
                            >
                                <i className='bi bi-backspace'></i>
                            </button>
                        </div>
                        <div className={styles.operators}>
                            <div className={styles.row}>
                                <button onClick={() => updateCalc('+')}>
                                    <i className='bi bi-plus'></i>
                                </button>
                                <button onClick={() => updateCalc('-')}>
                                    <i className='bi bi-dash'></i>
                                </button>
                            </div>
                            <div className={styles.row}>
                                <button onClick={() => updateCalc('*')}>
                                    <i className='bi bi-x'></i>
                                </button>
                                <button onClick={() => updateCalc('/')}>
                                    <i className='bi bi-slash'></i>
                                </button>
                            </div>
                        </div>
                        <div className={styles.digits}>
                            {createDidgits()}
                            <button onClick={() => updateCalc('.')}>.</button>
                            <button onClick={calculate}>=</button>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    );
}
