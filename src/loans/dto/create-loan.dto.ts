import { ApiProperty } from "@nestjs/swagger";

export class CreateLoanDto{

    @ApiProperty({example: '1', description: 'Айди покупателя'})
    readonly  id_Client: string;

    @ApiProperty({example: '1', description: 'Айди музыкального инструмента'})
    readonly  id_item: string;

    @ApiProperty({example: '6000', description: 'Первоначальный взнос'})
    readonly  s_zaim: string;

    @ApiProperty({ example: '10%', description: 'Проценты первоначального взноса' })
    readonly portsent: string;

    @ApiProperty({example: '11-05-2025', description: 'Дата покупки в рассрочку'})
    readonly  date: string;

    @ApiProperty({example: 'Да', description: 'Товар выкупали ?  - Да / Нет -'})
    readonly  viplata: string;
}