import { useEffect, useState, useRef } from 'react';
import Fonts from '@data/NFT.fonts.json';
import styles from '@styles/NFT.module.scss';
// @ts-ignore
import { saveSvgAsPng } from 'save-svg-as-png';

export default function $NFT() {
    const [update, setUpdate] = useState(0);
    function regenerate() {
        if (update == 0) setUpdate(1);
        else setUpdate(0);
    }

    const SVGRef = useRef<SVGSVGElement>(null);
    function randomColor() {
        const letters = '0123456789abcdef';
        let color = '';
        for (let i = 0; i < 6; i++)
            color += letters[Math.floor(Math.random() * 16)];

        return color;
    }

    function saveSvg() {
        saveSvgAsPng(SVGRef.current, `The Alphabeticals - ${randomLetter}`, {
            fonts: [
                {
                    url: font,
                    text: `@font-face {font-family: "NFT"; src: url("${font}");}`,
                },
            ],
        });
    }

    const [font, setFont] = useState('');
    const [$fontType, $setFontType] = useState(0);
    const fontType =
        $fontType === 0
            ? ''
            : $fontType === 1
            ? 'font-style: italic'
            : $fontType === 2
            ? 'font-weight: bold'
            : 'font-style: italic; font-weight: bold';
    const [$fontBg, $setFontBg] = useState('');
    const [fontBg1, setFontBg1] = useState('');
    const [fontBg2, setFontBg2] = useState('');
    const [randDeg, setRandDeg] = useState(0);
    const [fontColor, setFontColor] = useState('');
    const [randomLetter, setRandomLetter] = useState('A');
    const [borderOpacity, setBorderOpacity] = useState(0);

    //? If didn't use useState, the color would be missmatch with client and server

    useEffect(() => {
        const $fc = randomColor();
        setFont(
            () =>
                Fonts[Math.floor(Math.random() * Fonts.length)] as string
        );
        $setFontType(() => Math.floor(Math.random() * 3));
        setRandomLetter(() =>
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        );
        $setFontBg(
            () => ['normal', 'gradient'][Math.floor(Math.random() * 2)]
        );
        setFontBg1(() => randomColor());
        setFontBg2(() => randomColor());
        setRandDeg(() => Math.floor(Math.random() * 360));
        setFontColor(() => $fc);
        const $opProb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        setBorderOpacity(
            () => $opProb[Math.floor(Math.random() * $opProb.length)]
        );
    }, [update]);
    return (
        <>
            <div className={styles.container}>
                <div className='unsel'>
                    <svg
                        className={'unsel ' + styles.alphabet}
                        viewBox='0 0 1000 1000'
                        ref={SVGRef}
                    >
                        <defs>
                            <linearGradient
                                id='grad'
                                x1='0%'
                                y1='0%'
                                x2='100%'
                                y2='100%'
                                gradientTransform={`rotate(${randDeg})`}
                            >
                                <stop
                                    offset='0%'
                                    style={{ stopColor: `#${fontBg1}` }}
                                />
                                <stop
                                    offset='100%'
                                    style={{
                                        stopColor: `#${
                                            $fontBg == 'normal'
                                                ? fontBg1
                                                : fontBg2
                                        }`,
                                    }}
                                />
                            </linearGradient>
                            <style>
                                {`@font-face {font-family: "NFT"; src: url("${font}");}.${styles.alphabet}{font-family: "NFT";${fontType};}`}
                            </style>
                        </defs>
                        <rect
                            width='100%'
                            height='100%'
                            fill='url(#grad)'
                        ></rect>
                        {borderOpacity === 1 ? (
                            <g>
                                <rect
                                    width='100%'
                                    height='30'
                                    fill={`#${fontColor}`}
                                ></rect>
                                <rect
                                    width='100%'
                                    height='30'
                                    y='970'
                                    fill={`#${fontColor}`}
                                ></rect>
                                <rect
                                    width='30'
                                    height='100%'
                                    fill={`#${fontColor}`}
                                ></rect>
                                <rect
                                    width='30'
                                    height='100%'
                                    x='970'
                                    fill={`#${fontColor}`}
                                ></rect>
                            </g>
                        ) : null}
                        <text
                            x='50%'
                            y='50%'
                            textAnchor='middle'
                            dominantBaseline='middle'
                            fontSize='30rem'
                            fill={`#${fontColor}`}
                        >
                            {randomLetter}
                        </text>
                    </svg>
                    <div>
                        <button
                            className='btn btn-primary mt-3'
                            onClick={saveSvg}
                        >
                            Save
                        </button>{' '}
                        <button
                            className='btn btn-outline-warning mt-3'
                            onClick={regenerate}
                        >
                            Regenerate
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
