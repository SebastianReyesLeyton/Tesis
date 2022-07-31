import { Router } from "express";
import { validateAccessToken } from "../../../lib/request";
import TherapyController from "../controller/therapy";

const router = new Router();
const controller = TherapyController;

/* GET routes */
router.get('/all/not-finished/:rows/:offset', validateAccessToken(), controller.getNotFinished() );

/* POST routes */
router.post('/schedule', validateAccessToken(), controller.schedule() );


export default router;