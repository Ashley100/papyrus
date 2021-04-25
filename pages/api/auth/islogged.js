// Is Logged API

import userIsLoggedController from "../../../server/lib/actions/user/auth/userIsLogged.controller";
import withMiddleware from "../../../server/middleware/withMiddleware";
import withMethod from "../../../server/middleware/withMethod";

export default (req, res) => withMiddleware(
    req, res,
    userIsLoggedController,
    [
        withMethod(["GET"]),
    ]
);