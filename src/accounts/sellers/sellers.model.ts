import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Bakery } from "src/bakeries/bakeries.model";


interface SellerCreationAttrs {
    name: string;
    phone: number;
    email: string;
    balance: number;

    isReg: boolean;

    activationCode: Array<number>;
}

@Table({tableName: 'sellers'})
export class Seller extends Model<Seller> {
    @Column
    name: string;

    @Column
    phone: number;

    @Column
    email: string;

    @Column
    balance: number;

    @Column
    isReg: boolean;

    // @Column
    // activationCode: Array<number>;

    // @HasMany(() => Bakery)
    // bakeries: Bakery[]
}