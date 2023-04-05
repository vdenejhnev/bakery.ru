import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
    name: string;
    gender: string;
    birthday: Date;
    phone: string;
    email: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: "ID пользователя"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Вячеслав', description: "Имя пользователя"})
    @Column({type: DataType.STRING, allowNull: false, defaultValue: "Пользователь"})
    name: string;

    @ApiProperty({example: 'М', description: "Пол пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @ApiProperty({example: '2000-01-01', description: "Дата рождения пользователя"})
    @Column({type: DataType.DATE})
    birthday: Date;

    @ApiProperty({example: '+71234567890', description: "Телефон пользователя"})
    @Column({type: DataType.STRING, allowNull: false})
    phone: string;

    @ApiProperty({example: 'Вячеслав', description: "Email пользователя"})
    @Column({type: DataType.STRING})
    email: string;
}