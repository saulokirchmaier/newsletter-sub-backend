import { Test, TestingModule } from '@nestjs/testing';
import { SubscribedService } from '../subscribed.service';
import { Subscribed } from '../entities/subscribed.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubscribeDto } from '../dto/create-subscribe.dto';

describe('SubscribedService', () => {
  let service: SubscribedService;
  let repository: Repository<Subscribed>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubscribedService,
        {
          provide: getRepositoryToken(Subscribed),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SubscribedService>(SubscribedService);
    repository = module.get<Repository<Subscribed>>(
      getRepositoryToken(Subscribed),
    );
  });

  describe('create', () => {
    it('should create and return a subscribed', async () => {
      const mockDate = new Date(2024, 7, 18);
      const originalDate = global.Date;

      global.Date = jest.fn(() => mockDate) as unknown as typeof Date;

      const createSubscribeDto: CreateSubscribeDto = {
        name: 'Name',
        company: 'Company',
        phone: '33999999999',
        email: 'email@email.com',
      };

      const createdSubscribed: Subscribed = {
        id: 2,
        ...createSubscribeDto,
        createdAt: mockDate,
      };

      jest.spyOn(repository, 'save').mockResolvedValue(createdSubscribed);

      const result = await service.create(createSubscribeDto);

      global.Date = originalDate;

      expect(result).toMatchObject({
        company: 'Company',
        email: 'email@email.com',
        name: 'Name',
        phone: '33999999999',
        id: 2,
        createdAt: mockDate,
      });
      expect(result.createdAt).toBe(mockDate);

      expect(result.createdAt).toBeInstanceOf(Date);

      expect(repository.save).toHaveBeenCalled();
      expect(repository.save).toHaveBeenCalledWith(
        expect.objectContaining({
          ...createSubscribeDto,
          createdAt: mockDate,
        }),
      );
    });
  });

  describe('findAll', () => {
    it('should return an array of subscribed', async () => {
      const mockSubscribedList: Subscribed[] = [
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

      jest.spyOn(repository, 'find').mockResolvedValue(mockSubscribedList);

      const result = await service.findAll();

      expect(result).toEqual(mockSubscribedList);
      expect(repository.find).toHaveBeenCalled();
    });
  });
});
