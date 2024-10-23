import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from './app/shared/pipes/validation.pipe';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
  .setTitle('Biddi API')
  .setVersion('0.0.1')
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory)

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get<number>('PORT'));
}
bootstrap();

