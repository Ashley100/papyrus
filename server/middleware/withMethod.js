import { Error } from "../tools/Error";

export default function withMethod (methods = []) {


    return async (req, res) => {

        try {

            if (!methods.includes(req.method)) throw `This method accept only ${methods.toString()}`;

        } catch (error) {

            res.status(404).json(Error(404, "Invalid method for this route!", error));

            throw Error(404, "Invalid method for this route!", error);

        }
    }

}