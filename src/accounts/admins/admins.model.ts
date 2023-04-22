import { BelongsTo, BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";


interface AdminCreationAttrs {
    name: string;
    phone: number;

    verificationCode: number;
    expirateCodeAt: number;
}

@Table({tableName: 'admins'})
export class Admin extends Model<Admin, AdminCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false, defaultValue: "Администратор"})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    phone: number;

    @Column({type: DataType.INTEGER})
    verificationCode: number;

    @Column({type: DataType.INTEGER})
    expirateCodeAt: number
}