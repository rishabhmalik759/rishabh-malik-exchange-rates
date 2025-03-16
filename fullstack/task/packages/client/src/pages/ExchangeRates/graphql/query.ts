import { gql } from '@apollo/client';

export const EXCHANGE_RATES_QUERY = gql`
    query GetExchangeRates {
        exchangeRates {
            rates {
                country
                code
                currency
                amount
                rate
            }
            lastFetchTimestamp
        }
    }
`;

export interface ExchangeRate {
    country: string;
    code: string;
    currency: string;
    amount: number;
    rate: number;
}

export interface ExchangeRatesResponse {
    exchangeRates: {
        rates: ExchangeRate[];
        lastFetchTimestamp: string;
    };
}
