import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SellerService } from './accounts/seller.service';
import { SellersModule } from 'src/accounts/sellers/sellers.module';
import { SellersService } from 'src/accounts/sellers/sellers.service';
import { sellersProviders } from 'src/accounts/sellers/sellers.providers';
import { DatabaseModule } from 'src/database.module';

@Module({
  imports: [
    SellersModule,

    DatabaseModule,
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [
    SellersService,
    SellerService,
    ...sellersProviders
  ]
})
export class AuthModule {}
