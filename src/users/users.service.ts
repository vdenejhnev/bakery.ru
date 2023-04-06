import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepo: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDTO) {
        const user = await this.userRepo.create(dto);
        const role = await this.roleService.getRoleValue('user');
        await user.$set('roles', [role.id]);
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepo.findAll({include: {all: true}});
        return users;
    }
}
