import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {

    value: string;
    description:string;
   
}

@Table({tableName:'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty({example: '1', description: 'Айди покупателя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'Roles', description: 'Роль'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    value: string;

    @ApiProperty({example: 'Покупатель', description: 'Описание роли'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    description:string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}