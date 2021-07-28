import {Column, CreateDateColumn, Entity, PrimaryColumn} from 'typeorm';
import {v4 as uuid}  from 'uuid';

@Entity("user")
class User{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    admin?: boolean;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {User}