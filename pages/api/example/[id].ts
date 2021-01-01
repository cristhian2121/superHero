// Folder api is required

import { IncomingMessage, ServerResponse } from 'http';

const test = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
    res.statusCode = 201;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({ test: true }))
}

export default test;
