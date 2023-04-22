import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminsService } from "src/accounts/admins/admins.service";

@Injectable()
export class AdminService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly adminsService: AdminsService
    ) { }
}