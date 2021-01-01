// Folder api is required

import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse} from 'next';
import { example } from '../../../services';

const test = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    res.statusCode = 201;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ test: true }))
    example
}

export default test;
