// import { ChatBox2 } from './componentes/ChatBox'
import io from 'socket.io-client'
import './App.css'
import { ChatBox } from './componentes/ChatBox2'

const socket = io('https://chat-de-mensajes.onrender.com')

function App() {

  
  return (
    <>
  <ChatBox/>
    </>
  )
}

export default App
