import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Seller } from "./sellers.model";


@Table({ tableName: 'requests_money' })
export class RequestMoney extends Model<RequestMoney> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.INTEGER })
    sum: number

    @Column({ type: DataType.ENUM('processing', 'success', 'error') })
    status: 'processing' | 'success' | 'error'

    @ForeignKey(() => Seller)
    @Column({ field: 'sellerId' })
    sellerId: number;

    @BelongsTo(() => Seller)
    seller: Seller
}