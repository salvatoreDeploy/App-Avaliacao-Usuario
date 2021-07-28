import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("survey")
class Survey{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    survey: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export{Survey}