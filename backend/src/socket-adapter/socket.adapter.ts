import { IoAdapter } from '@nestjs/platform-socket.io';
import * as socketio from 'socket.io';

export class CustomSocketIoAdapter extends IoAdapter {
  createIOServer(port: number, options?: socketio.ServerOptions): any {
    const server = super.createIOServer(port, options);

    server.origins('https://chat-de-mensajes-client.onrender.com/'); // Set origins here

    return server;
  }
}