import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// modules
import { AuthModule } from './auth/auth.module';
import { BakeriesModule } from './bakeries/bakeries.module';
import { SellersModule } from './accounts/sellers/sellers.module';


@Module({
  imports: [
    ConfigModule.forRoot( {
        envFilePath: `.${process.env.NODE_ENV}`
    }),
    AuthModule,
    BakeriesModule,
    SellersModule
  ],
  
  controllers: [],
  providers: []
})
export class AppModule {}
