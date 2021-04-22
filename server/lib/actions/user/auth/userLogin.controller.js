import UserAuthClass from "./userAuth.class";

export default async function userLoginController (req, res) {

    try {

        await UserAuthClass.login(req, res);

        res.status(200).json({"message": "Login ok"});

    } catch (e) {

        console.log("userLoginController => error: ", e);

        res.status(501).json({"message": "Login failed!"});
    }

}