import { EntityRepository, Repository } from "typeorm";
import { Answer } from "../entities/Answer";

@EntityRepository(Answer)
class AnswerRepository extends Repository<Answer>{}

export {AnswerRepository}