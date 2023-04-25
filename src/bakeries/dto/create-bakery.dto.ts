import { ApiProperty } from "@nestjs/swagger";

export class CreateBakeryDTO  {
    @ApiProperty({example: 'Лучшая в городе пекарня', description: "Название пекарни"})
    readonly title: string;

    @ApiProperty({example: 'Наша пекарня готовит самые вкусные чизкейки с брусникой', description: "Описание пекарни"})
    readonly description: string;

    readonly sellerId: string;
}