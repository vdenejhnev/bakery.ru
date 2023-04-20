import { Inject, Injectable } from "@nestjs/common";
import { Seller } from "./sellers.model";

@Injectable()
export class SellersService {
    constructor (
        @Inject('CATS_REPOSITORY') private sellerRepo: typeof Seller,
    ) {}

    async getSellerByPhone(phone: number) {
        return await this.sellerRepo.findOne({ where: { phone }, include: { all: true } })
    }

    async create() {
        return await this.sellerRepo.create({})
    }
}