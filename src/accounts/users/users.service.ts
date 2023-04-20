import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepo: typeof User) {}

    async createUser(dto: CreateUserDTO) {
        const user = await this.userRepo.create(dto);
        // const role = await this.roleService.getRoleValue('user');
        // await user.$set('roles', [role.id]);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepo.findAll({include: {all: true}});
        return users;
    }

    async getUserByPhone(phone: string) {
        const user = await this.userRepo.findOne({where: {phone}, include: {all: true}})
        return user;
    }
}
