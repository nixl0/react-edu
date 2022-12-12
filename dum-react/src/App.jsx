import { useEffect, useState } from 'react'
import Message from './Message'
import AddMessageForm from './AddMessageForm'
import messagesJson from './assets/messages.json'

function App() {

  const [messages, setMessages] = useState(messagesJson)

  const addMessage = (e, title, text) => {
    e.preventDefault()

    const freeKey = Math.max(...messages.map(message => message.key)) + 1

    setMessages([...messages, {
      key: freeKey,
      title: title,
      text: text,
      timestamp: new Date().toLocaleString(navigator.language),
      priority: 0
    }])
  }

  return (
    <div className="App">
      

      <h1 className='text-center'>hello world</h1>

      <AddMessageForm handleAddMessageClick={addMessage} />

      {messages.map(message => <Message {...message} />)}
    </div>
  )
}

export default App