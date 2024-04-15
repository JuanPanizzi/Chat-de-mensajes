import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Server } from 'socket.io';
import * as cors from 'cors';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true });


  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT', 3000);


  app.use(cors({
    origin: 'https://chat-de-mensajes-client.onrender.com' || '*', // o '*' para permitir cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  //2
  // app.useWebSocketAdapter(new CustomSocketIoAdapter(app));

  //3
  // app.enableCors({
  //   origin: '*', // Allow requests from all origins,
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   allowedHeaders: 'Content-Type,Authorization',
  // });

  //3B
  // const httpAdapter = app.getHttpAdapter();
  // app.useWebSocketAdapter(new IoAdapter(httpAdapter, {
  //   cors: {
  //     origin: '*', // Allow requests from all origins
  //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //     allowedHeaders: 'Content-Type,Authorization',
  //   },
  // }));

  //WEBSOCKETS CORS
  // Crear servidor HTTP
  const server = app.getHttpServer();

  // Configurar socket.io con opciones CORS
  const io = new Server(server, {
    cors: {
      origin: 'https://chat-de-mensajes-client.onrender.com',
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });
  // Lógica de manejo de conexiones de socket.io
  io.on('connection', (socket) => {
    console.log('Cliente conectado a través de WebSocket:', socket.id);
    // Aquí puedes implementar lógica para manejar eventos de socket.io
  });

  await app.listen(port);
}
bootstrap();

