import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }

    @Post() 
    create(@Body() productdto: CreateProductDTO) {
        return this.productsService.createProduct(productdto);
    }

    @Get()
    getAll() {
        return this.productsService.getAllProduct();
    }

}
