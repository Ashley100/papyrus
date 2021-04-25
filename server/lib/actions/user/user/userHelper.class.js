import User from "../../../model/User";
import {compare, hash} from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

class UserHelperClass {

    constructor() {
    }

    async create (request, response) {

        try {

            const { email, password } = request.body;

            const userDefaultFields = new Date();

            let candidate = await User.findOne({ email: email });

            if (candidate) throw 'User is registered!';

            const hashPassword = await hash(password, 4);

            const user = await User.create({ email: email, password: hashPassword, ...userDefaultFields });

            return user;

        } catch (error) {

            throw {error};

        }
    }

    async get (request, response) {

        try {

            let { email, password } = request.body;

            let candidate = await User.findOne({ email: email });

            if (candidate === null) throw { error: "User just deleted!" };

            if (!candidate) throw "User with this email not found!";

            const isPassportValid = compare(password, candidate.password);

            if (!isPassportValid) throw "Password is wrong!";

            console.log(email, password, candidate);

            return candidate;

        } catch (error) {

            throw error;

        }
    }

    async createJWT (user) {

        try {
             return await jwt.sign(
                {
                    data: user._id
                },
                process.env.jwtSecret,
                { expiresIn: 60 }
            )
        } catch (error) {

            throw error;

        }

    }

    async updateJWT (req, res, user) {

        try {

            let newToken = await this.createJWT(user);

            res.setHeader("Set-Cookie", cookie.serialize("token", newToken, {
                httpOnly: false,
                path: "/",
                // maxAge: 60 * 60 * 24 * 7 // 1 week
                maxAge: 60 // 1 min
            }))

            // res.setHeader("Authorization", `Bearer ${newToken}`);

            return newToken;

        } catch (error) {

            throw error;

        }
    }

    async verifyJWT (token) {

        return jwt.verify(token, process.env.jwtSecret, (error, decoded) => {

            if (!error && decoded) return decoded;
            console.log("verifyJWT >> ", false);
            return false;

        });
    }

}

export default new UserHelperClass();