// Using middleware with mongoose wrapping
// https://dev.to/raphaelchaula/adding-mongodb-mongoose-to-next-js-apis-3af

import mongoDB from "../../middleware/mongoose/mongodb";
import User from "../../model/User";


const withAuthController = async (req, res) => {

    await mongoDB(function (req, res) {
        console.log("connected");
    });

    // Here will be auth logic
    let user = await User.findOne({_id: "6071ec30e787e7d96e303ec8"})

    if (!user) throw "User with this email not found!";

    console.log(user);


    return function (fn) {
        fn(req, res);
    }

};

export default withAuthController;
