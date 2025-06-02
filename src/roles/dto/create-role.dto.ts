import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto{

    @ApiProperty({example: 'Roles', description: 'Функция покупателя'})
    readonly value: string;

    @ApiProperty({example: 'Покупатель', description: 'Описание функции покупателя'})
    readonly description: string;
}