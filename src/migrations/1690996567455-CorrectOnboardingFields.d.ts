import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CorrectOnboardingFields1690996567455 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
