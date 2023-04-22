import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";

interface FeedbacksProductsCreationAttrs {
  

}

@Table({tableName: 'feedbacks_products'})
export class FeedbacksProducts extends Model<FeedbacksProducts, FeedbacksProductsCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
}