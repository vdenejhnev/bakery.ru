import { Controller, UseGuards } from "@nestjs/common";
import { AdminsService } from "./admins.service";

@Controller('admins')
export class AdminsController {
    constructor(private adminsService: AdminsService) {}


    // @UseGuards()
    // @Get('/me')
    // async getMe(@Req() req: any) {
    //     return await this.sellersService.getSellerById(Number(req.seller.id))
    // }
}