import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { SellersService } from "./sellers.service";
import { AtSellerGuard } from "src/common/guards/at.seller.guard";

@Controller('sellers')
export class SellersController {
    constructor(private sellersService: SellersService) {}


    @UseGuards(AtSellerGuard)
    @Get('/me')
    async getMe(@Req() req: any) {
        return await this.sellersService.getSellerById(Number(req.seller.id))
    }
}