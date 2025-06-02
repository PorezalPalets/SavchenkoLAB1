import { Injectable } from "@nestjs/common";
import { Item } from "./item.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateItemDto } from "./dto/create-item.dto";


@Injectable()
export class ItemsService{

    constructor(@InjectModel(Item) private itemRepository: typeof Item){

    }

    async createItem(dto: CreateItemDto){

        const item = await this.itemRepository.create(dto);
        return item;
    }

    async getAllItems(){
        const items = await this.itemRepository.findAll();
        return items;
    }
}