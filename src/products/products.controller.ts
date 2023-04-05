import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './products.model';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @ApiOperation({summary: "Создание продукта"})
    @ApiResponse({status: 200, type: Product})
    @Post() 
    create(@Body() productdto: CreateProductDTO) {
        return this.productsService.createProduct(productdto);
    }

    @ApiOperation({summary: "Вывод всех продуктов"})
    @ApiResponse({status: 200, type: [Product]})
    @Get()
    getAll() {
        return this.productsService.getAllProduct();
    }

}

