import { MigrationInterface, QueryRunner } from "typeorm"

export class ChangeProduct1680013376180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ADD COLUMN IF NOT EXISTS "product_details" JSONB`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" DROP COLUMN IF EXISTS "product_details"`
    )
  }
}