import styles from '@styles/Calculator.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import reactStringReplace from 'react-string-replace';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import { evaluate } from 'mathjs';
import Draggable from 'react-draggable';
import Head from 'next/head';
import { BsBackspace, BsDash, BsGripHorizontal, BsPlus, BsSlash, BsX } from 'react-icons/bs';

export default function _calculator() {
    const [calc, setCalc] = useState('');
    const [calcDisplay, setCalcDisplay] = useState(<span>0</span>);
    const [result, setResult] = useState('');
    const nodeRef = useRef(null);

    useEffect(() => {
        setCalcDisplay(
            <span>
                {calc !== ''
                    ? reactStringReplace(calc, /(\+|-|\*|\/)/g, (match) => {
                          if (match == '+') return <span key={uuidv4()}><BsPlus /></span>;
                          if (match == '-') return <span key={uuidv4()}><BsDash /></span>;
                          if (match == '*') return <span key={uuidv4()}><BsX /></span>;
                          if (match == '/') return <span key={uuidv4()}><BsSlash /></span>;
                          return match;
                      })
                    : 0}
            </span>
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
        <>
            <Head>
                <title>rens - Calculator</title>
                <meta name='description' content='Simple online calculator' />
            </Head>
            <div className={styles.app + ' unsel'}>
                <Draggable
                    nodeRef={nodeRef}
                    bounds='parent'
                    handle='.drag-grip'
                >
                    <div
                        ref={nodeRef}
                        className={styles.calculator + ' def-box-shadow'}
                    >
                        <div className={styles.grip}>
                            <div className='px-2 grab-cur drag-grip'>
                                <BsGripHorizontal />
                            </div>
                        </div>
                        <h1 className={styles.display}>
                            <div className={styles.calcDisplay}>
                                {calcDisplay}
                            </div>
                            <div
                                className='text-muted'
                                style={{ fontSize: '.5em' }}
                            >
                                {result ? (
                                    <span>
                                        ({+parseFloat(result).toFixed(4)})
                                    </span>
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
                                    <BsBackspace />
                                </button>
                            </div>
                            <div className={styles.operators}>
                                <div className={styles.row}>
                                    <button onClick={() => updateCalc('+')}>
                                        <BsPlus />
                                    </button>
                                    <button onClick={() => updateCalc('-')}>
                                        <BsDash />
                                    </button>
                                </div>
                                <div className={styles.row}>
                                    <button onClick={() => updateCalc('*')}>
                                        <BsX />
                                    </button>
                                    <button onClick={() => updateCalc('/')}>
                                        <BsSlash />
                                    </button>
                                </div>
                            </div>
                            <div className={styles.digits}>
                                {createDidgits()}
                                <button onClick={() => updateCalc('.')}>
                                    .
                                </button>
                                <button onClick={calculate}>=</button>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </>
    );
}
