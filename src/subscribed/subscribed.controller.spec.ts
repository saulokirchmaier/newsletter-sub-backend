import { Test, TestingModule } from '@nestjs/testing';
import { SubscribedController } from './subscribed.controller';
import { SubscribedService } from './subscribed.service';

describe('SubscribedController', () => {
  let controller: SubscribedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscribedController],
      providers: [SubscribedService],
    }).compile();

    controller = module.get<SubscribedController>(SubscribedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
