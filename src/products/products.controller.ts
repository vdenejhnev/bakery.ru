import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

    @ApiOperation({summary: "Вывод продукта по ID"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/get/:id')
    get(@Param('id') id: number) {
        return this.productsService.getProduct(id);
    }

    @ApiOperation({summary: "Вывод всех продуктов"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/getAll')
    getAll() {
        return this.productsService.getAllProduct();
    }

    @ApiOperation({summary: "Вывод всех продуктов указанной категории"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/getByCategory/:category')
    findByCategory(@Param('category') category: number) {
        return this.productsService.findByCategory(category);
    }

    @ApiOperation({summary: "Вывод всех продуктов указанной пекарни"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('/getByBakery/:bakery')
    findByBakery(@Param('bakery') bakery: number) {
        return this.productsService.findByBakery(bakery);
    }

    @ApiOperation({summary: "Удалить продукт по ID"})
    @ApiResponse({status: 200})
    @Delete('/delete/:id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }

}

