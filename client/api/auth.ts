import {api} from "./instanse";

export const authAPI = {

    verifyUser: async req => {
        // console.log(req.headers);
        try {
            if(req) {
                const response = await api(req).get('api/auth/islogged');
                return response?.data
            } else {
                const response = await api(null).get('api/auth/islogged');
                return response?.data
            }
        } catch (e) {
            console.log("authAPI >> verifyUser >> error >> ", e?.response?.data);
            return e?.response?.data;
        }
    }
}