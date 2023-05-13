import { Module } from "@nestjs/common";
import { FilesService } from "./files.service";
import { FilesController } from "./files.controller";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports: [],
    controllers: [FilesController],
    providers: [FilesService, JwtService]
})
export class FilesModule {}