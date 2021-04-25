import { Error } from "../tools/Error";

export default function withMethod (methods = []) {


    return async (req, res) => {

        if (!methods.includes(req.method)) throw Error(401, `This method accept only ${methods.toString()}`);

    }

}