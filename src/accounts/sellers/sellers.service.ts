import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
//
import { Seller } from "./sellers.model";

@Injectable()
export class SellersService {
    constructor (
        @InjectModel(Seller) private sellerRepo: typeof Seller,
    ) {}

    async getSellerByPhone(phone: number) {
        return await this.sellerRepo.findOne({ where: { phone }, include: { all: true } })
    }
}