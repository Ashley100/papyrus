import mongoDB from "./mongodb";
import {logger} from "../tools/logger";

export default async function withMiddleware (req, res, fn, middleware = []) {

    await mongoDB((req, res) => console.log("connected"));

    try {

        for (const md of middleware) {

            await md(req, res);

        }

    } catch (e) {

        // res.status(404).send(e);

        logger.error(e.message);

        return false;

    }

    return fn(req, res);

}