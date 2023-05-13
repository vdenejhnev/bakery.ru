import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { feedbacksProviders } from './feedbacks.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [FeedbacksController],
  providers: [
    FeedbacksService,
    ...feedbacksProviders
  ]
})
export class FeedbacksModule {}
