import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsetDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';


@ApiTags('Покупатели')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){

    }
    @ApiOperation({summary: 'Добавление покупателя в базу данных'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUsetDto){
        return this.usersService.createUser(userDto)
    }


    @ApiOperation({summary: 'Получить информацию о покупателях'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }
}
