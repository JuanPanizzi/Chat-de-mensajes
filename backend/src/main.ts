import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: 'https://chat-de-mensajes-client.onrender.com/',
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    credentials: true, // Permite enviar cookies y headers de autenticación
  };

  app.enableCors(corsOptions);

  await app.listen(3000);



}
bootstrap();

