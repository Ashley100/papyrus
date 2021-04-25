// Using middleware with mongoose wrapping
// https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af

import UserHelperClass from "../lib/actions/user/user/userHelper.class";
import User from "../lib/model/User";


const withAuth = async (req, res) => {

    try {

        const token = await UserHelperClass.verifyJWT(req.cookies.token);

        console.log("withAuth >> token", token);

    } catch (error) {

        console.error("withAuth => jwt error: ", error.message);

        if(error.message === "jwt expired") {

            let user = await User.findOne({_id: "6071ec30e787e7d96e303ec8"});

            let newToken = await UserHelperClass.updateJWT(req, res, user);


        } else {

            await res.status(301).redirect("/").json({message: "redirect from home page"});

            throw error.message;

        }


    }

};

export default withAuth;
