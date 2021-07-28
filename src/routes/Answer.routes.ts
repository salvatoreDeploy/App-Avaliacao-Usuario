import {Router} from "express";

import {CreateAnswerService} from '../services/CreateAnswerService';

const answerRoutes = Router();

const createAnswerService = new CreateAnswerService()

answerRoutes.post("/:id/submit", createAnswerService.create);

export {answerRoutes}