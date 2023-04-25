import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Product } from "src/products/products.model";

interface CategoryCreationAttrs {
    title: string;
    image: string;
    description: string;
}

@Table({tableName: 'categories'})
export class Category extends Model<Category, CategoryCreationAttrs> {
    @ApiProperty({example: '1', description: "ID категории"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Кондитерские изделия', description: "Название категории"})
    @Column({type: DataType.TEXT, allowNull: false, defaultValue: "Категория без названия"})
    title: string;

    @ApiProperty({example: '/img/category_img.png', description: "Изображение категории"})
    @Column({type: DataType.STRING, allowNull: false, defaultValue: '/img/category_img.png'})
    image: string;

    @ApiProperty({example: 'Самые вкусные кондитерские изделия', description: "Описание категории"})
    @Column({type: DataType.TEXT, allowNull: false, defaultValue: ''})
    description: string;

    @HasMany(() => Product)
    products: Product[]
}