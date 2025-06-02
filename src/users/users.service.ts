import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUsetDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private userRepository: typeof User, private roleService: RolesService){
        
    }

    async createUser(dto: CreateUsetDto){
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue("Client")

        if (!role){
            throw new Error('Данная роль не найдена');
        }
        await user.$set('roles', [role.id])
        user.roles = [role];
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;

    } 

    async getUsersByEmail(PhoneNumber: string){ 
        const user = await this.userRepository.findOne({where: {PhoneNumber}, include: {all: true}})
        return user;
    }
}
