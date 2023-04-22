import { Inject, Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { CreateProductDTO } from './dto/create-product.dto';
import { Op } from 'sequelize';


//Доделать поиск товара по названию

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCTS_REPOSITORY') private productRepo: typeof Product) {}

    async createProduct(dto: CreateProductDTO) {
        const product = await this.productRepo.create(dto);
        return product;
    }

    async getProduct(id: number) {
        const product = await this.productRepo.findOne({
            where: {
                id: id
            }
        });
        return product;
    }

    async getAllProducts(limit = 20, offset = 0 ) {
        const products = await this.productRepo.findAll({ limit, offset });
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

    async findByTitle(value: string) {
        const products = await this.productRepo.findAll({
            where: {
                [Op.or]: [
                    {
                        title: {
                            [Op.like]: '%' + value + '%'
                        }
                    },
                    {
                        title: {
                            [Op.like]: '%' + value.toUpperCase() + '%'
                        }
                    },
                    {
                        title: {
                            [Op.like]: '%' + value.toLowerCase() + '%'
                        }
                    },
                    {
                        title: {
                            [Op.like]: '%' + this.capitalize(value) + '%'
                        }
                    }
                ]
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

    capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
