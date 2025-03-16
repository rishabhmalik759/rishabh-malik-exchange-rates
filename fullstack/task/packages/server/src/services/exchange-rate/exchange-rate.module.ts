import { Module } from '@nestjs/common';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRateResolver } from './exchange-rate.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeRateCache } from '../../entities/exchange-rate-cache.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ExchangeRateCache])],
    providers: [ExchangeRateService, ExchangeRateResolver],
    exports: [ExchangeRateService],
})
export class ExchangeRateModule {}
