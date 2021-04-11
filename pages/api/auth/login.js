// Login page API

import userLoginController from "../../../server/lib/actions/user/auth/userLogin.controller";
import withMiddleware from "../../../server/middleware/withMiddleware";
import withoutAuth from "../../../server/middleware/withoutAuth";
import withMethod from "../../../server/middleware/withMethod";

export default (req, res) => withMiddleware(
    req, res,
    userLoginController,
    [
        withMethod(["POST"]),
        withoutAuth
    ]
);