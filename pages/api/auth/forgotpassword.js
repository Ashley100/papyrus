// Forgotpassword page API

import withMiddleware from "../../../server/middleware/withMiddleware";
import userForgotpasswordController from "../../../server/lib/actions/user/auth/userForgotpasswordController";
import withoutAuth from "../../../server/middleware/withoutAuth";

export default (req, res) => withMiddleware(
    req, res,
    userForgotpasswordController,
    [
        withoutAuth
    ]
)