import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Seller } from "src/accounts/sellers/models/sellers.model";
import { FeedbackOrder } from "src/feedbacks/models/feedbacks-order.model";
import { FeedbackProduct } from "src/feedbacks/models/feedbacks-product.model";
import { Menu } from "src/menu/models/menu.model";
import { Product } from "src/products/products.model";



@Table({tableName: 'bakeries'})
export class Bakery extends Model<Bakery> {
    @ApiProperty({example: '1', description: "ID пекарни"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Лучшая в городе пекарня', description: "Название пекарни"})
    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @ApiProperty({example: '/img/bakery_img.png', description: "Лого пекарни"})
    @Column({type: DataType.STRING, allowNull: false, defaultValue: '/img/bakery_img.png'})
    image: string;

    @ApiProperty({example: 'Наша пекарня готовит самые вкусные чизкейки с брусникой', description: "Описание пекарни"})
    @Column({type: DataType.TEXT, allowNull: false, defaultValue: ''})
    description: string;

    @ApiProperty({example: '+79123456789', description: "Телефон пекарни"})
    @Column({type: DataType.STRING, allowNull: false})
    phone: string;

    @ApiProperty({example: 'bakery1@mail.ru', description: "Email пекарни"})
    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @ApiProperty({example: 'г. Москва ул. Охотный ряд 1', description: "Адрес пекарни"})
    @Column({type: DataType.STRING, allowNull: false})
    address: string;

    @HasMany(() => FeedbackOrder)
    feedbacksOrders: FeedbackOrder[]

    @HasMany(() => FeedbackProduct)
    feedbacksProducts: FeedbackProduct[]

    @HasMany(() => Product)
    products: Product[]

    @ForeignKey(() => Menu)
    @Column({ field: 'menuId' })
    menuId: number;

    @BelongsTo(() => Menu)
    menu: Menu
    
    
    @ForeignKey(() => Seller)
    @Column({ field: 'sellerId' })
    sellerId: number;

    @BelongsTo(() => Seller)
    seller: Seller
}