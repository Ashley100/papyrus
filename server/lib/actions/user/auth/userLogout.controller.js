import {Error} from "../../../../tools/Error";
import cookie from "cookie";
import formatResponse from "../../../../tools/response";
import UserHelperClass from "../user/userHelper.class";

export default async function userLogoutController (request, response) {

    try {

        console.log("userLogoutController >> request.headers", request.headers);

        if (!request.headers.authorization) throw Error(409, "Вы не авторизованны!");

        const sToken = request.headers.authorization.split(" ")[1];

        const token = await UserHelperClass.verifyJWT(sToken);

        console.log("data", token, sToken);

        if(!token) throw Error(409, "Вы не авторизованны!");

        response.setHeader("Set-Cookie",
            cookie.serialize("token", sToken, {
                path: "/",
                maxAge: 1
            })
        );
        // response.setHeader("Set-Cookie", ["token=null"]);
        response.setHeader("Authorization", "Bearer null");

        response.status(200).json(formatResponse(200, [], "Logout ok"));

    } catch (e) {

        console.log("userLogoutController => error: ", e);

        response.status(501).json(formatResponse(409, e, "Logout failed!"));
    }

}