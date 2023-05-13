import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { AuthService } from './auth.service';
import { timeStamp } from 'console';
import { SellerService } from './accounts/seller.service';
import { RtSellerGuard } from 'src/common/guards/seller/rt.seller.guard';
import { CreateUserDTO } from 'src/accounts/users/dto/create-user.dto';
import { UserService } from './accounts/user.seller';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(
        private readonly sellerService: SellerService,
        private readonly userService: UserService,
    ) { }

    // endpoints for seller
    @Post('seller/get-sms')
    async sendSellerSms(@Body() body: any) {
        return await this.sellerService.sendSms(body.phone)
    }

    @Post('seller/check-sms')
    async checkSellerSms(@Body() body: any) {
        return await this.sellerService.checkSms(body.phone, body.code)
    }

    
    @UseGuards(RtSellerGuard)
    @Get('seller/refresh')
    async refreshSeller(@Req() req: any) {
        return await this.sellerService.refreshTokens(req.seller.phone, Number(req.seller.id))
    }



  // endpoints for user
  @Post('user/get-sms')
  async sendUserSms(@Body() body: any) {
      return await this.sellerService.sendSms(body.phone)
  }

  @Post('user/check-sms')
  async checkUserSms(@Body() body: any) {
      return await this.sellerService.checkSms(body.phone, body.code)
  }

  @Post('user/registration')
  async userReg(@Body() body: any) {
    //   return await this.sellerService.registration(body)
  }




}
