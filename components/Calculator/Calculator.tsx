import styles from './Calculator.module.scss';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { evaluate } from 'mathjs';

export default function _calculator() {
    const [calc, setCalc] = useState('');
    const [calcDisplay, setCalcDisplay] = useState('');
    const [result, setResult] = useState('');

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
        <div className={styles.app}>
            <div className={styles.calculator + ' def-box-shadow unsel'}>
                <h1 className={styles.display}>
                    <div
                        dangerouslySetInnerHTML={{ __html: calcDisplay || '0' }}
                        className={styles.calcDisplay}
                    ></div>
                    <div className='text-muted' style={{ fontSize: '.5em' }}>
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
                                setCalc((prevCalc) => prevCalc.slice(0, -1));
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
        </div>
    );
}
