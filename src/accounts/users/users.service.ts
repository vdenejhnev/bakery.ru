import { Inject, Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_REPOSITORY') private userRepo: typeof User
    ) {}

    async createUser(dto: CreateUserDTO) {
        return await this.userRepo.create(dto);
    }

    async getAllUsers() {
        return await this.userRepo.findAll({ include: { all: true } });
    }

    async getUserByPhone(phone: string) {
        return await this.userRepo.findOne({ where: { phone }, include: { all: true } })
    }
}
