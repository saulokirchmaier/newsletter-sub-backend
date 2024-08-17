import { Module } from '@nestjs/common';
import { SubscribedService } from './subscribed.service';
import { SubscribedController } from './subscribed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscribed } from './entities/subscribed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subscribed])],
  controllers: [SubscribedController],
  providers: [SubscribedService],
})
export class SubscribedModule {}
