  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import { ConfigService} from '@nestjs/config';


  
  async function bootstrap() {
  
    const app = await NestFactory.create(AppModule, {cors: true});

    
    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 3000);
  
    
    app.enableCors({
      origin: '*'
    });

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
    await app.listen(port);
  }
  bootstrap();

