import { Router } from "express";
import user from "./user";

const userRouter = new Router();

const Logger = (req, res, next) => {
    console.log(`[+] ${req.method} ${req.originalUrl}`); 
    next();
}

userRouter.use(Logger, user);

export default userRouter;