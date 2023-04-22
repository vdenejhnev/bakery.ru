import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from 'src/database.module';
import { categoriesProviders } from './categories.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    ...categoriesProviders
  ]
})
export class CategoriesModule {}
