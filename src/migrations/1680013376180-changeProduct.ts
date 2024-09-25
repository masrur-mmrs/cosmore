import { MigrationInterface, QueryRunner } from "typeorm"

export class changeProduct1680013376180 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" ADD COLUMN IF NOT EXISTS \"customAttribute\" text"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"product\" DROP COLUMN IF EXISTS \"customAttribute\""
        )
    }
}