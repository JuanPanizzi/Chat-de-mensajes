import React, { useState } from 'react'

import io from 'socket.io-client'
const socket = io('/')

export const useMessages = () => {


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
    const updateMessage = (value) => setMessage(value)
    
    const handleHour = () => {
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

    const handleReceivedMessages = ( )=>{
        socket.on('messageFromAnotherSocket', (messageReceived) => {
          //messageRecieved: {body: 'mensaje', from: 'socket.id', hora:hour}
    
          console.log('Este es el mensaje recibido:')
          console.log(messageReceived)
    
          updateMessages(messageReceived)
          console.log('messages')
          console.log(messages)
        })
      }

      const handleSocketOff = ()=>{
        socket.off('messageFromAnotherSocket')
      
      }

    return {
        message,
        messages,
        handleSubmit,
        handleHour,
        updateMessages,
        updateMessage,
        handleReceivedMessages,
        handleSocketOff


    }
}
