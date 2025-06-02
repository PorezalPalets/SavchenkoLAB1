import { Module } from '@nestjs/common';
import { ItemsController } from './item.controller';
import { ItemsService } from './item.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './item.model';

@Module({

    controllers:[ItemsController],
    providers:[ItemsService],
    imports:[
        SequelizeModule.forFeature([Item])
    ]
})
export class ItemModule{}
