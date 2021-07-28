import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAnswer1627440152417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "answer",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "survey_id",
                        type: "varchar",
                    },
                    {
                        name: "answer",
                        type: "int"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        )
        await queryRunner.createForeignKey(
            "answer",
            new TableForeignKey({
                columnNames: ["survey_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "survey",
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
