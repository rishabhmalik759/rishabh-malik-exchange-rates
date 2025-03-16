import { gql } from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
    [_ in K]?: never;
};
export type Incremental<T> =
    | T
    | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: string; output: string };
};

export type CreateExampleInputType = {
    name: Scalars['String']['input'];
    value: Scalars['String']['input'];
};

export type Example = {
    __typename?: 'Example';
    createdAtUtc: Scalars['DateTime']['output'];
    deleteDateUtc?: Maybe<Scalars['DateTime']['output']>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    updatedAtUtc?: Maybe<Scalars['DateTime']['output']>;
    value: Scalars['String']['output'];
    version: Scalars['Int']['output'];
};

export type ExchangeRate = {
    __typename?: 'ExchangeRate';
    amount: Scalars['Float']['output'];
    code: Scalars['String']['output'];
    country: Scalars['String']['output'];
    currency: Scalars['String']['output'];
    rate: Scalars['Float']['output'];
};

export type ExchangeRates = {
    __typename?: 'ExchangeRates';
    lastFetchTimestamp: Scalars['DateTime']['output'];
    rates: Array<ExchangeRate>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createExample: Example;
};

export type MutationCreateExampleArgs = {
    data: CreateExampleInputType;
};

export type Query = {
    __typename?: 'Query';
    exampleByName?: Maybe<Example>;
    exchangeRates: ExchangeRates;
};

export type QueryExampleByNameArgs = {
    name: Scalars['String']['input'];
};

export type GetExchangeRatesQueryVariables = Exact<{ [key: string]: never }>;

export type GetExchangeRatesQuery = {
    __typename?: 'Query';
    exchangeRates: {
        __typename?: 'ExchangeRates';
        lastFetchTimestamp: string;
        rates: Array<{
            __typename?: 'ExchangeRate';
            country: string;
            code: string;
            currency: string;
            amount: number;
            rate: number;
        }>;
    };
};

export const GetExchangeRatesDocument = gql`
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

/**
 * __useGetExchangeRatesQuery__
 *
 * To run a query within a React component, call `useGetExchangeRatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExchangeRatesQuery` returns an object from Apollo Client that contains loading, error, and
 * data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on:
 * https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExchangeRatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExchangeRatesQuery(
    baseOptions?: ApolloReactHooks.QueryHookOptions<
        GetExchangeRatesQuery,
        GetExchangeRatesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return ApolloReactHooks.useQuery<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>(
        GetExchangeRatesDocument,
        options
    );
}
export function useGetExchangeRatesLazyQuery(
    baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
        GetExchangeRatesQuery,
        GetExchangeRatesQueryVariables
    >
) {
    const options = { ...defaultOptions, ...baseOptions };
    return ApolloReactHooks.useLazyQuery<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>(
        GetExchangeRatesDocument,
        options
    );
}
export function useGetExchangeRatesSuspenseQuery(
    baseOptions?:
        | ApolloReactHooks.SkipToken
        | ApolloReactHooks.SuspenseQueryHookOptions<
              GetExchangeRatesQuery,
              GetExchangeRatesQueryVariables
          >
) {
    const options =
        baseOptions === ApolloReactHooks.skipToken
            ? baseOptions
            : { ...defaultOptions, ...baseOptions };
    return ApolloReactHooks.useSuspenseQuery<GetExchangeRatesQuery, GetExchangeRatesQueryVariables>(
        GetExchangeRatesDocument,
        options
    );
}
export type GetExchangeRatesQueryHookResult = ReturnType<typeof useGetExchangeRatesQuery>;
export type GetExchangeRatesLazyQueryHookResult = ReturnType<typeof useGetExchangeRatesLazyQuery>;
export type GetExchangeRatesSuspenseQueryHookResult = ReturnType<
    typeof useGetExchangeRatesSuspenseQuery
>;
export type GetExchangeRatesQueryResult = ApolloReactHooks.QueryResult<
    GetExchangeRatesQuery,
    GetExchangeRatesQueryVariables
>;
