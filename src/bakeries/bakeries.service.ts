import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bakery } from './models/bakeries.model';
import { CreateBakeryDTO } from './dto/create-bakery.dto';
import { ApplicationsForBakeries } from './models/applications-for-bakeries.model';
import { types } from 'util';
import { CategoriesService } from 'src/categories/categories.service';

@Injectable()
export class BakeriesService {
    constructor(
        @Inject('BAKERIES_REPOSITORY') private bakeryRepo: typeof Bakery,
        @Inject('APPLICATIONS-FOR-BAKERIES_REPOSITORY') private bakeryReq: typeof ApplicationsForBakeries,
        private categoriesService: CategoriesService
    ) { }

    async createApplicationForBakery(dto: any) {
        return await this.bakeryReq.create(dto)
    }

    async getRequestsForBakery(limit = 20, offset = 0) {
        return await this.bakeryReq.findAll({ limit, offset })
    }

    async create(dto: any) {
        const bakery = await this.bakeryRepo.create(dto);
    }

    async getAllBakeries(limit = 20, offset = 0) {
        return await this.bakeryRepo.findAll({ limit, offset });
    }

    async getMenu(id: any) {
        const bakery = await this.bakeryRepo.findOne({
            where: {
                id
            }
        })

        return await this.categoriesService.getAllCategoriesForMenu(bakery.menu)
    }

    async addCategoryToMenu(bakeryId: any, categoryId: any) {
        const bakery = await this.bakeryRepo.findByPk(bakeryId)

        if (!Object.values(bakery.menu).some((c: any) => c === categoryId)) {
            await this.bakeryRepo.update(
                {
                    menu: bakery.menu?.length > 0 ? [...Object.values(bakery.menu), categoryId] : [categoryId]
                },
                {
                    where: {
                        id: bakeryId
                    }
                })
        }
    }

    async removeCategoryToMenu(bakeryId: any, categoryId: any) {
        const bakery = await this.bakeryRepo.findByPk(bakeryId)

        await this.bakeryRepo.update(
            {
                menu: Object.values(bakery.menu).filter((categ: any) => categ !== categoryId)
            },
            {
                where: {
                    id: bakeryId
                }
            })
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
