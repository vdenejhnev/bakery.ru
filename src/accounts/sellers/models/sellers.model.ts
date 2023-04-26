import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Bakery } from "src/bakeries/models/bakeries.model";
import { RequestMoney } from "./request-money.model";


interface SellerCreationAttrs {
    name: string;
    phone: number;
    email: string;
    balance: number;

    verificationCode: number;
    expirateCodeAt: number;
}

@Table({ tableName: 'sellers' })
export class Seller extends Model<Seller, SellerCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "Продавец" })
    name: string;

    @Column({ type: DataType.STRING })
    phone: string;

    @Column({ type: DataType.STRING, allowNull: false, defaultValue: "" })
    email: string;

    @Column({ type: DataType.INTEGER, defaultValue: 0 })
    balance: number;

    @Column({ type: DataType.STRING, defaultValue: null })
    verificationCode: number;

    @Column({ type: DataType.STRING, defaultValue: null })
    expirateCodeAt: number

    @HasMany(() => Bakery)
    bakeries: Bakery[]

    @HasMany(() => RequestMoney)
    requests_money: RequestMoney[]
}