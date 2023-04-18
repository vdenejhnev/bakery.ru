import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { CreateUserDTO } from 'src/accounts/users/dto/create-user.dto';
import { UsersService } from 'src/accounts/users/users.service';

@Injectable()
export class AuthService {

    constructor (
        private userService: UsersService,
        private jwtService: JwtService
    ) {}

    async login(userDTO: CreateUserDTO) {
    }

    async registration(userDTO: CreateUserDTO) {
        const exist_user = await this.userService.getUserByPhone(userDTO.phone);
        
        if (exist_user) {
            throw new HttpException('Данный телефон уже зарегистрирован', HttpStatus.BAD_REQUEST)
        }

        //const hashPassword = await bcrypt.hash(userDTO.passwword, 5);
        
        const user = await this.userService.createUser({...userDTO});
        return this.generateToken(user);
    }

    async generateToken(user) {
        const payload = {phone: user.phone, id: user.id, roles: user.roles}

        return {
            token: this.jwtService.sign(payload)
        }
    }
}
