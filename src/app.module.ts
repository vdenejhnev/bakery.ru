import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// modules
import { AuthModule } from './auth/auth.module';
import { BakeriesModule } from './bakeries/bakeries.module';
import { SellersModule } from './accounts/sellers/sellers.module';
import { AdminsModule } from './accounts/admins/admins.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './accounts/users/users.module';
import { ProductsModule } from './products/products.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: `.${process.env.NODE_ENV}`
    }),
    AuthModule,
    
    UsersModule,
    SellersModule,
    AdminsModule,

    ProductsModule,
    CategoriesModule,
    BakeriesModule,

    FilesModule,
  ],
  
  controllers: [],
  providers: []
})
export class AppModule {}
