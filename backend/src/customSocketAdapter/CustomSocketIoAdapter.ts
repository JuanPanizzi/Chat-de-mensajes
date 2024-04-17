import { IoAdapter } from "@nestjs/platform-socket.io";
import { ServerOptions } from "socket.io";

export class CustomSocketIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
      const server = super.createIOServer(port, options);
  
      // Configurar CORS según tus necesidades
      server.origins(['https://chat-de-mensajes-client.onrender.com']);
  
      return server;
    }
  }
  