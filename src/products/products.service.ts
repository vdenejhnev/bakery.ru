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

    async getProduct(id: number) {
        const product = await this.productRepo.findAll({
            where: {
                id: id
            }
        });
        return product;
    }

    async getAllProduct() {
        const products = await this.productRepo.findAll();
        return products;
    }

    async findByCategory(category: number) {
        const products = await this.productRepo.findAll({
            where: {
                category: category
            }
        });
        return products;
    }

    async findByBakery(bakery: number) {
        const products = await this.productRepo.findAll({
            where: {
                bakery: bakery
            }
        });
        return products;
    }

    async delete(id: number) {
        const products = await this.productRepo.destroy({
            where: {
                id: id
            }
        });
        return products;
    }
}
