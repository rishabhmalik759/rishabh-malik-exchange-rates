import { MigrationInterface, QueryRunner } from 'typeorm';

export class exchangeRateCache1742051664131 implements MigrationInterface {
    name = 'exchangeRateCache1742051664131';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "exchange_rate_cache" ("id" SERIAL NOT NULL, "rates" jsonb NOT NULL, "lastFetchTimestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_ea802f348ca448fbd1006a9cc37" PRIMARY KEY ("id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exchange_rate_cache"`);
    }
}
