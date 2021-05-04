import UserAuthClass from "./userAuth.class";
import formatResponse from "../../../../tools/response";
import cookie from "cookie";
import {Error} from "../../../../tools/Error";


export default async function userIsLoggedController (request, response) {

    try {

        console.log("userIsLoggedController >> request.headers", request.headers.authorization);

        if (!request.headers.authorization) throw Error(409, "Вы не авторизованны!");

        const token = request.headers.authorization.split(" ")[1];

        if(!token) throw Error(409, "Вы не авторизованны!");

        await UserAuthClass.isLogged(token);

        response.status(200).json(formatResponse(200, true, [], "Logged ok"));

    } catch (e) {

        console.log("userIsLoggedController => error: ", e);

        response.status(501).json(formatResponse(409, false, [], "Logged failed!"));
    }

}