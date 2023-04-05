import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ProductCreationAttrs {
    title: string;
    price: number;
}

@Table({tableName: 'products'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @ApiProperty({example: '1', description: "ID продукта"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Хлеб', description: "Название продукта"})
    @Column({type: DataType.TEXT, allowNull: false, defaultValue: "Товар без названия"})
    title: string;

    @ApiProperty({example: '100.0', description: "Стоимость единицы продукта"})
    @Column({type: DataType.FLOAT, allowNull: false, defaultValue: 0.0})
    price: number;
}