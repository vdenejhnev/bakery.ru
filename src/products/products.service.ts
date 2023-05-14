import { Inject, Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { CreateProductDTO } from './dto/create-product.dto';
import { Op } from 'sequelize';


//Доделать поиск товара по названию

@Injectable()
export class ProductsService {
    constructor(@Inject('PRODUCTS_REPOSITORY') private productRepo: typeof Product) {}

    async createProduct(dto: CreateProductDTO) {
        return await this.productRepo.create(dto);
    }

    async getProduct(id: number) {
        const product = await this.productRepo.findOne({
            where: {
                id: id
            }
        });
        return product;
    }

    async getAllProducts(categoryId = null, limit = 20, offset = 0) {
        return await this.productRepo.findAll({ 
            
            limit, 
            offset 
        });
    }

    async findByBakeryAndCategory(bakeryId: number, categoryId: number) {
        return await this.productRepo.findAll({
            where: {
                bakeryId,
                categoryId
            }
        });
    }

    async findByCategory(category: number, limit = 20, offset = 0) {
        const products = await this.productRepo.findAll({
            where: {
                category: category
            },
            limit,
            offset,
        });
        return products;
    }

    async findByBakery(bakery: number, limit = 20, offset = 0) {
        const products = await this.productRepo.findAll({
            where: {
                bakeryId: bakery
            },
            limit, 
            offset,
            include: ['category']
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
