// Folder api is required

import { IncomingMessage, ServerResponse } from 'http';
import { NextApiRequest, NextApiResponse} from 'next';
import { FactoryService } from '../../../services/factoryService';
import { SuperHeroService } from '../../../services/superHero/superHeroService';

const heroService = new FactoryService(new SuperHeroService())

const superHeroController = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const response = await heroService.getAll();
    res.setHeader('Content-type', 'application/json')
    res.status(response.status).send(response);
}

export default superHeroController;
