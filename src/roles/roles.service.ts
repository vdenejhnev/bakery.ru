import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { privateDecrypt } from 'crypto';
import { Role } from './roles.model';

@Injectable()
export class RolesService {

    constructor (@InjectModel(Role) private roleRepo: typeof Role) {}

    async getRoleValue(value: string) {
        const role = await this.roleRepo.findOne({where: {value}})
        return role;
    }
}
