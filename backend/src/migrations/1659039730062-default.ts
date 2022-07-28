import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659039730062 implements MigrationInterface {
    name = 'default1659039730062'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" RENAME COLUMN "CarBrand" TO "carBrand"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" RENAME COLUMN "carBrand" TO "CarBrand"`);
    }

}
