import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659041260818 implements MigrationInterface {
    name = 'default1659041260818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_7170503ed0ffd0ae5484b2bbd13"`);
        await queryRunner.query(`ALTER TABLE "accidents" DROP CONSTRAINT "FK_a2b35b68eff30fed642217efa92"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "accidentsId"`);
        await queryRunner.query(`ALTER TABLE "accidents" DROP COLUMN "vehiclesId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accidents" ADD "vehiclesId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "accidentsId" uuid`);
        await queryRunner.query(`ALTER TABLE "accidents" ADD CONSTRAINT "FK_a2b35b68eff30fed642217efa92" FOREIGN KEY ("vehiclesId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_7170503ed0ffd0ae5484b2bbd13" FOREIGN KEY ("accidentsId") REFERENCES "accidents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
