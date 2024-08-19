import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubscribedService } from './subscribed.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('subscribe')
@Controller('subscribe')
export class SubscribedController {
  constructor(private readonly subscribedService: SubscribedService) {}

  @ApiOperation({
    summary: 'Rota para inserir novos inscritos no banco de dados',
  })
  @ApiBody({
    type: CreateSubscribeDto,
    description: 'Estrutura JSON para inscrição',
  })
  @Post()
  create(@Body() createSubscribe: CreateSubscribeDto) {
    return this.subscribedService.create(createSubscribe);
  }

  @ApiOperation({
    summary: 'Rota para buscar todos os inscritos, sem autenticação',
  })
  @Get()
  findAll() {
    return this.subscribedService.findAll();
  }
}
