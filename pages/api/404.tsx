import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
    res.status(404).json({ statusCode: 404, message: 'Not Found' });
export default handler;
