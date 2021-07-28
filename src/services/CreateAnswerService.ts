import {Request, Response} from "express"
import {AnswerRepository} from "../repositories/AnswerRepository";
import {getCustomRepository} from "typeorm";
import { Survey } from "../entities/Survey";


class CreateAnswerService{
    async create(request: Request, response: Response){
        const {answer} = request.body;

        const { survey_id }= request.params

        const surveyRepository = getCustomRepository(AnswerRepository);

        const answers = surveyRepository.create({
           answer,
           survey_id: request.params
        });
        

        await surveyRepository.save(answers);

        return response.status(201).json(survey_id)
    }
}


export{CreateAnswerService}