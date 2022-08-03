import { Router } from "express";
import { validateAccessToken } from "../../../lib/request";
import TherapyController from "../controller/therapy";

const router = new Router();
const controller = TherapyController;

/* GET routes */
router.get('/all/not-finished/:rows/:offset', validateAccessToken(), controller.getNotFinished() );
router.get('/:idTherapy/update-current-question/:questionLocation', validateAccessToken(), controller.updateQuestionLocation() );

/* POST routes */
router.post('/schedule', validateAccessToken(), controller.schedule() );


export default router;