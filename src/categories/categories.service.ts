import { Inject, Injectable } from '@nestjs/common';
import { Category } from './categories.model';
import { CreateCategoryDTO } from './dto/create-category.dto';


@Injectable()
export class CategoriesService {
    constructor(@Inject('CATEGORIES_REPOSITORY') private categoryRepo: typeof Category) {}



    async create(dto: CreateCategoryDTO) {
        const category = await this.categoryRepo.create(dto);
        return category;
    }

    async getCategory(id: number) {
        const category = await this.categoryRepo.findOne({
            where: {
                id: id
            }
        });

        return category;
    }

    async getAllCategories() {
        const categories = await this.categoryRepo.findAll();
        return categories;
    }

    async getAllCategoriesForMenu(categoriesId: any) {
        return await this.categoryRepo.findAll({
            where: {
                id: categoriesId
            }
        })
    }

    async delete(id: number) {
        const products = await this.categoryRepo.destroy({
            where: {
                id: id
            }
        });
        return products;
    }

}
