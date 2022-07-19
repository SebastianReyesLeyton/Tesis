import { Router } from "express";
import TestController from "../controller/test";
import { validateAccessToken } from "../../../lib/request";

const router = new Router();
const controller = TestController;

/* GET routes */
router.get('/all/in-progress/:rows/:offset', validateAccessToken(), controller.getEditableTests() );
router.get('/all/available/:rows/:offset', validateAccessToken(), controller.getPublishedTests() );
router.get('/question-types', validateAccessToken(), controller.getQuestionTypes() );
router.get('/publish/:test', validateAccessToken(), controller.publish() );

/* POST routes */
router.post('/create', validateAccessToken(), controller.create() );
router.post('/:test/add-question/:questionType', validateAccessToken(), controller.addQuestion() );

export default router;