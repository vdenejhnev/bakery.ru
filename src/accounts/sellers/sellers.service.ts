import { Inject, Injectable } from "@nestjs/common";
import { Seller } from "./sellers.model";
import { Bakery } from "src/bakeries/bakeries.model";

@Injectable()
export class SellersService {
    constructor (
        @Inject('SELLERS_REPOSITORY') private sellerRepo: typeof Seller,
        @Inject('BAKERIES_REPOSITORY') private bakeryRepo: typeof Bakery
    ) {}

    async getSellerByPhone(phone: number) {
        return await this.sellerRepo.findOne({ where: { phone }, include: { all: true } })
    }

    async create() {
        const user = await this.sellerRepo.create({
            phone: 79529964907,
            // activationCode: [22121, 21421521512]
            balance: 999
        })

        const bakery = await this.bakeryRepo.create({
            title: 'text',
            phone: '232',
            description: "33",
            address: "343",
            image: "343",
            email: 'email'
        })

        await user.$set('bakeries', bakery)

        const fin = await this.sellerRepo.findByPk(12, {include: Bakery})
        const finb = await this.bakeryRepo.findByPk(12)

        return {
            fin,
            finb
        }
    }
}