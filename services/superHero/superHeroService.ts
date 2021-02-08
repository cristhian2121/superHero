import { IncomingMessage, ServerResponse, get } from 'http';
import { URL_API } from '../../const/variables';
import { IService } from '../../interfaces/IServices';
import { ISuperHero } from '../../interfaces/ISuperHero';
import { requestProxy } from '../requestProxy';

export class SuperHeroService implements IService {    

    async getAll() {        
        const response = await requestProxy.getAll(URL_API);
        return response
    }
}
