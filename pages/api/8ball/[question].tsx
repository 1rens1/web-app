import responsesJSON from '@data/8ballResponses.json';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'GET')
        return res
            .status(405)
            .json({ statusCode: 405, message: 'Method not allowed' });
    const { query } = req;
    const { question } = query;
    if (question.length < 3)
        return res.status(400).json({
            statusCode: 400,
            message: `Question is too short (${question.length})`,
            answer: `Question is too short (${question.length})`,
        });

    if (question.length > 100)
        return res.status(400).json({
            statusCode: 400,
            message: `Question is too long (${question.length})`,
            answer: `Question is too long (${question.length})`,
        });

    const responses = responsesJSON;
    const randomType = ['affirmative', 'negative', 'neutral'][
        Math.floor(Math.random() * 3)
    ] as 'affirmative' | 'negative' | 'neutral';
    const randomAnswer =
        responses[randomType][
            Math.floor(Math.random() * responses[randomType].length)
        ];

    res.status(200).json({
        question: question,
        answer: randomAnswer,
        type: randomType,
    });
};

export default handler;
