  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import { ConfigService} from '@nestjs/config';
import { CustomSocketIoAdapter } from './socket-adapter/socket.adapter';

  async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    
    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 3000);
    
    // app.enableCors({
    //   origin: 'https://chat-de-mensajes-client.onrender.com/'
    // });

    app.useWebSocketAdapter(new CustomSocketIoAdapter(app));
    await app.listen(port);
  }
  bootstrap();

