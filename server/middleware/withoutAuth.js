// Using middleware with mongoose wrapping
// https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af

import { Error } from "../tools/Error";
import UserHelperClass from "../lib/actions/user/user/userHelper.class";


const withoutAuth = async (req, res) => {

    try {

        await UserHelperClass.verifyJWT(req.cookies.token);

    } catch (error) {

        console.error("withoutAuth => error: ", error.message);

        res.status(301).redirect("http://localhost:3000/").json({message: "redirect from home page"});

        throw Error("", error.message, error);

    }

};

export default withoutAuth;
