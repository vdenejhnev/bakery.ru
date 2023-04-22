import { Body, Controller, Post, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './categories.model';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { CategoriesService } from './categories.service';
import { AtAdminGuard } from 'src/common/guards/admin/at.admin.guard';

@ApiTags('Категории')
@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @ApiOperation({summary: "Создание категории"})
    @ApiResponse({status: 200, type: Category})
    @UseGuards(AtAdminGuard)
    @Post() 
    create(@Body() categorydto: CreateCategoryDTO) {
        return this.categoriesService.create(categorydto);
    }

    @ApiOperation({summary: "Вывод категории по ID"})
    @ApiResponse({status: 200, type: Category})
    @Get('/get/:id')
    get(@Param('id') id: number) {
        return this.categoriesService.getCategory(id);
    }

    @ApiOperation({summary: "Вывод всех категорий"})
    @ApiResponse({status: 200, type: [Category]})
    @Get('/getAll')
    getAll() {
        return this.categoriesService.getAllCategories();
    }

    @ApiOperation({summary: "Удалить продукт по ID"})
    @ApiResponse({status: 200})
    @UseGuards(AtAdminGuard)
    @Delete('/delete/:id')
    delete(@Param('id') id: number) {
        return this.categoriesService.delete(id);
    }

}

