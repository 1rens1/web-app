import { useState, useRef } from 'react';
import styles from './8ball.module.scss';
import responsesJson from '../data/8ballResponses.json';

export default function _8ball() {
    const ballRef = useRef(null);

    const responses = responsesJson;

    const types = ['affirmative', 'neutral', 'negative'];
    const [answer, setAnswer] = useState({
        answer: '',
        type: '',
        revealing: false,
    });

    function handleBallClick(e) {
        if (answer.revealing) return;
        else {
            const randomType = types[Math.floor(Math.random() * types.length)];
            const answers = responses[randomType];
            const randomAnswer =
                answers[Math.floor(Math.random() * answers.length)];
            setAnswer((prevAnswer) => ({
                ...prevAnswer,
                answer: randomAnswer,
                type: randomType,
                revealing: true,
            }));

            ballRef.current.classList.add(styles.reveal);
            setTimeout(() => {
                ballRef.current.classList.remove(styles.reveal);
                setTimeout(() => {
                    setAnswer((prevAnswer) => ({
                        ...prevAnswer,
                        revealing: false,
                    }));
                }, 2000);
            }, 4000);
        }
    }

    return (
        <div className={styles.cont}>
            <div
                ref={ballRef}
                onClick={handleBallClick}
                className={styles._8b + ' unsel'}
            >
                <div className={styles['text-8']}>8</div>
                <div
                    className={styles['text-answer']}
                    style={{
                        borderBottomColor:
                            answer.type === 'affirmative'
                                ? '#00ff00'
                                : answer.type === 'negative'
                                ? '#ff0000'
                                : '#ffff00',
                    }}
                >
                    {answer.answer}
                </div>
            </div>
        </div>
    );
}
