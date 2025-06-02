import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUsetDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { PassThrough } from 'stream';
import { User } from 'src/users/users.model';
import { Role } from 'src/roles/roles.model';
@Injectable()
export class AuthService {

        constructor(private userService: UsersService, private jwtService: JwtService){

        }

        async login(userDto: CreateUsetDto){
            
        }
    
     
        async registration(userDto: CreateUsetDto){
           const candidate = await this.userService.getUsersByEmail(userDto.PhoneNumber);
           if (candidate){
            throw new HttpException('Пользователь с такими данными существует', HttpStatus.BAD_REQUEST)
           }
           const HashPassword =  await bcrypt.hash(userDto.Passport, 5);
           const user = await this.userService.createUser({...userDto, Passport: HashPassword})
           return this.generateToken(user)
        }

        async generateToken(user: User){
            const payload = {Number: user.PhoneNumber, id: user.id, roles: user.roles}
            return{
                token: this.jwtService.sign(payload)
            }
        }


    }

