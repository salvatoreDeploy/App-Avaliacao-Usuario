import {Router} from "express";

import {CreateSurveyService} from '../services/CreateSurveyService';

const surveyRoutes = Router();

const createSurveyService = new CreateSurveyService()

surveyRoutes.post("/", createSurveyService.create);
surveyRoutes.get("/", createSurveyService.list);
surveyRoutes.get("/:id", createSurveyService.show);

export {surveyRoutes}