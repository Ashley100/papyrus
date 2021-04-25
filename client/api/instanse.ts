import axios from "axios";
import cookie from "cookie";


export function api (request) {
    return axios.create({
        baseURL: `${process.env.IP ? process.env.IP +":"+ process.env.PORT : 'http://localhost:3000'}/api/`,
        headers: {
            'Authorization': `Bearer ${
                request
                    ? request && request.headers.cookie && cookie.parse(request.headers.cookie).token ? cookie.parse(request.headers.cookie).token : "null"
                    : cookie.parse(document.cookie).token
            }`
        }
    });
}