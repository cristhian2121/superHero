import { ISuperHero } from "./ISuperHero";

export interface IService {

    getAll(): Promise<ISuperHero>
    
}