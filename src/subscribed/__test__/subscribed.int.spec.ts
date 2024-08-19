import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  closeDatabaseIntegrationConnections,
  databaseIntegrationSetup,
} from './helper.integration';

describe('Integrations tests', () => {
  let app: INestApplication;
  jest.setTimeout(30000);

  beforeAll(async () => {
    const databaseConnection = await databaseIntegrationSetup();

    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(databaseConnection.options)],
    }).compile();

    app = module.createNestApplication();

    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await closeDatabaseIntegrationConnections();
  });

  it('should be defined', async () => {
    expect(app).toBeDefined();
  });
});
