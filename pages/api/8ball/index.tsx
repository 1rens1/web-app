import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) =>
    res.redirect(308, '/api/8ball/No%20question');
export default handler;
