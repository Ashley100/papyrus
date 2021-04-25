import axios from "axios";
import cookie from "cookie";


export function api (request) {
    console.log("process.env.IP, process.env.PORT >> ", process.env.IP, process.env.PORT);
    return axios.create({
        //baseURL: `http://localhost:${process.env.PORT ? process.env.PORT : '3000'}/api/`,
        headers: {
            'Authorization': `Bearer ${
                request
                    ? request && request.headers.cookie && cookie.parse(request.headers.cookie).token ? cookie.parse(request.headers.cookie).token : "null"
                    : cookie.parse(document.cookie).token
            }`
        }
    });
}