import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from 'src/database.module';
import { categoriesProviders } from './categories.providers';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    JwtService,
    CategoriesService,
    ...categoriesProviders
  ]
})
export class CategoriesModule {}
