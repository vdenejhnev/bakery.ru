import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { JwtService } from '@nestjs/jwt';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [FeedbacksController],
  providers: [
    FeedbacksService
  ]
})
export class FeedbacksModule {}
