import { Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
   // constructor (private authService: AuthService) {}
    @Get(':id')
    login(@Param() params: Record<string, string>): string {
        return `auth ${params.id}`;
    }
}

