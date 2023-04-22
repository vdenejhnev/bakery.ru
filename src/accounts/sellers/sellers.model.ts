import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Bakery } from "src/bakeries/models/bakeries.model";


interface SellerCreationAttrs {
    name: string;
    phone: number;
    email: string;
    balance: number;

    isReg: boolean;

    verificationCode: number;
    expirateCodeAt: number;
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

    @Column({type: DataType.INTEGER, defaultValue: 0})
    balance: number;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isReg: boolean;

    @Column({type: DataType.INTEGER})
    verificationCode: number;

    @Column({type: DataType.INTEGER})
    expirateCodeAt: number

    @HasMany(() => Bakery)
    bakeries: Bakery[]

}