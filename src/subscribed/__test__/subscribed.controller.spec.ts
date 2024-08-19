import { Test, TestingModule } from '@nestjs/testing';
import { SubscribedController } from '../subscribed.controller';
import { SubscribedService } from '../subscribed.service';
import { Subscribed } from '../entities/subscribed.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscribeDto } from '../dto/create-subscribe.dto';

describe('SubscribedController', () => {
  let controller: SubscribedController;
  let service: SubscribedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubscribedController],
      providers: [
        SubscribedService,
        {
          provide: getRepositoryToken(Subscribed),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<SubscribedService>(SubscribedService);
    controller = module.get<SubscribedController>(SubscribedController);
  });

  describe('findAll', () => {
    it('should return an array of subscribers', async () => {
      const result: Subscribed[] = [
        {
          id: 1,
          name: 'Name 1',
          company: 'Company 1',
          phone: '33999999999',
          email: 'email1@email.com',
          createdAt: new Date(),
        },
        {
          id: 2,
          name: 'Name 2',
          company: 'Company 2',
          phone: '33999999998',
          email: 'email2@email.com',
          createdAt: new Date(),
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('should create and return a subscribed', async () => {
      const createSubscribedDto: CreateSubscribeDto = {
        name: 'Name',
        company: 'Company',
        phone: '33999999999',
        email: 'email@email.com',
      };

      const createdSubscribed: Subscribed = {
        id: 1,
        ...createSubscribedDto,
        createdAt: new Date(),
      };

      jest
        .spyOn(service, 'create')
        .mockImplementation(async () => createdSubscribed);

      expect(await controller.create(createSubscribedDto)).toBe(
        createdSubscribed,
      );
      expect(service.create).toHaveBeenCalledWith(createSubscribedDto);
    });
  });
});
