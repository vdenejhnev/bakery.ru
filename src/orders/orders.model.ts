import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'orders'})
export class Order extends Model<Order> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;


    
}