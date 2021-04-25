import UserHelperClass from "../user/userHelper.class";
// import Cookies from "cookies";
import {Error} from "../../../../tools/Error";



class UserAuthClass {

    constructor() {

    }


    async registration (request, response) {

        const { email, password } = request.body;

        try {

            if (!email || !password) throw { message: "Registration error!", ...errors };

            let user = await UserHelperClass.create(request, response);

            console.log(user);

        } catch (error) {

            throw error;

        }

    }

    async login (request, response) {

        const { email, password } = request.body;

        try {

            if (!email || !password) throw {message: "Registration error!", ...errors};

            let user = await UserHelperClass.get(request, response);

            let token = await UserHelperClass.updateJWT(request, response, user)

            console.log(token);

        } catch (error) {

            throw error;

        }

    }

    async isLogged (token) {

        const t = await UserHelperClass.verifyJWT(token);

        if (!t) throw Error(409, "Вы не авторизованны!");

    }

}

export default new UserAuthClass();