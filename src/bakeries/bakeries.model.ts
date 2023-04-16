import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface BakeryCreationAttrs {
    title: string;
    image: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    owner: number;
}

@Table({tableName: 'bakeries'})
export class Bakery extends Model<Bakery, BakeryCreationAttrs> {
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

    @ApiProperty({example: 1, description: "ID владельца"})
    @Column({type: DataType.INTEGER, allowNull: false})
    owner: number;

    @ApiProperty({example: false, description: "Блокировка пекарни"})
    @Column({type: DataType.BOOLEAN, allowNull: false, defaultValue: false})
    banned: boolean;
}