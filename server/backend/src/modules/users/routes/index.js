import { Router } from "express";
import user from "./user";
import supervisor from "./supervisor";

const userRouter = new Router();

userRouter.use(user);
userRouter.use('/supervisor', supervisor);

export default userRouter;