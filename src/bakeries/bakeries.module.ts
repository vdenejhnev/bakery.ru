import { Module } from '@nestjs/common';
import { BakeriesController } from './bakeries.controller';
import { BakeriesService } from './bakeries.service';
import { DatabaseModule } from 'src/database.module';
import { bakeryProviders } from './bakeries.providers';
import { JwtService } from '@nestjs/jwt';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesProviders } from 'src/categories/categories.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BakeriesController],
  providers: [
    JwtService,
    CategoriesService,
    BakeriesService,
    ...bakeryProviders,
    ...categoriesProviders
  ]
})
export class BakeriesModule {}
