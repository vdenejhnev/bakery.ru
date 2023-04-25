import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BakeriesService } from './bakeries.service';
import { Bakery } from './models/bakeries.model';
import { CreateBakeryDTO } from './dto/create-bakery.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
        return this.bakeriesService.getRequestsForBakery()
    }

    @Post('request')
    async createApplicationForBakery(@Body() body: any) {
        return this.bakeriesService.createApplicationForBakery(body)
    }


    @Get('/getAll')
    getAll() {
        return this.bakeriesService.getAllBakeries();
    }


    @Get(':id')
    async getOne(@Param() param: any) {
        console.log(param)
        return await this.bakeriesService.findById(Number(param?.id))
    }
}
