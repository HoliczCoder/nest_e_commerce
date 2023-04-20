import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setAppDB } from './setAppDB';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('boostrap');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setAppDB(app);
  await app.listen(3000);
  logger.log('App listening on port ' + 3000);
}
bootstrap();
