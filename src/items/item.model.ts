import { Model, Table, Column } from "sequelize-typescript";
import { StringLiteral } from "@babel/types";
import { DataType } from "sequelize-typescript";
import { ApiResponse, ApiProperty } from "@nestjs/swagger";


interface ItemCreationAttrs{
    Name_T: string;
    Price: string;
    type: string;
    Price_Z: string;
}

@Table({tableName: 'Items'})
export class Item extends Model<Item, ItemCreationAttrs>{

    @ApiProperty({example: '1', description: 'Айди музыкального инструмента'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: 'Гитара', description: 'Название музыкального инструмента'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    Name_T: string;

    @ApiProperty({example: '12500р', description: 'Цена музыкального инструмента'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    Price: string;

    @ApiProperty({ example: 'Струнный-щипковый инструмент', description: 'Тип музыкального инструмента'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    type: string;

    @ApiProperty({example: '2500р', description: 'Первоначальный взнос'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    Price_Z: string;
}