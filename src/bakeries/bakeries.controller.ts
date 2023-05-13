import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BakeriesService } from './bakeries.service';
import { Bakery } from './models/bakeries.model';
import { CreateBakeryDTO } from './dto/create-bakery.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AtSellerGuard } from 'src/common/guards/seller/at.seller.guard';

@ApiTags('Пекарни')
@Controller('bakeries')
export class BakeriesController {

    constructor(private bakeriesService: BakeriesService) {}

    @ApiOperation({summary: "Создание пекарни"})
    @ApiResponse({status: 200, type: Bakery})
    @Post() 
    async create(@Body() bakeryDto: any) {
        return await this.bakeriesService.create({
            ...bakeryDto,
            phone: '79123456789',
            email: 'test@mailru',
            address: 'pushkina'
        });
    }

    @Get('getRequests')
    async getRequest() {
        return await this.bakeriesService.getRequestsForBakery()
    }

    @Post('request')
    async createApplicationForBakery(@Body() body: any) {
        return await this.bakeriesService.createApplicationForBakery(body)
    }


    @Get('getAll/')
    async getAll() {
        return await this.bakeriesService.getAllBakeries();
    }

    // menu
    
    @Get('menu/:id')
    async getMenu(@Param() param: any) {
        return await this.bakeriesService.getMenu(param.id);
    }

    @UseGuards(AtSellerGuard)
    @Post('menu')
    async addCategoryToMenu(@Body() body: any) {
        return await this.bakeriesService.addCategoryToMenu(body.bakeryId, body.categoryId);
    }
    
    @UseGuards(AtSellerGuard)
    @Post('menu/remove')
    async removeCategoryToMenu(@Body() body: any) {
        return await this.bakeriesService.removeCategoryToMenu(body.bakeryId, body.categoryId);
    }

    //
    @Get(':id')
    async getOne(@Param() param: any) {
        return await this.bakeriesService.findById(Number(param?.id))
    }
}
