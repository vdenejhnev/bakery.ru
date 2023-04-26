import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { MenuService } from "./menu.service";
import { AtSellerGuard } from "src/common/guards/seller/at.seller.guard";

@Controller('menu')
export class MenuController {

    constructor(private menuService: MenuService) {}

    @UseGuards(AtSellerGuard)
    @Post()
    async create(@Body() body: any) {
        return await this.menuService.create(Number(body.bakeryId))
    }
}