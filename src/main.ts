import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import exceptionFactory from './shared/erros/exception-factory';

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory,
      errorHttpStatusCode: 422,
    }),
  );

  await app.listen(PORT, () =>
    console.log(`Server is running on PORT ${PORT}`),
  );
}
bootstrap();
