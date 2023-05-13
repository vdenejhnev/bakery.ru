import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { adminsProviders } from "./admins.providers";
import { JwtService } from "@nestjs/jwt";
import { AdminsController } from "./admins.controller";
import { AdminsService } from "./admins.service";


@Module({
  imports: [DatabaseModule],
  controllers: [AdminsController],
  providers: [
    JwtService, 
    AdminsService,
    ...adminsProviders
  ],
})
export class AdminsModule { }