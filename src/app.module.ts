import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { AuthController } from './auth/auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { Product } from './products/products.model';


@Module({
  imports: [
    UserModule, 
    AuthModule,
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
      models: [Product],
      autoLoadModels: true,
    }),
    ProductsModule,
  ],
  controllers: [UserController, AuthController],
  providers: []
})
export class AppModule {}
