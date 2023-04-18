import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/accounts/users/users.module';
import { SellerService } from './accounts/seller.service';
import { SellersService } from 'src/accounts/sellers/sellers.service';

@Module({
  imports: [
    UsersModule, 
    JwtModule.register({})
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    SellersService,
    SellerService
  ]
})
export class AuthModule {}
