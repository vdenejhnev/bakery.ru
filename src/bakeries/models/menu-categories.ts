import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/categories/categories.model";
import { Menu } from "./menu.model";

@Table({tableName: 'menu_categories'})
export class MenuCategories extends Model<MenuCategories> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Category)
    @Column({type: DataType.INTEGER})
    categoryId: number;

    @ForeignKey(() => Menu)
    @Column({type: DataType.INTEGER})
    menuId: number;
}