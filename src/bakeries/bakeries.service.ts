import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bakery } from './bakeries.model';

@Injectable()
export class BakeriesService {
    constructor(@InjectModel(Bakery) private productRepo: typeof Bakery) {}
}
