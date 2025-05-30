import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: '01@mail.ru', description: 'Почта'})
    @IsString({message: 'Не строка'})
    @IsEmail({}, {message: "Неправильный email"})
    readonly email: string;
    @ApiProperty({example: 'Admin123', description: 'пароль'})
    @IsString({ message: 'Не строка'})
    @Length(4, 16, {message: 'Стандарт слов не меньше 4 и не больше 16'})
    readonly password: string;
}
//