import { IResponse } from "../interfaces/IServices";

export const successRequest = (response: IResponse): IResponse => {
    return {
        data: response.data,
        state: response.state || true,
        status: response.status || 200,
        message: response.message || "ok"
    }
}

export const errorRequest = (response: IResponse): IResponse => {
    return {
        data: response.data,
        state: response.state || false,
        status: response.status || 500,
        message: response.message || "fail"
    }
}