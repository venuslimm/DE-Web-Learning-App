import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '../load-env';

// TODO: settle env var
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(env.thisPort);
  console.log(`Server is running on port ${env.thisPort}`);
}
bootstrap();
