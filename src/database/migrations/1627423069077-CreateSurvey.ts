import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurvey1627423069077 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "survey",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
