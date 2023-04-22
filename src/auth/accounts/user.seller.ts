import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/accounts/users/users.service";

@Injectable()
export class UserService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService
    ) { }

    async verify(token: string): Promise<{ phone: number, id: number } | undefined> {
        return await this.jwtService.verify(token, {
            secret: process.env.PRIVATE_KEY_USER
        })
    }

    async generateToken(phone: number, id: number): Promise<string> {
        const payload = { phone, id }

        return await this.jwtService.signAsync(payload,{
            secret: process.env.PRIVATE_KEY_USER,
            expiresIn: '15d'
        })
    }
}