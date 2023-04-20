import { Controller, Post } from "@nestjs/common";
import { SellersService } from "./sellers.service";

@Controller('sellers')
export class SellersController {
    constructor(private sellersService: SellersService) {}

    
    @Post('create')
    async create() {
        console.log('log')
        return await this.sellersService.create()
    }
}