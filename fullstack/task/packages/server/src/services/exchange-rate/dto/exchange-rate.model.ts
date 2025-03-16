import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class ExchangeRate {
    @Field()
    country!: string;

    @Field()
    currency!: string;

    @Field()
    code!: string;

    @Field()
    amount!: number;

    @Field()
    rate!: number;
}

@ObjectType()
export class ExchangeRates {
    @Field(() => [ExchangeRate])
    rates!: ExchangeRate[];

    @Field()
    lastFetchTimestamp!: Date;
}
