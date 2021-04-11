import User from "../../../model/User";
import {compare, hash} from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

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

            const cookies = new Cookies(req, res, { keys: ["token cat"] });

            cookies.set('token', newToken, { httpOnly: true });

            return newToken;

        } catch (error) {

            throw error;

        }
    }

    async verifyJWT (token) {

        try {

            return jwt.verify(token, process.env.jwtSecret, (error, decoded) => {

                if (!error && decoded) return decoded;

                throw error

            });

        } catch(error) {

            throw error;

        }
    }

}

export default new UserHelperClass();