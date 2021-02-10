import axios from 'axios';
import { errorRequest, successRequest } from '../utils';

export const requestProxy = {

    getAll: async (url: string, options?) => {
        try {
            const responseRaw = await axios.get(url);
            return successRequest({ data: responseRaw.data })
        } catch (e) {
            console.log('e: ', e);
            return errorRequest({ error: e, message: e.message })
        }

    },

    getById: async (url: string, options?) => {
        try{
            const responseRaw = await axios.get(url);
            return successRequest({ data: responseRaw })
        } catch (e) {
            return errorRequest({ error: e, message: e.message })
        }

    }
}