import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribedModule } from './subscribed/subscribed.module';
import { Subscribed } from './subscribed/entities/subscribed.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      entities: [Subscribed],
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      logging: true,
    }),
    SubscribedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
