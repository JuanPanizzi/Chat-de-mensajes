// import { ChatBox2 } from './componentes/ChatBox'
import io from 'socket.io-client'
import './App.css'
import { ChatBox } from './componentes/ChatBox2'

const socket = io('/')

function App() {

  
  return (
    <>
  <ChatBox/>
    </>
  )
}

export default App
