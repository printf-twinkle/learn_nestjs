import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
  .setTitle('Todo REST API')
  .setDescription("A rest api to list user's todos/tasks, authorization implemented using JWT token. The API is made using Nest JS")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/swagger', app, document, {
  customCssUrl:
  'https://cdnjs.cloudfare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
  customJs: [
    'https://cdnjs.cloudfare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
    'https://cdnjs.cloudfare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalaone-preset.js',
  ],
});
await app.listen(3000);
}
bootstrap();
