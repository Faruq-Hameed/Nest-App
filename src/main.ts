import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      // disableErrorMessages: true,
      transform: true,
      whitelist: true,  // Strip non-decorated properties
      forbidNonWhitelisted: true  // Throw error on extra properties
    }
  )); await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
