import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { AllowNull, AutoIncrement, BelongsTo, BelongsToMany, Column, DataType, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/users.model";

interface PostCreationAttrs {

    FirstName: string;
    LastName:string;
    Passport:string;
    DateYear:string;
    PhoneNumber:string;
} 
@ApiTags('Посты')
@Table({tableName:'posts'})
export class Post extends Model<Post, PostCreationAttrs>{
    
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    tittle: string;

    
    @Column({type: DataType.STRING, unique: false, allowNull:false})
    content:string;

    @Column({type: DataType.STRING, unique: false, allowNull:false})
    image:string;


    @BelongsTo(() => User)
    author: User
}