import { Inject, Injectable } from "@nestjs/common";
import { Admin } from "./admins.model";

@Injectable()
export class AdminsService {
    constructor(
        @Inject('ADMINS_REPOSITORY') private adminRepo: typeof Admin,
    ) { }
}