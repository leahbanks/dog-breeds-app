import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //allows front end to access back end on a different port
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
