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
    async create(@Body() bakeryDto: CreateBakeryDTO) {
        return await this.bakeriesService.create(bakeryDto);
    }

    @Post()
    async createApplicationForBakery(@Body() dto: any) {

    }


    @Get('/getAll')
    getAll() {
        return this.bakeriesService.getAllBakeries();
    }
}
