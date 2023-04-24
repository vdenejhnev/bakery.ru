import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bakery } from './models/bakeries.model';
import { CreateBakeryDTO } from './dto/create-bakery.dto';

@Injectable()
export class BakeriesService {
    constructor(@Inject('BAKERIES_REPOSITORY') private bakeryRepo: typeof Bakery) {}

    async create(dto: CreateBakeryDTO) {
        const bakery = await this.bakeryRepo.create(dto);
        return bakery;
    }

    async getAllBakeries(limit = 20, offset = 0) {
        return await this.bakeryRepo.findAll({ limit, offset });
    }

    async findById(id: number) {
        return await this.bakeryRepo.findByPk(id)
    }
/*
    async getProduct(id: number) {
        const product = await this.productRepo.findOne({
            where: {
                id: id
            }
        });
        return product;
    }

    async getAllProducts() {
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
    */
}
