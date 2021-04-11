// Home page API

import withMiddleware from "../../server/middleware/withMiddleware";
import userGetPosts from "../../server/lib/actions/user/user/userGetPosts";
import withAuth from "../../server/middleware/withAuth";


export default (req, res) => withMiddleware(
    req, res,
    userGetPosts,
    [
        withAuth
    ]
);


