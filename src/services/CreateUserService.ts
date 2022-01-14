import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { getCustomRepository } from "typeorm";

class CreateUserService{
    async create(request: Request, response: Response){
        const {name,admin = true} = request.body;

        const userRepository = getCustomRepository(UserRepository);
        

        const user = userRepository.create({
            name,
            admin,
        });

        await userRepository.save(user);

        return response.status(201).send();
    }

    async list(request: Request, response: Response){
        
        const userRepository = getCustomRepository(UserRepository);

        const all = await userRepository.find();

        return response.json(all);

    }
}

export {CreateUserService}