import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '../load-env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // Allow requests from this origin
    origin: `http://${env.host}:${env.webPort}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(env.thisPort);
  console.log(`Server is running on port ${env.thisPort}`);
}
bootstrap();
