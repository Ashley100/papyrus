// Using middleware with mongoose wrapping
// https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af

import { Error } from "../tools/Error";
import UserHelperClass from "../lib/actions/user/user/userHelper.class";


const withoutAuth = async (req, res) => {

    const token = await UserHelperClass.verifyJWT(req.cookies.token);

    console.log("withoutAuth => try: ", token);

    if (token) {

        throw Error(409, "Вы уже авторизованны");

    }

};

export default withoutAuth;
