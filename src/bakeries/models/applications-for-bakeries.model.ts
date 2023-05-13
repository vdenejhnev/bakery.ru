import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ApplicationsForBakeriesCreationAttrs {
    fullName: string;
    email: string;
    nameBakery: string;
    address: string
    phone: string
    inn: string
}

@Table({tableName: 'applications_bakeries'})
export class ApplicationsForBakeries extends Model<ApplicationsForBakeries, ApplicationsForBakeriesCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    fullName: string;

    @Column({type: DataType.STRING, allowNull: false})
    email: string

    @Column({type: DataType.STRING, allowNull: false})
    nameBakery: string

    @Column({type: DataType.STRING, allowNull: false})
    address: string

    @Column({type: DataType.STRING, allowNull: false})
    phone: string
    
    @Column({type: DataType.STRING, allowNull: false})
    inn: string
}