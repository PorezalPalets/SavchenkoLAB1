import { Post } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {

    FirstName: string;
    LastName:string;
    Passport:string;
    DateYear:string;
    PhoneNumber:string;
} 

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty({example: '1', description: 'Айди покупателя'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'Иван', description: 'Имя покупателя'})
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    FirstName: string;

    @ApiProperty({example: 'Иванов', description: 'Фамилия покупателя'})
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    LastName:string;

    @ApiProperty({ example: '111-111 111111', description: 'Паспортные данные покупателя'})
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    Passport:string;

    @ApiProperty({example: '11-06-988', description: 'Дата рождения'})
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    DateYear:string;

    @ApiProperty({ example: '79991234466', description: 'Номер телефона покупателя'})
    @Column({type: DataType.STRING, allowNull:true})
    PhoneNumber:string;

    @ApiProperty({example: 'true', description: 'Находится ли в черном списке?'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Мошеничество', description: 'Причина черного списка'})
    @Column({type: DataType.BOOLEAN, allowNull: true})
    Banreason:string;

     @BelongsToMany(() => Role, () => UserRoles)
     roles: Role[];
}