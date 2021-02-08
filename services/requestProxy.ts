import p from 'phin';
import { errorRequest, successRequest } from '../utils';

export const requestProxy = {

    getAll: async (url: string, options?) => {
        try {
            const responseRaw = await p({
                url,
                parse: 'json'
            });
            return successRequest({ data: responseRaw.body })
        } catch (e) {
            return errorRequest({ error: e, message: e.message })
        }

    },

    getById: async (url: string, options?) => {
        try{
            const responseRaw = await p({
                url,
                parse: 'json'
            });
            return successRequest({ data: responseRaw })
        } catch (e) {
            return errorRequest({ error: e, message: e.message })
        }

    }
}