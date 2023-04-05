import { INTEGER } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ProductCreationAttrs {
    title: string;
    price: number;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.TEXT, allowNull: false, defaultValue: "Товар без названия"})
    title: string;

    @Column({type: DataType.FLOAT, allowNull: false, defaultValue: 0.0})
    price: number;
}