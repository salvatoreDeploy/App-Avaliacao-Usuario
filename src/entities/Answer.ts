import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { Survey } from "./Survey";

@Entity("answer")
class Answer{

    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Survey)
    @JoinColumn({name: "survey_id"})
    survey_id: Survey;

    @Column()
    answer: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Answer}