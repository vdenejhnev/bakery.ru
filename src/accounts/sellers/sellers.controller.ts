import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { SellersService } from "./sellers.service";
import { AtSellerGuard } from "src/common/guards/seller/at.seller.guard";
import { AtAdminGuard } from "src/common/guards/admin/at.admin.guard";

@Controller('sellers')
export class SellersController {
    constructor(private sellersService: SellersService) {}


    @UseGuards(AtSellerGuard)
    @Get('/me')
    async getMe(@Req() req: any) {
        return await this.sellersService.getSellerById(Number(req.seller.id))
    }


    @UseGuards(AtAdminGuard)
    @Get('/getAll')
    async getAll() {
        return await this.sellersService.getAllSellers()
    }
}