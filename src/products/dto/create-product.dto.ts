import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO  {
    @ApiProperty({example: 'Хлеб', description: "Название продукта"})
    readonly title: string;

    @ApiProperty({example: '100.0', description: "Стоимость единицы продукта"})
    readonly price: number;

    @ApiProperty({example: '1', description: "ID категории"})
    readonly category: number;

    @ApiProperty({example: '5', description: "ID пекарни"})
    readonly bakery: number;

    @ApiProperty({example: '/img/product_img.png', description: "Изображение продукта"})
    readonly image: string;

    @ApiProperty({example: 'Очень вкусный багет с изюмом', description: "Описание продукта"})
    readonly description: string;
}