import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepo: typeof User) {}

    async createUser(dto: CreateUserDTO) {
        const user = await this.userRepo.create(dto);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepo.findAll();
        return users;
    }
}
