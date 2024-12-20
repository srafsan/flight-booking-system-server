import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://dapper-kringle-329e13.netlify.app',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
