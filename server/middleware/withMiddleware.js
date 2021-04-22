import mongoDB from "./mongodb";
import {logger} from "../tools/logger";

export default async function withMiddleware (req, res, fn, middleware = []) {

    await mongoDB((req, res) => console.log("connected"));

    try {

        for (const md of middleware) {

            await md(req, res);

        }

        return fn(req, res);

    } catch (e) {

        logger.error(e.message);

        res.status(e.status).send(e);

    }

}