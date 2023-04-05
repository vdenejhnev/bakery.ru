import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO  {
    @ApiProperty({example: 'Вячеслав', description: "Имя пользователя"})
    readonly name: string;

    @ApiProperty({example: 'М', description: "Пол пользователя"})
    readonly gender: string;

    @ApiProperty({example: '2000-01-01', description: "Дата рождения пользователя"})
    birthday: Date;

    @ApiProperty({example: '+71234567890', description: "Телефон пользователя"})
    phone: string;
}