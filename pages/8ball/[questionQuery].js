import { useState, useRef, useEffect } from 'react';
import styles from './8ball.module.scss';
import responsesJson from '../../data/8ballResponses.json';
import { toast } from 'react-toastify';
import Router, { useRouter } from 'next/router';

export default function _8ball() {
    const router = useRouter();
    const questionQuery = router.query.questionQuery;
    const [question, setQuestion] = useState('What is your question?');

    const ballRef = useRef();
    const questionRef = useRef();

    const responses = responsesJson;

    const types = ['affirmative', 'neutral', 'negative'];
    const [answer, setAnswer] = useState({
        answer: '',
        type: '',
        revealing: false,
    });

    function askQuestion(_question) {
        if (_question.length > 0 && _question.length < 3) {
            console.log('[M8B] Question is too short');
            return toast.error(
                <div>
                    Please ask a question that is at least <strong>3</strong>{' '}
                    characters long. ({_question.length})
                </div>
            );
        }
        if (_question.length > 50) {
            console.log('[M8B] Question is too long');
            return toast.error(
                <div>
                    Please ask a question that is at most <strong>50</strong>{' '}
                    characters long. ({_question.length})
                </div>
            );
        }
        _question = `\u201c${_question}\u201d`;
        setQuestion((prevQuestion) => _question);
        questionRef.current.value = null;
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

    function handleBallClick() {
        if (answer.revealing) return;
        if (!questionRef.current.value.length)
            return askQuestion('No question');
        Router.push(
            `/8ball/${
                encodeURIComponent(questionRef.current.value) || 'No question'
            }`
        );
    }

    function handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            if (answer.revealing) return;
            if (!questionRef.current.value.length)
                return askQuestion('No question');
            else {
                Router.push(
                    `/8ball/${encodeURIComponent(questionRef.current.value)}`
                );
            }
        }
    }

    useEffect(() => {
        if (!questionQuery) return;
        askQuestion(questionQuery);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionQuery]);

    useEffect(() => {
        console.log('[M8B] ' + JSON.stringify(answer));
    }, [answer]);

    return (
        <div className={styles.cont}>
            <div className='h1 m-4 fst-italic text-center'>{question}</div>
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
            <div className={styles.question} onKeyPress={handleInputKeyPress}>
                <input
                    type='text'
                    ref={questionRef}
                    className={'form-control'}
                    placeholder='Y/N Question'
                />
            </div>
        </div>
    );
}
