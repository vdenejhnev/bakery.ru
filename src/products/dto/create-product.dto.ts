import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO  {
    @ApiProperty({example: 'Хлеб', description: "Название продукта"})
    readonly title: string;

    @ApiProperty({example: '100.0', description: "Стоимость единицы продукта"})
    readonly price: number;
}