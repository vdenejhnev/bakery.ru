import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FilesService } from "./files.service";
import { AuthUserGuard } from "src/common/guards/user/auth.user.guard";
import { AtSellerGuard } from "src/common/guards/seller/at.seller.guard";
import { AtAdminGuard } from "src/common/guards/admin/at.admin.guard";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('files')
export class FilesController {
    constructor(
        private filesService: FilesService,
    ) { }

    // @UseGuards(AuthUserGuard || AtSellerGuard || AtAdminGuard)
    @Post('upload/image')
    @UseInterceptors(FileInterceptor('file'))
    async uploadImage(@UploadedFile(
        new ParseFilePipe({
            validators: [
                new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
                new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
            ],
        }),
    ) file: any) {
        console.log('log')
        return await this.filesService.writeImage(file)
    }
    


}