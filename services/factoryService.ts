import { IResponse, IService } from "@interfaces/IServices";

export class FactoryService<T> {

    private service: IService;

    constructor(service: IService) {
        this.service = service;
    }

    getAll = (query?): Promise<IResponse> => this.service.getAll();

}