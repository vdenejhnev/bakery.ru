import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { AtAdminGuard } from "src/common/guards/admin/at.admin.guard";

@Controller('admins')
export class AdminsController {
    constructor(private adminsService: AdminsService) {}


    @UseGuards(AtAdminGuard)
    @Get('/me')
    async getMe(@Req() req: any) {
        return await this.adminsService.getSellerById(Number(req.admin.id))
    }
}