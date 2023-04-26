import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/categories/categories.model";
import { MenuCategories } from "./menu-categories.model";
import { Bakery } from "src/bakeries/models/bakeries.model";

@Table({tableName: 'menu'})
export class Menu extends Model<Menu> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;


    @BelongsToMany(() => Category, () => MenuCategories)
    categories: Category[]


    @ForeignKey(() => Bakery)
    @Column({field: 'bakeryId'})
    bakeryId: number 

    @BelongsTo(() => Bakery)
    bakery: Bakery
}