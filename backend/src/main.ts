import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConfigService } from '@nestjs/config';
import { Server } from 'socket.io';
import * as cors from 'cors';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // app.enableCors({
  //   origin: 'https://chat-de-mensajes-client.onrender.com' || '*',
  //   methods: ['GET', 'POST'],
  //   credentials: true,
  // });
  app.use(cors({
    origin: 'https://no-fumar-app.onrender.com' || '*', // o '*' para permitir cualquier origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));
  
  // const configService = app.get(ConfigService);
  // const port = configService.get<number>('PORT', 3000);

  // Configurar socket.io en el mismo servidor HTTP de NestJS
  // const server = app.getHttpServer();

  // const io = new Server(server, {
  //   cors: {
  //     origin: 'https://chat-de-mensajes-client.onrender.com',
  //     methods: ['GET', 'POST'],
  //     credentials: true,
  //   },
  // });
  // io.on('connection', (socket) => {
  //   console.log('Cliente conectado a través de WebSocket:', socket.id);
  //   // Aquí puedes implementar la lógica para manejar eventos de socket.io
  // });


  await app.listen(3000);



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



}
bootstrap();

