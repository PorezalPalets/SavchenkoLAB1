import { ApiProperty } from "@nestjs/swagger";

export class CreateUsetDto {

@ApiProperty({example: 'Иван', description: 'Имя покупателя'})
readonly FirstName: string;

@ApiProperty({example: 'Иванов', description: 'Фамилия покупателя'})
readonly LastName:string;

@ApiProperty({example: '111-111 111111', description: 'Паспортные данные'})
readonly Passport:string;

@ApiProperty({example: '05-06-1298', description: 'Дата рождения'})
readonly DateYear:string;

@ApiProperty({example: '79991234466', description: 'Телефон покупателя'})
readonly PhoneNumber:string;
}