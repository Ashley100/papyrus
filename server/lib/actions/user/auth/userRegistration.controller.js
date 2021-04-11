import UserAuthClass from "./userAuth.class"

export default async function userRegistrationController (req, res) {

    try {

        await UserAuthClass.registration(req, res);

        res.status(200).json({"message": "Registration ok"});

    } catch (e) {

        res.status(501).json({"message": "Registration failed!"});
    }

}