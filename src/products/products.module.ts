import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './products.model';
import { DatabaseModule } from 'src/database.module';
import { productsProviders } from './products.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    JwtService,

    ProductsService,
    ...productsProviders
  ]
})
export class ProductsModule {}
