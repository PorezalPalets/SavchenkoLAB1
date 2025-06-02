import { Controller, Post, Body, Get } from '@nestjs/common';
import { iterableEquality } from '@jest/expect-utils';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './item.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Item } from './item.model';

@ApiTags('Рынок музыкальных инструментов')
@Controller('Items')
export class ItemsController {

    constructor(private itemsService: ItemsService){}

    @ApiOperation({summary: 'Добавление музыкальных инструментов в базу данных'})
    @ApiResponse({status: 200, type: Item})
    @Post()
    create(@Body() itemDto: CreateItemDto){
        return this.itemsService.createItem(itemDto);
    }


    @ApiOperation({summary: 'Вывод всех музыкальных инструментов из базы данных'})
    @ApiResponse({status: 200, type: [Item]})
    @Get()
    getAll(){
        return this.itemsService.getAllItems();
    }


}