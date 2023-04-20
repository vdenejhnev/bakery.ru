import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
// models
import { Seller } from "./sellers.model";
//
import { SellersController } from "./sellers.controller";
import { SellersService } from "./sellers.service";
import { DatabaseModule } from "src/database.module";
import { databaseProviders } from "src/database.providers";
import { sellersProviders } from "./sellers.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [SellersController],
  providers: [SellersService, ...sellersProviders]
})
export class SellersModule { }