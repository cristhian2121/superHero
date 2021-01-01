import { IncomingMessage, ServerResponse, get } from 'http';
import { URL_API } from '../../const/variables';
import { IService } from '../../interfaces/IServices';
import { ISuperHero } from '../../interfaces/ISuperHero';

class SuperHeroService implements IService {
    async getAll() {
        try {
            const resRaw = await window.fetch(URL_API);
            return <Promise<ISuperHero>>resRaw.json()
        } catch (error) {
            console.log('error: ', error);
        }
    }
}
