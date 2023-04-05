import { Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepo: typeof Product) {}

    async createProduct(dto: CreateProductDTO) {
        const product = await this.productRepo.create(dto);
        return product;
    }

    async getAllProduct() {
        const products = await this.productRepo.findAll();
        return products;
    }
}
