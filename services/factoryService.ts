import { IFactoryService } from "../interfaces/IFactoryService";
import { IService } from "../interfaces/IServices";

export class FactoryService {

    service: IService;

    constructor(service: IService) {
        this.service = service;
    }
}