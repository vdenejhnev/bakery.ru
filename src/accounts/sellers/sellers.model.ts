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
export class Seller extends Model<Seller, SellerCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, defaultValue: "Продавец"})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    phone: number;

    @Column({type: DataType.STRING})
    email: string;

    @Column({type: DataType.INTEGER})
    balance: number;

    @Column({type: DataType.BOOLEAN})
    isReg: boolean;

    @Column({type: DataType.ARRAY(DataType.INTEGER)})
    activationCode: Array<number>;

    // @HasMany(() => Bakery)
    // bakeries: Bakery[]
}