import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BakeriesService } from './bakeries.service';
import { Bakery } from './bakeries.model';
import { CreateBakeryDTO } from './dto/create-bakery.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Пекарни')
@Controller('bakeries')
export class BakeriesController {

    constructor(private bakeriesService: BakeriesService) {}

    @ApiOperation({summary: "Создание пекарни"})
    @ApiResponse({status: 200, type: Bakery})
    @Post() 
    create(@Body() bakerydto: CreateBakeryDTO) {
        return this.bakeriesService.create(bakerydto);
    }

    @Get('/getAll')
    getAll() {
        return this.bakeriesService.getAllBakeries();
    }
}
