import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
// models
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { Product } from './products/products.model';
import { Category } from './categories/categories.model';
import { Seller } from './accounts/sellers/sellers.model';
import { Bakery } from './bakeries/bakeries.model';
import { User } from './accounts/users/users.model';
// modules
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { BakeriesModule } from './bakeries/bakeries.module';
import { UsersModule } from './accounts/users/users.module';


@Module({
  imports: [
    ConfigModule.forRoot( {
        envFilePath: `.${process.env.NODE_ENV}`
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [
        Product, 
        Category, 
        Bakery, 
        Role, 
        User, 
        UserRoles,
        Seller
      ],
      autoLoadModels: true,
    }),
    ProductsModule,
    RolesModule,
    UsersModule,
    AuthModule,
    CategoriesModule,
    BakeriesModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
