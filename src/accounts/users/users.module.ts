import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database.module';
import { sellersProviders } from '../sellers/sellers.providers';

@Module({
  imports: [],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [
  ]
})
export class UsersModule {}
