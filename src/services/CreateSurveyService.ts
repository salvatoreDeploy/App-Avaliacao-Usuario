import {Request, Response} from "express"
import {SurveyRepository} from "../repositories/SurveyRepository";
import {getCustomRepository} from "typeorm";


class CreateSurveyService{
    async create(request: Request, response: Response){
        const {title, survey} = request.body;

        const surveyRepository = getCustomRepository(SurveyRepository);

        const surveys = surveyRepository.create({
           title,
           survey
        });

        await surveyRepository.save(surveys);

        return response.status(201).send()
    }

    async list(request: Request, response: Response){
        
        const surveyRepository = getCustomRepository(SurveyRepository);

        const all = await surveyRepository.find();

        return response.json(all);

    }

    async show(request: Request, response: Response){

        const surveyRepository = getCustomRepository(SurveyRepository);

        const all = await surveyRepository.findOne(request.params.id);

        return response.json(all);

    }
}


export{CreateSurveyService}