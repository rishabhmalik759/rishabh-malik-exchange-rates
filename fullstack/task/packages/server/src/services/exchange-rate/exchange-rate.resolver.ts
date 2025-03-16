import { Query, Resolver } from '@nestjs/graphql';
import { ExchangeRateService } from './exchange-rate.service';
import { ExchangeRates } from './dto/exchange-rate.model';

@Resolver(() => ExchangeRates)
export class ExchangeRateResolver {
    constructor(private readonly exchangeRateService: ExchangeRateService) {}

    @Query(() => ExchangeRates)
    async exchangeRates() {
        const data = await this.exchangeRateService.getExchangeRates();
        return {
            rates: data.rates,
            lastFetchTimestamp: data.lastFetchTimestamp,
        };
    }
}
