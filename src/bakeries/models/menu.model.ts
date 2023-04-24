import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Bakery } from "./bakeries.model";
import { Category } from "src/categories/categories.model";
import { MenuCategories } from "./menu-categories";

interface MenuBakeryCreationAttrs {
    
}

@Table({tableName: 'menu'})
export class Menu extends Model<Menu, MenuBakeryCreationAttrs> {
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