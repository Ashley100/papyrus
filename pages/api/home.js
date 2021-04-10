// Home page API

import { withAuthController } from "../../server/actions/auth/withAuth.controller";
import userGetPosts from "../../server/actions/user/userGetPosts";

export default (req, res) => withAuthController(req, res)(userGetPosts);