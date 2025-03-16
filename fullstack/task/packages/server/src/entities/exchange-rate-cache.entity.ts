import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ExchangeRate } from '../services/exchange-rate/dto/exchange-rate.model';

@Entity()
export class ExchangeRateCache {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('jsonb')
    rates!: ExchangeRate[];

    @Column('timestamptz')
    lastFetchTimestamp!: Date;

    @CreateDateColumn({ type: 'timestamptz' })
    createdAt!: Date;
}
