import { ApiProperty } from "@nestjs/swagger";

export class CreateBakeryDTO  {
    @ApiProperty({example: 'Лучшая в городе пекарня', description: "Название пекарни"})
    readonly title: string;

    @ApiProperty({example: '/img/bakery_img.png', description: "Лого пекарни"})
    readonly image: string;

    @ApiProperty({example: 'Наша пекарня готовит самые вкусные чизкейки с брусникой', description: "Описание пекарни"})
    readonly description: string;

    @ApiProperty({example: '+79123456789', description: "Телефон пекарни"})
    readonly phone: string;

    @ApiProperty({example: 'bakery1@mail.ru', description: "Email пекарни"})
    readonly email: string;

    @ApiProperty({example: 'г. Москва ул. Охотный ряд 1', description: "Адрес пекарни"})
    readonly address: string;

    @ApiProperty({example: '1', description: "ID владельца"})
    readonly owner: number;
}