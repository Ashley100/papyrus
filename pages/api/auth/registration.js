// Registration page API

import withMiddleware from "../../../server/middleware/withMiddleware";
import userRegistrationController from "../../../server/lib/actions/user/auth/userRegistration.controller";
import withoutAuth from "../../../server/middleware/withoutAuth";
import withMethod from "../../../server/middleware/withMethod";

export default (req, res) => withMiddleware(
    req, res,
    userRegistrationController,
    [
        withMethod(["POST"]),
        withoutAuth
    ]
)