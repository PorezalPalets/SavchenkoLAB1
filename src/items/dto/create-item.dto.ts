import { ApiProperty } from "@nestjs/swagger";

export class CreateItemDto{

    @ApiProperty({example: 'Гитара', description: 'Нейм музыкального инструмента'})
    readonly Name_T: string;
    @ApiProperty({example: '12500р', description: 'Цена музыкального инструмента'})
    readonly Price: string;
    @ApiProperty({example: 'Струнный-щипковый инструмент', description: 'Тип вещи'})
    readonly type: string;
    @ApiProperty({example: '2000р', description: 'Первоначальный взнос'})
    readonly Price_Z: string;
}