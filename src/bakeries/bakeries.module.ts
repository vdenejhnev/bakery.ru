import { Module } from '@nestjs/common';
import { BakeriesController } from './bakeries.controller';
import { BakeriesService } from './bakeries.service';
import { DatabaseModule } from 'src/database.module';
import { bakeryProviders } from './bakeries.providers';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule],
  controllers: [BakeriesController],
  providers: [
    JwtService,
    BakeriesService,
    ...bakeryProviders
  ]
})
export class BakeriesModule {}
