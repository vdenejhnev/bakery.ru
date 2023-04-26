import { Inject, Injectable } from "@nestjs/common";
import { Menu } from "./models/menu.model";

@Injectable()
export class MenuService {
    constructor(@Inject('MENU_REPOSITORY') private menuRepo: typeof Menu) {}


    async create(bakeryId: number) {
        return await this.menuRepo.create({
            bakeryId
        })
    }
}