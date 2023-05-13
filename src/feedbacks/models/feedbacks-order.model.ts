import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Bakery } from "src/bakeries/models/bakeries.model";

interface FeedbacksOrdersCreationAttrs {
  

}

@Table({tableName: 'feedbacks_orders'})
export class FeedbackOrder extends Model<FeedbackOrder, FeedbacksOrdersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Bakery)
    @Column({ field: 'bakeryId' })
    bakeryId: number;

    @BelongsTo(() => Bakery)
    bakery: Bakery
}