import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.ORIGIN,
  });
  const config = new DocumentBuilder()
    .setTitle('PokeApi')
    .setDescription('Documentação da minha PokeAPI implementando a PokeAPI')
    .setVersion('1.0')
    .addTag('pokemons')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
