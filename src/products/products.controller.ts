import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './products.model';
import { AtSellerGuard } from 'src/common/guards/seller/at.seller.guard';

@ApiTags('Продукты')
@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {}

    @ApiOperation({summary: "Создание продукта"})
    @ApiResponse({status: 200, type: Product})
    @UseGuards(AtSellerGuard)
    @Post() 
    create(@Body() productdto: CreateProductDTO) {
        return this.productsService.createProduct(productdto);
    }

    @ApiOperation({summary: "Вывод продукта по ID"})
    @ApiResponse({status: 200, type: Product})
    @Get('get/:id')
    get(@Param('id') id: number) {
        return this.productsService.getProduct(id);
    }

    @ApiOperation({summary: "Вывод всех продуктов"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('getAll')
    getAll(@Query() query: any) {
        return this.productsService.getAllProducts(query.categoryId, query.limit, query.offset);  
    }

   

    @ApiOperation({summary: "Вывод всех продуктов указанной категории"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('getByCategory/:category')
    findByCategory(@Param('category') category: number, @Query() query: any) {
        return this.productsService.findByCategory(category, query.limit, query.offset);
    }

    @ApiOperation({summary: "Вывод всех продуктов указанной пекарни"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('getByBakery/:bakeryId')
    findByBakery(@Param('bakeryId') bakeryId: number, @Query() query: any) {
        return this.productsService.findByBakery(bakeryId, query.limit, query.offset);
    }

    @Get('getByBakeryAndCategory/:bakeryId/:categoryId')
    findByBakeryAndCategory(@Param() param: any) {
        return this.productsService.findByBakeryAndCategory(Number(param?.bakeryId), Number(param?.categoryId));
    }

    @ApiOperation({summary: "Вывод всех продуктов по указанному названию"})
    @ApiResponse({status: 200, type: [Product]})
    @Get('getByTitle/:value')
    findByTitle(@Param('value') value: string) {
        return this.productsService.findByTitle(value);
    }

    @ApiOperation({summary: "Удалить продукт по ID"})
    @ApiResponse({status: 200})
    @UseGuards(AtSellerGuard)
    @Delete('delete/:id')
    delete(@Param('id') id: number) {
        return this.productsService.delete(id);
    }

}

