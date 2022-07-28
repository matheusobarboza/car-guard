import { MigrationInterface, QueryRunner } from "typeorm";

export class default1659039026135 implements MigrationInterface {
    name = 'default1659039026135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "CarBrand" character varying NOT NULL, "licensePlate" character varying NOT NULL, "client_id" uuid NOT NULL, "accidentsId" uuid, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "clients" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "identification" character varying NOT NULL, CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "thirdParties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "identification" character varying NOT NULL, "accident_id" uuid NOT NULL, CONSTRAINT "PK_38f732e1d97534e6d76aa579f82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "accidents" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "client_id" uuid NOT NULL, "vehiclesId" uuid, CONSTRAINT "PK_908b1b6b529bd265872cbf52e5c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_4253172b7fcc8d1d90a6774502e" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_7170503ed0ffd0ae5484b2bbd13" FOREIGN KEY ("accidentsId") REFERENCES "accidents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "thirdParties" ADD CONSTRAINT "FK_392869baa3c4e6505f46c0383a5" FOREIGN KEY ("accident_id") REFERENCES "accidents"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accidents" ADD CONSTRAINT "FK_3d0b0728402e8c70554ad96bd27" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "accidents" ADD CONSTRAINT "FK_a2b35b68eff30fed642217efa92" FOREIGN KEY ("vehiclesId") REFERENCES "vehicles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accidents" DROP CONSTRAINT "FK_a2b35b68eff30fed642217efa92"`);
        await queryRunner.query(`ALTER TABLE "accidents" DROP CONSTRAINT "FK_3d0b0728402e8c70554ad96bd27"`);
        await queryRunner.query(`ALTER TABLE "thirdParties" DROP CONSTRAINT "FK_392869baa3c4e6505f46c0383a5"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_7170503ed0ffd0ae5484b2bbd13"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_4253172b7fcc8d1d90a6774502e"`);
        await queryRunner.query(`DROP TABLE "accidents"`);
        await queryRunner.query(`DROP TABLE "thirdParties"`);
        await queryRunner.query(`DROP TABLE "clients"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
