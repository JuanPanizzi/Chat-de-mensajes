import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import fondo from '../img/fondo-wsp.jpg'
import micro from '../img/microphone.png'
import user from '../img/user.png'
import send from '../img/send.png'
// bg-image url('img/mi-imagen.jpg')

const socket = io('/')

export const ChatBox = () => {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  // const [hour, setHour] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const hour = handleHour()

    const newMessage = {
      body: message,
      from: "Me",
      hour
    }
    setMessages(prevState => [...prevState, newMessage])
    socket.emit('message', newMessage)
    setMessage('')
  }

  const updateMessages = (mssge) => setMessages(prevState => [...prevState, mssge])


  const handleHour = ( ) => {
    // Obtener la hora actual
const now = new Date();

// Obtener las horas y minutos
const hours = now.getHours();
const minutes = now.getMinutes();

// Formatear la hora y los minutos con dos dígitos (agregar ceros a la izquierda si es necesario)
const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

// Crear el string con el formato 'HH:mm'
const formattedTime = `${formattedHours}:${formattedMinutes}`;

// setHour(formattedTime)
return formattedTime;

  }


  useEffect(() => {

    socket.on('messageFromAnotherSocket', (messageReceived) => {
      //messageRecieved: {body: 'mensaje', from: 'socket.id', hora:hour}

      console.log('Este es el mensaje recibido:')
      console.log(messageReceived)

      updateMessages(messageReceived)
      console.log(messages)
    })

    return () => {
      socket.off('messageFromAnotherSocket')
    }
  }, [])



  return (
    <>
      <section className='h-screen flex flex-col justify-between text-white lg:flex-row lg:items-center lg:justify-center overflow-y-auto'>
        <div className='text-xl   p-5 text-center lg:text-left lg:h-dvh lg:flex lg:justify-center lg:items-center lg:w-1/2'>
          <h1 className='font-custom m-3 ml-10 text-slate-50 text-base lg:text-3xl'><b className='text-lg lg:text-5xl'>Proyecto Chat</b> <br/> Para probar el chat puedes abrir una ventana nueva en el navegador y escribir en ambos chats para ver cómo se reciben y envían los mensajes</h1>
        </div>
        <div className='h-dvh lg:h-dvh mt-10 lg:mt-0 flex items-center justify-center  lg:w-1/2  '>

          <form action="#"
            onSubmit={handleSubmit}
          style={{ 
            backgroundImage: `url(${fondo})`
        }}
            className='min-h-5/6   h-full  overflow-y-auto w-96 rounded-lg relative pb-10 text-white lg:h-5/6 lg:mt-3'>
            
            <div className='bg-dark-1 font-bold flex p-3 items-center text-sm'>
              <div className='bg-dark-3 mr-3 p-2 rounded-full'>
                <img src={user} alt="" />
              </div>
              <h1 >Usuario</h1>
            </div>
            <ul className='p-2 text-sm'>
              {messages.map((msje, index) => (
                <li key={index} className={
                  `my-2 p-2 table  rounded-md ${msje.from == 'Me' ? 'bg-green-1 ml-auto' : 'bg-dark-1'}`
                }>
                  {msje.body}
                  <span className={`block text-xs text-slate-400 ${msje.from == 'Me' ? 'ml-auto' : 'mr-auto'}`}>
                     {msje.hour}
                  </span>
                </li>
              ))}
            </ul>
            <div className=' bg-dark-1 p-2 flex items-center justify-center fixed bottom-0 max-[373px]:w-full w-96   '>
              <label htmlFor="inputMessage">
                </label>
              <input type="text" placeholder='Escribe un mensaje...' id='inputMessage' 
              className=' text-sm bg-dark-2 w-4/5 focus:outline-none p-2 text-white text-sm rounded-md'
               value={message} onChange={(e) => setMessage(e.target.value)}  />
              
                {
                  !message ? 
              <span className='w-1/5  '>
                  <img src={micro} alt="" className='mx-auto' />
              </span>
                  :
                  <button className='w-1/5'>
                  <img src={send} alt="" className='mx-auto' />
                  </button>
                }
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
