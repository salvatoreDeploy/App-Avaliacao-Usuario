import {Request, Response} from "express"
import {AnswerRepository} from "../repositories/AnswerRepository";
import {Between,getCustomRepository} from "typeorm";
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

    async dateByList(request: Request, response: Response){
        const {date_init, date_end} = request.body;

        const surveyRepository = getCustomRepository(AnswerRepository);

        const filterDate = await surveyRepository.find({created_at: Between(date_init, date_end)});

        return response.json(filterDate);
    }
}


export{CreateAnswerService}