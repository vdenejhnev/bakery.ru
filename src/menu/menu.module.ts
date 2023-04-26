import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";
import menuProviders from "./menu.providers";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [DatabaseModule],
    controllers: [MenuController],
    providers: [
      JwtService,

      MenuService,
      ...menuProviders
    ]
  })
  export class MenuModule {}