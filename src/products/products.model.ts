import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Bakery } from "src/bakeries/bakeries.model";

interface ProductCreationAttrs {
    title: string;
    price: number;
    category: number;
    bakery: number;
    image: string;
    description: string;
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

    @ApiProperty({example: '1', description: "ID категории"})
    @Column({type: DataType.INTEGER, allowNull: false})
    category: number;

    @ApiProperty({example: '/img/product_img.png', description: "Изображение товара"})
    @Column({type: DataType.STRING, allowNull: false, defaultValue: '/img/product_img.png'})
    image: string;

    @ApiProperty({example: 'Очень вкусный багет с изюмом', description: "Описание товара"})
    @Column({type: DataType.TEXT, allowNull: false, defaultValue: ''})
    description: string;

    
    @ForeignKey(() => Bakery)
    @Column({ field: 'BAKERY_ID' })
    bakeryId: number;

    @BelongsTo(() => Bakery)
    bakery: Bakery
}