import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthUserGuard } from 'src/common/guards/user/auth.user.guard';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}


    @UseGuards(AuthUserGuard)
    @Get('/me')
    async getMe(@Req() req: any) {
        return await this.usersService.getUserById(Number(req.user.id))
    }


    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post() 
    create(@Body() userdto: CreateUserDTO) {
        return this.usersService.createUser(userdto);
    }

    @ApiOperation({summary: "Вывод всех пользователей"})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
