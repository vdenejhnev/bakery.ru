import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { SellersService } from "src/accounts/sellers/sellers.service";
import generateSmsCode from "src/helpers/generateSmsCode";

@Injectable()
export class SellerService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly sellersService: SellersService
    ) { }

    // send sms code to phone number
    async sendSms(phone: string) {
        const exist_seller = await this.sellersService.getSellerByPhone(phone.toString())

        const sms_code = generateSmsCode()
        const timestamp = new Date().getTime()


        if (exist_seller) {
            await this.sellersService.update(exist_seller.id, {
                verificationCode: sms_code,
                expirateCodeAt: timestamp
            })
            return
            // step 1. update the current seller field -> activationCode = [sms_code, timestamp]

            // step 2. send sms code to phone number

            // step 3. return
        }

        await this.sellersService.create({
            phone,
            verificationCode: sms_code,
            expirateCodeAt: timestamp
        })

        // step 1. if there is no current user, then register a new one with empty fields and -> "isReg = false", "activationCode = [sms_code, timestamp]"

        // step 2. send sms code to phone number
    }

    // verification of sent SMS code
    async checkSms(phone: string, smsCode: number) {
        const exist_seller = await this.sellersService.getSellerByPhone(phone.toString())

        const now_timestamp = new Date().getTime()


        if (exist_seller) {

            if (
                Number(smsCode) === Number(exist_seller.verificationCode)
                && Math.floor((now_timestamp - Number(exist_seller.expirateCodeAt)) / (60 * 1000)) < 2
            ) {
                return await this.generateTokens(exist_seller.phone, exist_seller.id)
            }

        }


        throw new HttpException('Данный телефон не зарегистрирован', HttpStatus.BAD_REQUEST)

    }

    // account registration
    // async registration(dto: any) {
    //     const exist_seller = await this.sellersService.getSellerByPhone(dto.phone)

    //     if (!exist_seller.isReg) {

    //         // step 1. availability of data for registration and updating in the database

    //         // step 2. generate tokens and send

    //     }

    //     throw new HttpException('Вы уже зарегистрированы', HttpStatus.BAD_REQUEST)
    // }




    // check access token for expiresIn
    async verifyAt(at: string) {
        return await this.jwtService.verify(at, {
            secret: process.env.PRIVATE_KEY_AT_SELLER
        })
    }

    // refresh tokens - access_token, refresh_token
    async refreshTokens(phone: string, id: number): Promise<any> {
        return await this.generateTokens(phone, id)
    }

    // generate tokens - access_token, refresh_token
    async generateTokens(phone: string, id: number): Promise<{
        access_token: string,
        refresh_token: string
    }> {
        const payload = { phone, id }

        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.PRIVATE_KEY_AT_SELLER,
                expiresIn: '15m'
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.PRIVATE_KEY_RT_SELLER,
                expiresIn: '15d'
            })
        ])

        return {
            access_token: at,
            refresh_token: rt
        }
    }
}