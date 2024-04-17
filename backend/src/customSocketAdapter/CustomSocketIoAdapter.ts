import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";

export class CustomSocketIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
      const server = super.createIOServer(port, options);
  
      const corsOptions = {
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
          allowedHeaders: ['my-custom-header'],
          credentials: true,
        }
      };
  
      server.use((socket, next) => {
        const request = socket.request;
        if (request.headers.origin) {
          corsOptions.cors.origin = request.headers.origin;
        }
        next();
      });
  
      return server;
    }
  }
  