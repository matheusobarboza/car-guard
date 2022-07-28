import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659039304140 implements MigrationInterface {
    name = 'default1659039304140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "name"`);
    }

}
