import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1627350085458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: "user",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true
                    },
                    {
                        name: "admin",
                        type: "varchar",
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
        await queryRunner.dropTable("user");
    }

}
