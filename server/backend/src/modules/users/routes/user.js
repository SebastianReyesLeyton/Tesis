import { Router } from "express";
import UserController from "../controller/user";
import { validateAccessToken } from "../../../lib/request";

const router = Router();
const controller = UserController;

router.post('/email', validateAccessToken(), controller.email() );

export default router;