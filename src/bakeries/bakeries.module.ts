import { Module } from '@nestjs/common';
import { BakeriesController } from './bakeries.controller';
import { BakeriesService } from './bakeries.service';
import { DatabaseModule } from 'src/database.module';
import { bakeryProviders } from './bakeries.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BakeriesController],
  providers: [
    BakeriesService,
    ...bakeryProviders
  ]
})
export class BakeriesModule {}
