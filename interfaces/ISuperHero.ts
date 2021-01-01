export interface ISuperHero {
    code?: number;
    status?: string;
    copyright?: string;
    attributionText?: string;
    attributionHTML?: string;
    etag?: string;
    data?: IReponseData;
}

export interface IReponseData {
    offset?: number,
    limit?: number,
    total?: number,
    count?: number,
    results?: any[]
}
