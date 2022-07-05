import { Router } from "express";
import supervisor from "./supervisor";
import therapist from "./therapist";

const userRouter = new Router();

userRouter.use('/supervisor', supervisor);
userRouter.use('/therapist', therapist);

export default userRouter;