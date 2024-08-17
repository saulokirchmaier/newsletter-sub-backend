import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subscribed } from './entities/subscribed.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscribedService {
  constructor(
    @InjectRepository(Subscribed)
    private readonly subscribedRepository: Repository<Subscribed>,
  ) {}

  async create(createSubscribe: CreateSubscribeDto): Promise<Subscribed> {
    try {
      const subscriber: Subscribed = new Subscribed();

      subscriber.name = createSubscribe.name;
      subscriber.email = createSubscribe.email;
      subscriber.phone = createSubscribe.phone;
      subscriber.company = createSubscribe.company;
      subscriber.createdAt = new Date();

      const subscribed = await this.subscribedRepository.save(subscriber);

      return subscribed;
    } catch (error) {
      throw new BadRequestException('Please repeat operation');
    }
  }

  async findAll(): Promise<Array<Subscribed>> {
    try {
      return await this.subscribedRepository.find();
    } catch (error) {
      throw new BadRequestException('Please repeat operation');
    }
  }
}
