import { useQuery } from '@apollo/client';
import { ExchangeRatesTable } from '../../components/exchangeRates/ExchangeRatesTable';
import { LastUpdatedPlaceholder } from '../../components/exchangeRates/LastUpdatedPlaceholder';
import { EXCHANGE_RATES_QUERY, ExchangeRatesResponse } from './graphql/query';

const handleError = (error: any) => {
    if (error.networkError) {
        return `Network error: ${error.networkError.message}`;
    }
    return `GraphQL error: ${error.message}`;
};

const ExchangeRates = () => {
    const { loading, error, data } = useQuery<ExchangeRatesResponse>(EXCHANGE_RATES_QUERY, {
        fetchPolicy: 'cache-and-network',
        pollInterval: 300000,
    });

    if (loading)
        return (
            <div className="text-center mt-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );

    if (error)
        return (
            <div className="alert alert-danger mt-4">
                Error: {handleError(error)}
                <div className="mt-2">Make sure the backend server is running!</div>
            </div>
        );

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Current Exchange Rates (CZK)</h2>
            <LastUpdatedPlaceholder lastFetchTimestamp={data?.exchangeRates.lastFetchTimestamp} />
            <ExchangeRatesTable rates={data?.exchangeRates?.rates} />
        </div>
    );
};

export default ExchangeRates;
