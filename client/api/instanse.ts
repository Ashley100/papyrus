import axios from "axios";
import cookie from "cookie";


export function api (request) {

    const url = request ? new URL(request.headers.referer) : window.location;

    return axios.create({
        baseURL: url.origin,
        headers: {
            'Authorization': `Bearer ${
                request
                    ? request && request.headers.cookie && cookie.parse(request.headers.cookie).token ? cookie.parse(request.headers.cookie).token : "null"
                    : cookie.parse(document.cookie).token
            }`
        }
    });
}