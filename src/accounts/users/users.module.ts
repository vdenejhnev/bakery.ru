import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [
    JwtService,
    
    UsersService,
    ...usersProviders,
  ]
})
export class UsersModule {}
