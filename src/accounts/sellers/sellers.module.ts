import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
// models
import { Seller } from "./models/sellers.model";
//
import { SellersController } from "./sellers.controller";
import { SellersService } from "./sellers.service";
import { DatabaseModule } from "src/database.module";
import { sellersProviders } from "./sellers.providers";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [DatabaseModule],
  controllers: [SellersController],
  providers: [
    JwtService,
    SellersService, 
    ...sellersProviders
  ],
  exports: [SellersService]
})
export class SellersModule { }