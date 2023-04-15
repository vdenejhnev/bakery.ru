import { Module } from '@nestjs/common';
import { BakeriesController } from './bakeries.controller';
import { BakeriesService } from './bakeries.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bakery } from './bakeries.model';

@Module({
  imports: [SequelizeModule.forFeature([Bakery])],
  controllers: [BakeriesController],
  providers: [BakeriesService]
})
export class BakeriesModule {}
