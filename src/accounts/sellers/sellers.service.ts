import { Inject, Injectable } from "@nestjs/common";
import { Seller } from "./sellers.model";
import { Bakery } from "src/bakeries/bakeries.model";

@Injectable()
export class SellersService {
    constructor(
        @Inject('SELLERS_REPOSITORY') private sellerRepo: typeof Seller,
    ) { }

    
    async getAllSellers(limit = 20, offset = 0) {
        return await this.sellerRepo.findAll({ limit, offset })
    }


    async getSellerById(id: number) {
        return await this.sellerRepo.findByPk(id, {
            include: [
                {
                    model: Bakery,
                    attributes: ['id', 'title']
                }
            ]
        })
    }

    async getSellerByPhone(phone: number) {
        return await this.sellerRepo.findOne({ where: { phone }, include: { all: true } })
    }

    async create(data: any) {
        return await this.sellerRepo.create(data)
    }
}