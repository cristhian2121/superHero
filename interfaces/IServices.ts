import { ISuperHero } from "./ISuperHero";

export interface IService {

    getAll(): Promise<any>
    
}

export interface IResponse {
    data?;
    state?: boolean;
    status?: number;
    message?: string;
    error?;
}