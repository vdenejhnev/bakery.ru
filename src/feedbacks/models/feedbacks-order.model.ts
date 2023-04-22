import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

interface FeedbacksOrdersCreationAttrs {
  

}

@Table({tableName: 'feedbacks_orders'})
export class FeedbacksOrders extends Model<FeedbacksOrders, FeedbacksOrdersCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
}