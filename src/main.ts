import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const PORT = (await configService.get('PORT')) || 3000;

  await app.listen(PORT);

  console.log(`Server start at port: ${PORT}...`);
}
bootstrap();
