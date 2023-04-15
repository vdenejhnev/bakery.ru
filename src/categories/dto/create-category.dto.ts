import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDTO  {
    @ApiProperty({example: 'Кондитерские изделия', description: "Название категории"})
    readonly title: string;

    @ApiProperty({example: '/img/category_img.png', description: "Изображение категории"})
    readonly image: string;

    @ApiProperty({example: 'Самые вкусные кондитерские изделия', description: "Описание категории"})
    readonly description: string;
}