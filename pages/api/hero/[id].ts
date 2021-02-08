// Folder api is required

import { NextApiRequest, NextApiResponse } from 'next';

const test = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { id } = req.query;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ test: true }))
}

export default test;
