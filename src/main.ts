import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isDev } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (isDev) {
    console.log('isDEv');
    app.enableCors({
      origin: ['http://localhost', 'http://localhost:5173'],
      credentials: true,
    });
  }
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();

//Добавить password
