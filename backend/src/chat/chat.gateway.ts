import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { OnModuleInit } from '@nestjs/common';
import { Server, Socket } from 'socket.io';


// @WebSocketGateway({ cors: '*:*' })
@WebSocketGateway({ cors: 'https://chat-de-mensajes-client.onrender.com/'})


export class ChatGateway implements OnModuleInit  {

  @WebSocketServer()
  server: Server;
  

    constructor(private readonly chatService: ChatService) { }




  onModuleInit() {


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
