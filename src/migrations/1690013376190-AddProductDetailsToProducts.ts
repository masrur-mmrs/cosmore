import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCustomAttributeToProduct1680013376181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"product\"" + 
      " ADD COLUMN \"productDetails\" jsonb DEFAULT '{}'::jsonb"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "ALTER TABLE \"product\" DROP COLUMN \"productDetails\""
    );
  }
}
