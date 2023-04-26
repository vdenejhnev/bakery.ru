import { Inject, Injectable } from "@nestjs/common";
import { Seller } from "./models/sellers.model";
import { Bakery } from "src/bakeries/models/bakeries.model";
import { RequestMoney } from "./models/request-money.model";

@Injectable()
export class SellersService {
    constructor(
        @Inject('SELLERS_REPOSITORY') private sellerRepo: typeof Seller,
        @Inject('REQUEST-MONEY_REPOSITORY') private requestMoneyRepo: typeof RequestMoney,
    ) { }

    
    async getAllSellers(limit = 20, offset = 0) {
        return await this.sellerRepo.findAll({ limit, offset })
    }

    async withdrawal(id: number, dto: any) {
        const exist_seller = await this.sellerRepo.findByPk(id)

        if (exist_seller) {
            return await this.requestMoneyRepo.create({
                sellerId: id,
                ...dto
            })
        }
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

    async getSellerByPhone(phone: string) {
        return await this.sellerRepo.findOne({ where: { phone } })
    }

    async create(data: any) {
        return await this.sellerRepo.create(data)
    }

    async update(id: number, data: any) {
        return await this.sellerRepo.update(data, {
            where: {
                id
            }
        })
    }
    
}