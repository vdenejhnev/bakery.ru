import { ApiProperty } from "@nestjs/swagger";
import { INTEGER } from "sequelize";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles', createdAt: false, updatedAt: false})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: "ID роли"})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user', description: "Значение роли"})
    @Column({type: DataType.STRING, unique: true, allowNull: false, defaultValue: "user"})
    value: string;

    @ApiProperty({example: 'Пользователь', description: "Название роли"})
    @Column({type: DataType.STRING, unique: true, allowNull: false, defaultValue: "Пользователь"})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}