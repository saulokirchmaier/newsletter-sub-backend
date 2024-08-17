import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubscribedService } from './subscribed.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';

@Controller('subscribe')
export class SubscribedController {
  constructor(private readonly subscribedService: SubscribedService) {}

  @Post()
  create(@Body() createSubscribe: CreateSubscribeDto) {
    return this.subscribedService.create(createSubscribe);
  }

  @Get()
  findAll() {
    return this.subscribedService.findAll();
  }
}
