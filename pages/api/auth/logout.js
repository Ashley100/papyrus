// Login page API

import userLogoutController from "../../../server/lib/actions/user/auth/userLogout.controller";
import withMiddleware from "../../../server/middleware/withMiddleware";
import withMethod from "../../../server/middleware/withMethod";

export default (req, res) => withMiddleware(
    req, res,
    userLogoutController,
    [
        withMethod(["GET"]),
    ]
);