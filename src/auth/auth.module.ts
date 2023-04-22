import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SellerService } from './accounts/seller.service';
import { SellersModule } from 'src/accounts/sellers/sellers.module';
import { SellersService } from 'src/accounts/sellers/sellers.service';
import { sellersProviders } from 'src/accounts/sellers/sellers.providers';
import { DatabaseModule } from 'src/database.module';
import { AdminsModule } from 'src/accounts/admins/admins.module';
import { AdminsService } from 'src/accounts/admins/admins.service';
import { AdminService } from './accounts/admin.seller';
import { adminsProviders } from 'src/accounts/admins/admins.providers';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [
    SellersService,
    SellerService,
    ...sellersProviders,

    AdminsService,
    AdminService,
    ...adminsProviders
  ]
})
export class AuthModule {}
