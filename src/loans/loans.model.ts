import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface LonaCreateAttrs{
    id_Client: string;
    id_item: string;
    s_zaim: string;
    portsent: string;
    date: string;
    viplata: string;
}


@Table({tableName: 'loans'})
export class Loan extends Model<Loan, LonaCreateAttrs>{

    @ApiProperty({example: '1', description: 'Айди рассрочки'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    declare id: number;

    @ApiProperty({example: '1', description: 'Айди покупателя'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    id_Client: string;

    @ApiProperty({example: '1', description: 'Айди музыкального инструмента'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    id_item: string;

    @ApiProperty({example: '6000', description: 'Сумма рассрочки'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    s_zaim: string;

    @ApiProperty({example: '10%', description: 'Проценты первоначального взноса'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    portsent: string;

    @ApiProperty({ example: '11-05-2025', description: 'Дата рассрочки'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    date: string;

    @ApiProperty({example: 'Да', description: 'Товар выкупили? - Да / Нет -'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    viplata: string;
}