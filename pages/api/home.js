// Home page API

import withAuthController from "../../server/user/actions/auth/withAuth.controller";
import userGetPosts from "../../server/user/actions/user/userGetPosts";

export default async (req, res) => (await withAuthController(req, res))(userGetPosts);