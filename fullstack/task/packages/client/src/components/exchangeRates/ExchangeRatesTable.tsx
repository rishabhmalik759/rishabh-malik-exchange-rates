import { ExchangeRate } from '../../generated/graphql';

interface ExchangeRatesTableProps {
    rates?: ExchangeRate[];
}

export const ExchangeRatesTable = ({ rates }: ExchangeRatesTableProps) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Country</th>
                        <th>Currency</th>
                        <th>Amount</th>
                        <th>Code</th>
                        <th>Rate (CZK)</th>
                    </tr>
                </thead>
                <tbody>
                    {rates?.map((rate) => (
                        <tr key={rate.code}>
                            <td>{rate.country}</td>
                            <td>{rate.currency}</td>
                            <td>{rate.amount}</td>
                            <td>{rate.code}</td>
                            <td>{rate.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
