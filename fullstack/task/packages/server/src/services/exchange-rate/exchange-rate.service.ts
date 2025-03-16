import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { config } from 'dotenv';
import { ExchangeRateCache } from '../../entities/exchange-rate-cache.entity';

config();

const { CNB_API_URL: cnbApiUrl } = process.env;
@Injectable()
export class ExchangeRateService {
    constructor(
        @InjectRepository(ExchangeRateCache)
        private readonly cacheRepository: Repository<ExchangeRateCache>
    ) {}

    public async getExchangeRates(): Promise<Partial<ExchangeRateCache>> {
        const [cachedEntry] = await this.cacheRepository.find({
            order: { createdAt: 'DESC' },
            take: 1,
        });

        if (cachedEntry) {
            const now = new Date();
            const cacheAge = now.getTime() - cachedEntry.createdAt.getTime();
            if (cacheAge < 5 * 60 * 1000) {
                return {
                    rates: cachedEntry.rates,
                    lastFetchTimestamp: cachedEntry.lastFetchTimestamp,
                };
            }
        }

        return this.fetchExchangeRates();
    }

    private async fetchExchangeRates() {
        const response = await axios.get(cnbApiUrl ?? '');
        const text = response.data;
        const lines: string[] = text.split('\n');
        const dataLines = lines.slice(2).filter((line) => line.trim() !== '');
        const rates = dataLines.map((line) => {
            const [country, currency, amountStr, code, rateStr] = line.split('|');
            const amount = parseInt(amountStr, 10);
            const rate = parseFloat(rateStr.replace(',', '.'));
            return { country, currency, amount, code, rate };
        });

        this.cacheRepository.clear();
        const lastFetchTimestamp = new Date();
        const newCacheEntry = this.cacheRepository.create({
            rates,
            lastFetchTimestamp,
        });
        await this.cacheRepository.save(newCacheEntry);

        return { rates, lastFetchTimestamp };
    }
}
