import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
// models
import { Seller } from "./sellers.model";
//
import { SellersController } from "./sellers.controller";
import { SellersService } from "./sellers.service";

@Module({
  imports: [SequelizeModule.forFeature([Seller])],
  controllers: [SellersController],
  providers: [SellersService]
})
export class SellersModule { }