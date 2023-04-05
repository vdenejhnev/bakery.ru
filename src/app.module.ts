import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { Product } from './products/products.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';


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
      models: [Product, Role, User],
      autoLoadModels: true,
    }),
    ProductsModule,
    RolesModule,
    UsersModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
