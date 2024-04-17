import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { createServer, Server as HTTPServer } from 'http';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit  {


  @WebSocketServer()
  server: Server;
  

    constructor(private readonly chatService: ChatService) { }




  onModuleInit() {


    const httpServer: HTTPServer = createServer();

    // Configurar CORS en el servidor HTTP para socket.io
    const io = require('socket.io')(httpServer, {
      cors: {
        origin: 'https://chat-de-mensajes-client.onrender.com' || 'http://localhost:5173/',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
      }
    });

    // Asignar el servidor socket.io al WebSocketGateway
    this.server = io;



    const port = process.env.PORT || 3000;
    httpServer.listen(port, () => {
      console.log(`Servidor HTTP y WebSocket iniciado en el puerto ${port}`);
    });


    this.server.on('connection', (socket: Socket) => {

      console.log(`socket conectado, ${socket.id}`)

      //Recibo mensaje del socket
      socket.on('message', ({body, hour}) => {

        
        //Luego el socket envía a todos los socket restantes ese mensaje (menos a el)
        socket.broadcast.emit('messageFromAnotherSocket', {body, from: socket.id.slice(14), hour})
        
        console.log('este es el mensaje del socke enviado')
        console.log(body)
      })



      socket.on('disconnect', () => {

        console.log('socket desconectado')
      })

    })
  }
}
