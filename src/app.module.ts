import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
// models
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { Seller } from './accounts/sellers/sellers.model';
import { Bakery } from './bakeries/bakeries.model';
import { User } from './accounts/users/users.model';
// modules
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { BakeriesModule } from './bakeries/bakeries.module';
import { UsersModule } from './accounts/users/users.module';
import { SellersModule } from './accounts/sellers/sellers.module';


@Module({
  imports: [
    ConfigModule.forRoot( {
        envFilePath: `.${process.env.NODE_ENV}`
    })
  ],
  controllers: [],
  providers: [
    SellersModule
  ]
})
export class AppModule {}
